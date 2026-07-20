import React from 'react';
import { motion } from 'framer-motion';
import { GitFork, Star, Users, Folder, BookOpen, AlertCircle, Link } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { useGitHubData } from '../hooks/useGitHubData';

const languageColors = {
  Python: '#3776AB',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Java: '#b07219',
  TypeScript: '#3178C6',
  Vue: '#41B883',
  PostgreSQL: '#336791',
  default: '#858585'
};

export default function GitHubStats() {
  const { personalInfo } = resumeData;
  const { profile, repos, loading, error } = useGitHubData(personalInfo.githubUsername);

  // Calculate language distribution
  const getLanguageStats = () => {
    if (!repos || repos.length === 0) return [];
    
    const totals = {};
    let validCount = 0;

    repos.forEach((repo) => {
      if (repo.language) {
        totals[repo.language] = (totals[repo.language] || 0) + 1;
        validCount++;
      }
    });

    return Object.entries(totals)
      .map(([lang, count]) => ({
        name: lang,
        count,
        percentage: Math.round((count / validCount) * 100)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // top 5 languages
  };

  const languageStats = getLanguageStats();

  // Generate simulated GitHub contribution squares (53 weeks * 7 days)
  const generateSimulatedContributions = () => {
    const grid = [];
    const colors = [
      'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800/80',
      'bg-emerald-500/20 border-emerald-500/5 dark:bg-emerald-900/30',
      'bg-emerald-500/40 border-emerald-500/10 dark:bg-emerald-700/40',
      'bg-emerald-500/70 border-emerald-500/20 dark:bg-emerald-600/70',
      'bg-emerald-500 dark:bg-emerald-500 border-emerald-500/30'
    ];

    for (let i = 0; i < 365; i++) {
      // Weight it to have more empty/light green and some dense patches
      const rand = Math.random();
      let colorIndex = 0;
      if (rand > 0.85) colorIndex = 4;
      else if (rand > 0.65) colorIndex = 3;
      else if (rand > 0.45) colorIndex = 2;
      else if (rand > 0.2) colorIndex = 1;
      grid.push(colors[colorIndex]);
    }
    return grid;
  };

  const contributionSquares = generateSimulatedContributions();

  return (
    <section id="github" className="py-24 px-6 bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold mb-3">
            Open Source
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            GitHub Activity
          </h3>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {loading ? (
          /* Loading Skeleton State */
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="w-10 h-10 border-4 border-blue-600 dark:border-sky-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-mono text-slate-400">Syncing with GitHub API...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Profile summary card */}
            {profile && (
              <div className="lg:col-span-4 p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/20 backdrop-blur-md flex flex-col items-center text-center shadow-md">
                <img 
                  src={profile.avatar_url} 
                  alt={`${profile.name || profile.login} avatar`}
                  className="w-24 h-24 rounded-full border-2 border-blue-500 dark:border-sky-400 mb-4 shadow-lg select-none"
                  loading="lazy"
                />
                
                <h4 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
                  {profile.name || profile.login}
                </h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
                  @{profile.login}
                </p>

                <p className="text-sm text-slate-550 dark:text-slate-450 leading-relaxed mb-6 px-2">
                  {profile.bio || personalInfo.subtitle}
                </p>

                {/* Profile Stats Row */}
                <div className="grid grid-cols-3 gap-3 w-full bg-slate-50 dark:bg-[#0F172A]/50 p-4 rounded-2xl border border-slate-200/40 dark:border-slate-800/80 mb-6 font-mono text-center">
                  <div>
                    <span className="block text-lg font-bold text-slate-850 dark:text-slate-100">{profile.public_repos}</span>
                    <span className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold uppercase">Repos</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-slate-850 dark:text-slate-100">{profile.followers}</span>
                    <span className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold uppercase">Followers</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-slate-850 dark:text-slate-100">{profile.following}</span>
                    <span className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold uppercase">Following</span>
                  </div>
                </div>

                <a
                  href={`https://github.com/${personalInfo.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all w-full justify-center"
                >
                  <Link className="w-3.5 h-3.5" />
                  Visit GitHub Profile
                </a>
              </div>
            )}

            {/* Right side: Language breakdown & grid of repos */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              
              {/* Language Breakdown Card */}
              {languageStats.length > 0 && (
                <div className="p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/20 backdrop-blur-md shadow-sm">
                  <h5 className="font-bold text-sm text-slate-850 dark:text-slate-100 font-poppins mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-500 dark:text-sky-400" />
                    Top Languages
                  </h5>

                  {/* Multi-colored bar */}
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden flex mb-5 select-none">
                    {languageStats.map((lang) => (
                      <div
                        key={lang.name}
                        className="h-full first:rounded-l-full last:rounded-r-full"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: languageColors[lang.name] || languageColors.default
                        }}
                      />
                    ))}
                  </div>

                  {/* Custom Legend */}
                  <div className="flex flex-wrap gap-x-5 gap-y-3">
                    {languageStats.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-2 text-xs font-semibold">
                        <span 
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: languageColors[lang.name] || languageColors.default }}
                        />
                        <span className="text-slate-800 dark:text-slate-250">{lang.name}</span>
                        <span className="text-slate-450 dark:text-slate-500 font-mono font-medium">{lang.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Simulated Contribution Graph */}
              <div className="p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/20 backdrop-blur-md shadow-sm">
                <h5 className="font-bold text-sm text-slate-850 dark:text-slate-100 font-poppins mb-4">
                  Contributions Matrix (Simulated)
                </h5>
                <div className="overflow-x-auto no-scrollbar">
                  <div className="min-w-[580px] grid grid-flow-col grid-rows-7 gap-[3px] select-none">
                    {contributionSquares.map((bgColor, idx) => (
                      <div 
                        key={idx} 
                        className={`w-[8px] h-[8px] rounded-[1.5px] border border-transparent ${bgColor}`} 
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-450 dark:text-slate-500 font-mono mt-3 select-none">
                  <span>Less than 100 commits</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-slate-100 dark:bg-slate-900" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/20" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/40" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/70" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500" />
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Repo Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repos.slice(0, 4).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/10 hover:bg-slate-50/50 dark:hover:bg-[#1E293B]/30 hover:border-blue-500/20 dark:hover:border-sky-500/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-sky-400 font-bold mb-2">
                        <Folder className="w-4 h-4 shrink-0" />
                        <h6 className="text-sm font-poppins truncate max-w-[200px]">
                          {repo.name}
                        </h6>
                      </div>
                      
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {repo.description || "No description provided."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xxs font-mono font-bold text-slate-450 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      <span className="flex items-center gap-1">
                        <span 
                          className="w-2 h-2 rounded-full inline-block"
                          style={{ backgroundColor: languageColors[repo.language] || languageColors.default }}
                        />
                        {repo.language || "Plain Text"}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3.5 h-3.5 fill-slate-400/20" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork className="w-3.5 h-3.5" />
                          {repo.forks_count || 0}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
