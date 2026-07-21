import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Bookmark } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  const { education } = resumeData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold mb-3">
            My Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Education
          </h3>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Path */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-8 sm:pl-12 py-4 flex flex-col gap-12"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              {/* Glowing Dot Node */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-8 h-8 rounded-full bg-blue-600 dark:bg-sky-400 border-4 border-slate-50 dark:border-[#0F172A] flex items-center justify-center text-white dark:text-slate-900 shadow-md group-hover:scale-110 group-hover:bg-indigo-600 dark:group-hover:bg-sky-300 transition-all duration-300 overflow-hidden bg-white">
                {edu.logo ? (
                  <img src={edu.logo} alt="" className="w-full h-full object-contain bg-white" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-[#1E293B]/20 backdrop-blur-md hover:shadow-xl dark:hover:border-sky-500/20 hover:border-blue-500/20 transition-all duration-300">
                
                {/* Header: Date Badge & Course Name */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    {edu.logo && (
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/60 dark:border-slate-800 flex items-center justify-center shrink-0 overflow-hidden p-1.5 shadow-sm">
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-bold font-poppins text-slate-850 dark:text-white leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-blue-600 dark:text-sky-400 mt-1">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                  </div>

                  {/* Calendar Period Badge */}
                  <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 w-fit select-none shrink-0 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400" />
                    {edu.timeline}
                  </span>
                </div>

                {/* Grade Badge */}
                <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400 w-fit mb-6 select-none flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5" />
                  {edu.grade}
                </div>

                {/* Content details & Coursework */}
                <div className="flex flex-col gap-4 text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                  {edu.details.map((detail, dIdx) => (
                    <p key={dIdx} className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0 mt-2" />
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>

                {/* Sub Coursework Grid - Only for University level */}
                {idx === 0 && (
                  <div className="mt-8 border-t border-slate-150 dark:border-slate-800/60 pt-6">
                    <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500 font-bold flex items-center gap-1.5 mb-4 select-none">
                      <BookOpen className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400" />
                      Key Electives & Core Competence
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {["Backend Development", "Database Engineering", "OOP (Java & Python)", "Waterfall Methodology", "Software Quality Assurance", "Manual Testing"].map((course) => (
                        <span 
                          key={course}
                          className="px-3 py-1 rounded-lg text-xxs font-semibold bg-slate-50 dark:bg-slate-905 text-slate-550 dark:text-slate-400 border border-slate-150 dark:border-slate-850"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
