import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

// Custom CountUp Component using requestAnimationFrame and IntersectionObserver
function StatCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const targetValue = parseInt(end.replace(/\D/g, ''), 10);
    if (isNaN(targetValue)) {
      setCount(end);
      return;
    }

    const duration = 1800; // ms
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * targetValue);

      if (frame >= totalFrames) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(currentValue);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="font-poppins">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { personalInfo, stats } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-[#0B0D16] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold mb-3"
          >
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins"
          >
            My Story & Academic Background
          </motion.h3>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Stylized Portrait / Graphic */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Decorative Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 opacity-80 blur-sm group-hover:scale-102 transition-transform duration-500"></div>
              
              {/* Inner Dark Mask Card */}
              <div className="absolute inset-1 rounded-[22px] bg-slate-100 dark:bg-[#0F172A] flex flex-col items-center justify-center p-6 text-center shadow-inner overflow-hidden border border-slate-200/50 dark:border-slate-800">
                
                {/* Floating graphic element representing backend developer */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-500 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-sky-500/25">
                    <GraduationCap className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  {/* Small absolute badge */}
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                  </span>
                </div>

                <h4 className="text-xl font-bold font-poppins text-slate-900 dark:text-white mb-1">
                  Trunal Prajapati
                </h4>
                <p className="text-sm font-semibold text-blue-600 dark:text-sky-400 mb-4 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Ahmedabad, Gujarat
                </p>

                <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800 my-2"></div>

                <div className="flex flex-col gap-2.5 text-left w-full mt-2 text-slate-650 dark:text-slate-350 text-xs font-mono">
                  <div className="flex justify-between">
                    <span>University:</span>
                    <span className="text-slate-800 dark:text-slate-100 font-medium font-sans">JG University</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Course:</span>
                    <span className="text-slate-800 dark:text-slate-100 font-medium font-sans">Integrated M.Sc. IT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target:</span>
                    <span className="text-slate-800 dark:text-slate-100 font-medium font-sans">Internships &amp; Full-Time</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Statistics */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h4 className="text-2xl font-bold font-poppins text-slate-800 dark:text-slate-100">
              Aspiring Full Stack Engineer focused on solving backend complexity
            </h4>
            
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base">
              {personalInfo.bio}
            </p>

            <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base">
              I spend most of my time constructing efficient server logics, structuring secure database connections, and managing processes. Currently, I am a final-year student at <strong className="text-slate-800 dark:text-slate-200">JG University</strong> looking to gain real-world industrial exposure.
            </p>

            {/* Quick Cards Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#0F172A]/50 flex gap-4 items-start shadow-sm">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-sky-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-850 dark:text-slate-100 text-sm">Focus Area</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Python, Flask, PostgreSQL</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-[#0F172A]/50 flex gap-4 items-start shadow-sm">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-850 dark:text-slate-100 text-sm">Academic Standings</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">CGPA: 7.0 | Completed 6th Sem</p>
                </div>
              </div>
            </div>

            {/* Animated statistics counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 border-t border-slate-150 dark:border-slate-800/80 pt-8">
              
              <div className="text-center">
                <h6 className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-sky-400">
                  <StatCounter end={stats.projectsCount.replace('+', '')} suffix="+" />
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5 font-semibold">
                  Projects
                </p>
              </div>

              <div className="text-center">
                <h6 className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-sky-400">
                  <StatCounter end={stats.technologiesCount.replace('+', '')} suffix="+" />
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5 font-semibold">
                  Technologies
                </p>
              </div>

              <div className="text-center">
                <h6 className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-sky-400">
                  <StatCounter end={stats.githubRepos.replace('+', '')} suffix="+" />
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5 font-semibold">
                  GitHub Repos
                </p>
              </div>

              <div className="text-center">
                <h6 className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-sky-400">
                  <StatCounter end={stats.learningHours.replace('+', '')} suffix="+" />
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5 font-semibold">
                  Learning Hours
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
