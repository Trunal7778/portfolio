import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Users, Database, ShoppingBag, Eye, X, BookOpen, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const { projects } = resumeData;
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when specs modal is open (scroll bleed lock)
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filters = ["All", "Full Stack", "Backend"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Render a custom premium CSS illustration representing the project
  const renderProjectIllustration = (type) => {
    switch (type) {
      case 'placement':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-blue-600/90 to-indigo-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Visual background grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_14px]" />
            {/* Mock Dashboard Layout */}
            <div className="relative w-[85%] h-[75%] rounded-xl bg-slate-950/80 border border-white/10 p-3 shadow-2xl flex flex-col justify-between font-mono text-[10px] text-slate-350 select-none">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[9px] text-blue-400">admin-dashboard.py</span>
              </div>
              <div className="grid grid-cols-3 gap-2 my-2.5">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                  <span className="block text-[8px] text-slate-400 uppercase">Jobs</span>
                  <span className="font-bold text-xs text-sky-400">24</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                  <span className="block text-[8px] text-slate-400 uppercase">Applied</span>
                  <span className="font-bold text-xs text-blue-400">142</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                  <span className="block text-[8px] text-slate-400 uppercase">Placements</span>
                  <span className="font-bold text-xs text-emerald-400">89%</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xxs bg-emerald-500/10 text-emerald-350 p-1.5 rounded border border-emerald-500/20">
                <Users className="w-3.5 h-3.5 stroke-[2]" />
                <span>Celery & Redis Worker: Active</span>
              </div>
            </div>
          </div>
        );
      case 'honey':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-amber-500/80 to-[#78350F] flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            {/* Storefront Layout */}
            <div className="relative w-[85%] h-[75%] rounded-xl bg-slate-950/80 border border-white/10 p-3 shadow-2xl flex flex-col justify-between font-mono text-[10px] text-slate-350 select-none">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="font-poppins font-bold text-amber-400 tracking-tight text-[11px]">BeeSweet Co.</span>
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="w-16 h-16 rounded bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center text-amber-400">
                  <span className="text-[14px]">🍯</span>
                  <span className="text-[8px] mt-0.5">$18.99</span>
                </div>
                <div className="flex-1 ml-3 text-[9px] text-slate-400 flex flex-col gap-1">
                  <span className="text-white font-medium">Organic Honey Jar</span>
                  <span>Session: active_user_102</span>
                  <span className="text-amber-300">★★★★★ (48 reviews)</span>
                </div>
              </div>
              <div className="bg-amber-500/20 text-amber-250 p-1 rounded text-center text-xxs font-semibold border border-amber-500/30">
                SQLITE3 DB: Connected
              </div>
            </div>
          </div>
        );
      case 'student':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-cyan-600/90 to-blue-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:10px_10px]" />
            {/* Database schema layout */}
            <div className="relative w-[85%] h-[75%] rounded-xl bg-slate-950/80 border border-white/10 p-3 shadow-2xl flex flex-col justify-between font-mono text-[10px] text-slate-350 select-none">
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Database className="w-3.5 h-3.5" />
                  <span>students_db</span>
                </div>
                <span className="text-slate-500 text-[8px]">relations</span>
              </div>
              <div className="flex-1 my-1.5 flex flex-col gap-1.5 overflow-hidden">
                {/* Table row */}
                <div className="bg-white/5 px-2 py-1 rounded border border-white/5 flex justify-between text-[8px]">
                  <span className="text-cyan-300 font-semibold">T_Students</span>
                  <span className="text-slate-400">(id, name, course_id)</span>
                </div>
                {/* Table row */}
                <div className="bg-white/5 px-2 py-1 rounded border border-white/5 flex justify-between text-[8px]">
                  <span className="text-blue-300 font-semibold">T_Grades</span>
                  <span className="text-slate-400">(id, student_id, score)</span>
                </div>
              </div>
              <div className="text-[8px] bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 rounded p-1 flex items-center gap-1.5">
                <Code2 className="w-3 h-3 text-cyan-400" />
                <span>MySQL query executed in 1.4ms</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-48 bg-slate-800 flex items-center justify-center text-white">
            <BookOpen className="w-12 h-12" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0B0D16] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold mb-3">
            My Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Selected Projects
          </h3>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-blue-600 dark:bg-sky-500 text-white dark:text-slate-950 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-450 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#1E293B]/20 backdrop-blur-md overflow-hidden hover:shadow-xl dark:hover:border-sky-500/30 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Half: CSS Illustration */}
                <div onClick={() => setSelectedProject(project)} className="overflow-hidden relative cursor-pointer">
                  {renderProjectIllustration(project.image)}
                  
                  {/* Overlay eye indicator */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-lg bg-white/90 text-slate-900 font-mono text-xxs font-bold flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 stroke-[2]" /> VIEW SPECS
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Texts */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="px-2.5 py-0.5 text-xxs font-semibold bg-blue-100/50 text-blue-600 dark:bg-sky-500/10 dark:text-sky-300 rounded-md uppercase tracking-wider inline-block mb-3">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-slate-850 dark:text-white font-poppins mb-2">
                      {project.title}
                    </h4>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions & Technologies */}
                  <div>
                    {/* Technologies list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 text-xxs font-semibold bg-slate-200/50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-xxs font-semibold bg-slate-200/50 dark:bg-slate-900 text-slate-450 dark:text-slate-500 rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800/80 my-4"></div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                          project.demo && project.demo !== "#"
                            ? 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                            : 'bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        Details
                      </button>

                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Live
                        </a>
                      )}
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-450 dark:hover:border-slate-650 text-slate-650 dark:text-slate-300 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub className="w-4.5 h-4.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Detailed Modal popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
              >
                {/* Modal Title bar */}
                <div className="p-6 border-b border-slate-150 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-[#0B0D16]/50">
                  <div>
                    <span className="px-2.5 py-0.5 text-xxs font-bold bg-blue-100 text-blue-600 dark:bg-sky-500/10 dark:text-sky-300 rounded uppercase tracking-wider inline-block mb-1">
                      {selectedProject.category}
                    </span>
                    <h4 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                    aria-label="Close details modal"
                  >
                    <X className="w-5.5 h-5.5" />
                  </button>
                </div>

                {/* Modal Details Scroll Area */}
                <div className="p-6 overflow-y-auto max-h-[60vh] flex flex-col gap-6">
                  {/* Detailed features bullet points */}
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-mono">
                      Project Contributions & Architecture
                    </h5>
                    <ul className="flex flex-col gap-3">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className="flex gap-2.5 items-start text-sm text-slate-650 dark:text-slate-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 shrink-0 mt-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Tech stack tags */}
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-mono">
                      Tech Stack Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-650 dark:text-slate-350 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center gap-1.5"
                        >
                          <Code2 className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Actions Footer */}
                <div className="p-5 border-t border-slate-150 dark:border-slate-800 flex justify-end gap-3 bg-slate-50 dark:bg-[#0B0D16]/50">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold hover:border-slate-400 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-900 transition-all flex items-center justify-center gap-1.5"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  {selectedProject.demo !== "#" && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
