export const resumeData = {
  personalInfo: {
    name: "Trunal Prajapati",
    firstName: "Trunal",
    title: "Aspiring Python & Full Stack Developer",
    subtitle: "Integrated M.Sc. (IT) Student | Backend & Full Stack Developer",
    email: "trunalprajapati2@gmail.com",
    phone: "+91-9265182835",
    location: "Ahmedabad, Gujarat, India",
    github: "https://github.com/Trunal7778",
    linkedin: "https://www.linkedin.com/in/trunal-prajapati-654936354/",
    githubUsername: "Trunal7778",
    bio: "Motivated and enthusiastic Integrated M.Sc. (IT) student at JG University aspiring to build a career as a Full Stack Developer. With a strong foundation in Python, web development, database management, and backend workflows, I am passionate about developing scalable, efficient, and user-friendly applications. I am a quick learner with strong problem-solving abilities, seeking an internship or entry-level opportunity to contribute to innovative projects and grow professionally.",
    shortIntro: "I design and build robust backend engines and responsive full-stack applications. Passionate about Python, databases, and clean code.",
  },
  stats: {
    projectsCount: "3+",
    technologiesCount: "15+",
    githubRepos: "8+", // Safely fetched or fallback
    learningHours: "1200+",
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 90, icon: "SiPython" },
        { name: "Java", level: 75, icon: "FaJava" },
        { name: "JavaScript", level: 80, icon: "IoLogoJavascript" },
        { name: "SQL", level: 85, icon: "DiDatabase" }
      ]
    },
    {
      category: "Web & Frontend",
      items: [
        { name: "HTML5", level: 95, icon: "FaHtml5" },
        { name: "CSS3", level: 88, icon: "FaCss3Alt" },
        { name: "Tailwind CSS", level: 85, icon: "SiTailwindcss" },
        { name: "Bootstrap", level: 80, icon: "FaBootstrap" },
        { name: "Angular", level: 60, icon: "FaAngular" }
      ]
    },
    {
      category: "Web Frameworks & Backend",
      items: [
        { name: "Flask", level: 85, icon: "SiFlask" },
        { name: "Django", level: 70, icon: "DiDjango" },
        { name: "Jinja2", level: 80, icon: "SiJinja" }
      ]
    },
    {
      category: "Databases & Caching",
      items: [
        { name: "PostgreSQL", level: 80, icon: "BiLogoPostgresql" },
        { name: "MySQL", level: 85, icon: "SiMysql" },
        { name: "SQLite3", level: 88, icon: "SiSqlite" },
        { name: "Redis", level: 70, icon: "SiRedis" }
      ]
    },
    {
      category: "Tools & Testing",
      items: [
        { name: "Git", level: 85, icon: "FaGitAlt" },
        { name: "GitHub", level: 88, icon: "FaGithub" },
        { name: "VS Code", level: 90, icon: "DiVisualstudio" },
        { name: "Postman", level: 80, icon: "SiPostman" },
        { name: "Manual Testing", level: 85, icon: "GoShieldCheck" },
        { name: "Black Box Testing", level: 80, icon: "VscCode" }
      ]
    }
  ],
  projects: [
    {
      id: "placement-management-system",
      title: "Placement Management System",
      category: "Full Stack",
      description: "A comprehensive campus recruitment platform that automates student registrations, job tracking, and administrative workflows. Built with secure role-based access control and analytical dashboards.",
      details: [
        "Developed campus placement platform for student registration, job search, application tracking, company posting, and admin approval workflows.",
        "Built backend APIs and business logic with Flask, SQLAlchemy, and PostgreSQL for role-based access.",
        "Implemented interactive student, company, and admin dashboards using Jinja2, Bootstrap, and JavaScript.",
        "Integrated Celery and Redis to handle background workers for automated notifications, audit logging, report generation, and analytics."
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "Redis", "Celery", "SQLAlchemy", "Bootstrap", "JavaScript"],
      github: "https://github.com/Trunal7778",
      demo: "#",
      image: "placement"
    },
    {
      id: "honey-selling-website",
      title: "E-Commerce Honey Selling Website",
      category: "Full Stack",
      description: "A visually polished full-stack e-commerce store dedicated to selling honey products, featuring secure checkout, user session management, and product catalog operations.",
      details: [
        "Developed a full-stack e-commerce web application specialized in honey products distribution.",
        "Built an interface using clean HTML, CSS, and JS for an engaging shopping experience.",
        "Built custom backend routing, product logic, and user sessions management using Flask.",
        "Integrated SQLite3 database for secure user credentials, catalog items, and order history storage."
      ],
      technologies: ["Python", "Flask", "SQLite3", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Trunal7778",
      demo: "#",
      image: "honey"
    },
    {
      id: "student-management-system",
      title: "Student Management System",
      category: "Backend",
      description: "A backend-focused administration application providing structured relational storage and CRUD operations for managing student profiles, course loads, grades, and enrollments.",
      details: [
        "Designed and implemented relational database schemas with MySQL to ensure structural integrity and quick queries.",
        "Developed Python-based business logic supporting secure administrative operations on student datasets.",
        "Features student records, course registration, attendance tracking, and grading services."
      ],
      technologies: ["Python", "MySQL", "SQL"],
      github: "https://github.com/Trunal7778",
      demo: "#",
      image: "student"
    }
  ],
  education: [
    {
      degree: "Integrated M.Sc. in Information Technology (IMSc. IT)",
      institution: "JG University",
      location: "Ahmedabad, Gujarat",
      timeline: "2023 - Present",
      grade: "Overall CGPA: 7.0 (Up to Semester 6)",
      details: [
        "Currently Pursuing Semester 7",
        "Key Coursework: Backend Development, Database Engineering (MySQL/PostgreSQL), OOP (Python, Java), Manual & Automation Testing, Software Engineering Concepts (Waterfall methodology)."
      ]
    },
    {
      degree: "HSC (Class XII) - Commerce Stream",
      institution: "Gurushree Dharmdasji Maharaj Madhav Vidyalay",
      location: "Ahmedabad, Gujarat (Gujarat Board)",
      timeline: "March 2023",
      grade: "Grade: B2 | Percentile Rank: 78.64",
      details: [
        "Completed Higher Secondary Certificate (HSC) in the Commerce stream with a total score of 503/750.",
        "Demonstrated strong academic performance in core subjects including Statistics (67/100), Economics (61/100), Organization of Commerce (65/100), and English (85/100)."
      ]
    },
    {
      degree: "SSC (Class X)",
      institution: "Sahajanand Vidyalaya",
      location: "Ahmedabad, Gujarat (Gujarat Board)",
      timeline: "May 2021",
      grade: "Grade: A2 | Percentile Rank: 96.83 (88.17%)",
      details: [
        "Completed Secondary School Certificate (SSC) with a total score of 529/600.",
        "Achieved outstanding academic results with 96.83 percentile rank across core subjects including Mathematics (84/100), Science (78/100), Social Science (87/100), and English (93/100)."
      ]
    }
  ],
  certifications: []
};
