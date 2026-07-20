import { useState, useEffect } from 'react';

const CACHE_KEY_PROFILE = 'github_profile_data';
const CACHE_KEY_REPOS = 'github_repos_data';
const CACHE_TIME_KEY = 'github_data_timestamp';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour cache duration

export const useGitHubData = (username) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        const cachedTimestamp = localStorage.getItem(CACHE_TIME_KEY);
        const cachedProfile = localStorage.getItem(CACHE_KEY_PROFILE);
        const cachedRepos = localStorage.getItem(CACHE_KEY_REPOS);
        const now = Date.now();

        // Serve from cache if valid
        if (
          cachedTimestamp &&
          cachedProfile &&
          cachedRepos &&
          now - parseInt(cachedTimestamp, 10) < CACHE_DURATION
        ) {
          setProfile(JSON.parse(cachedProfile));
          setRepos(JSON.parse(cachedRepos));
          setLoading(false);
          return;
        }

        // Fetch fresh stats from GitHub REST API
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        ]);

        // If rate limited or error, throw error to trigger fallback mechanism
        if (!profileRes.ok || !reposRes.ok) {
          throw new Error(`GitHub API returned status: ${profileRes.status}/${reposRes.status}`);
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        // Write to Cache
        localStorage.setItem(CACHE_KEY_PROFILE, JSON.stringify(profileData));
        localStorage.setItem(CACHE_KEY_REPOS, JSON.stringify(reposData));
        localStorage.setItem(CACHE_TIME_KEY, now.toString());

        setProfile(profileData);
        setRepos(reposData);
        setLoading(false);
      } catch (err) {
        console.warn('Unable to retrieve fresh GitHub details. Accessing local cache / static fallback data.', err);
        setError(err.message);

        // Fallback to cache even if stale
        const cachedProfile = localStorage.getItem(CACHE_KEY_PROFILE);
        const cachedRepos = localStorage.getItem(CACHE_KEY_REPOS);
        
        if (cachedProfile && cachedRepos) {
          setProfile(JSON.parse(cachedProfile));
          setRepos(JSON.parse(cachedRepos));
          setLoading(false);
        } else {
          // Hardcoded fallback data representing Trunal's profile and repositories
          setProfile({
            login: username,
            name: "Trunal Prajapati",
            bio: "Integrated M.Sc. IT Student | Python & Full Stack Developer",
            public_repos: 12,
            followers: 5,
            following: 8,
            avatar_url: `https://avatars.githubusercontent.com/u/104104996?v=4`
          });
          setRepos([
            {
              id: 1,
              name: "Placement-Management-System",
              description: "Full-stack campus placement platform for student registration, job search, application tracking, company job posting, and admin approval workflows.",
              html_url: "https://github.com/Trunal7778",
              language: "Python",
              stargazers_count: 2,
              forks_count: 1
            },
            {
              id: 2,
              name: "Honey-Selling-Website",
              description: "E-Commerce honey selling storefront built with Python, Flask, HTML, CSS, JavaScript, and SQLite3.",
              html_url: "https://github.com/Trunal7778",
              language: "Python",
              stargazers_count: 1,
              forks_count: 0
            },
            {
              id: 3,
              name: "Student-Management-System",
              description: "Python and MySQL school management application for students, courses, grades and attendance.",
              html_url: "https://github.com/Trunal7778",
              language: "Python",
              stargazers_count: 1,
              forks_count: 0
            }
          ]);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [username]);

  return { profile, repos, loading, error };
};
