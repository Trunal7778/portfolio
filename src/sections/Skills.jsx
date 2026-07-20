import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, SiFlask, SiTailwindcss, SiDjango, SiMysql, SiSqlite, SiRedis, SiPostman, SiJinja, SiJavascript 
} from 'react-icons/si';
import { 
  FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaAngular, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { DiDatabase, DiVisualstudio } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { GoShieldCheck } from 'react-icons/go';
import { VscCode } from 'react-icons/vsc';
import { resumeData } from '../data/resumeData';

const iconMap = {
  SiPython: <SiPython className="w-6 h-6 text-[#3776AB]" />,
  FaJava: <FaJava className="w-6 h-6 text-[#5382A1]" />,
  IoLogoJavascript: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
  DiDatabase: <DiDatabase className="w-6 h-6 text-[#0064a5]" />,
  FaHtml5: <FaHtml5 className="w-6 h-6 text-[#E34F26]" />,
  FaCss3Alt: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" />,
  SiTailwindcss: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
  FaBootstrap: <FaBootstrap className="w-6 h-6 text-[#7952B3]" />,
  FaAngular: <FaAngular className="w-6 h-6 text-[#DD0031]" />,
  SiFlask: <SiFlask className="w-6 h-6 text-[#000000] dark:text-[#FFFFFF]" />,
  DiDjango: <SiDjango className="w-6 h-6 text-[#092E20]" />,
  SiJinja: <SiJinja className="w-6 h-6 text-[#B41717]" />,
  BiLogoPostgresql: <BiLogoPostgresql className="w-6 h-6 text-[#4169E1]" />,
  SiMysql: <SiMysql className="w-6 h-6 text-[#4479A1]" />,
  SiSqlite: <SiSqlite className="w-6 h-6 text-[#003B57]" />,
  SiRedis: <SiRedis className="w-6 h-6 text-[#DC382D]" />,
  FaGitAlt: <FaGitAlt className="w-6 h-6 text-[#F05032]" />,
  FaGithub: <FaGithub className="w-6 h-6 text-[#181717] dark:text-[#FFFFFF]" />,
  DiVisualstudio: <DiVisualstudio className="w-6 h-6 text-[#5C2D91]" />,
  SiPostman: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
  GoShieldCheck: <GoShieldCheck className="w-6 h-6 text-[#059669]" />,
  VscCode: <VscCode className="w-6 h-6 text-[#2563EB]" />,
};

export default function Skills() {
  const { skills } = resumeData;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skills.map(s => s.category)];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skills.flatMap(s => s.items);
    }
    const found = skills.find(s => s.category === activeCategory);
    return found ? found.items : [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold mb-3">
            Core Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Technologies & Tools
          </h3>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 dark:bg-sky-400 text-white dark:text-slate-950 shadow-md shadow-blue-500/10 dark:shadow-sky-400/10'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:border-blue-500 dark:hover:border-sky-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory} // Force re-animation on tab change
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/30 backdrop-blur-md shadow-sm hover:shadow-lg dark:hover:bg-[#1E293B]/50 transition-all duration-300 overflow-hidden flex flex-col items-start"
              >
                {/* Decorative border illumination */}
                <div className="absolute inset-0 border border-transparent dark:group-hover:border-sky-400/20 group-hover:border-blue-500/20 rounded-2xl pointer-events-none transition-colors duration-300"></div>

                {/* Card Top: Icon & Name */}
                <div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/60 w-fit rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {iconMap[skill.icon] || <DiDatabase className="w-6 h-6 text-slate-400" />}
                  </div>
                  <h4 className="font-bold text-slate-850 dark:text-slate-100 text-base font-poppins">
                    {skill.name}
                  </h4>
                </div>


              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
