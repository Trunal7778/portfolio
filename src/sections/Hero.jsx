import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Database, Code, Cpu } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { SiPython, SiFlask, SiReact, SiJavascript } from 'react-icons/si';

const titles = [
  "Aspiring Python Developer",
  "Full Stack Developer",
  "Backend Enthusiast",
  "Integrated M.Sc. (IT) Student"
];

export default function Hero() {
  const { personalInfo } = resumeData;

  // Typing animation states
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeTitle = titles[titleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeTitle.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 25);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeTitle.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 60);
    }

    if (!isDeleting && charIndex === activeTitle.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex(prev => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 sm:pb-28 px-6 bg-slate-50 dark:bg-[#0F172A]">
      {/* Decorative Blur Background Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[80px] sm:blur-[120px] pulse-glow-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-sky-500/10 dark:bg-sky-500/10 blur-[80px] sm:blur-[120px] pulse-glow-2"></div>
      </div>

      {/* Floating Interactive Coding Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
        {/* Python Icon */}
        <motion.div 
          className="absolute top-[25%] left-[8%] text-blue-500/40 dark:text-blue-500/30 text-5xl"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiPython />
        </motion.div>

        {/* Flask / Web Icon */}
        <motion.div 
          className="absolute bottom-[30%] left-[10%] text-slate-500/40 dark:text-slate-400/20 text-4xl"
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <SiFlask />
        </motion.div>

        {/* React Icon */}
        <motion.div 
          className="absolute top-[20%] right-[8%] text-sky-400/30 text-5xl"
          animate={{ y: [0, -12, 0], rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <SiReact />
        </motion.div>

        {/* JS Icon */}
        <motion.div 
          className="absolute bottom-[28%] right-[8%] text-amber-500/30 text-4xl"
          animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <SiJavascript />
        </motion.div>
      </div>

      {/* Hero Content Split Grid */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">
        
        {/* Left Side: Profile Text details */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1">
          {/* Welcome Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 px-4 py-1.5 rounded-full border border-blue-500/20 dark:border-sky-500/20 bg-blue-500/5 dark:bg-sky-500/5 text-xs font-semibold text-blue-600 dark:text-sky-300 uppercase tracking-widest flex items-center gap-1.5 select-none"
          >
            <Cpu className="w-3.5 h-3.5 stroke-[2] animate-pulse" />
            Ahmedabad, India | M.Sc. IT Student
          </motion.div>

          {/* Greeting & Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-poppins tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
          >
            Hello, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-400 dark:to-indigo-400">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Dynamic Typing Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-205 font-mono h-8 sm:h-10 mb-6 flex items-center justify-center lg:justify-start"
          >
            <span className="text-blue-600 dark:text-sky-400">&gt;&nbsp;</span>
            <span>{currentText}</span>
            <span className="w-2.5 h-5 bg-blue-600 dark:bg-sky-400 ml-1.5 animate-pulse" />
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mb-9 leading-relaxed"
          >
            {personalInfo.shortIntro} Specialized in structuring efficient backend engines with Python, managing database designs, and building modern user interfaces.
          </motion.p>

          {/* Buttons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-750 text-white font-semibold shadow-md hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              View Projects
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
            
            <a
              href="/resume.pdf"
              download="Trunal_Prajapati_Resume.pdf"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900 text-slate-850 dark:text-slate-100 font-semibold hover:border-blue-600 dark:hover:border-sky-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              Download Resume
              <Download className="w-4 h-4 stroke-[2]" />
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-transparent bg-blue-50 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-blue-600 dark:text-sky-300 font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              Contact Me
              <Mail className="w-4 h-4 stroke-[2]" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Profile Photo layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 90 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88">
            {/* Spinning colorful gradient glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-650 animate-spin [animation-duration:15s] p-[3px] shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-50 dark:bg-[#0F172A]" />
            </div>
            
            {/* Centered Image frame */}
            <div className="absolute inset-3.5 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900 shadow-2xl">
              <img
                src="/profile.jpg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://avatars.githubusercontent.com/u/104104996?v=4";
                }}
                alt={personalInfo.name}
                className="w-full h-full object-cover select-none scale-102 hover:scale-108 transition-transform duration-500"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll indicator mouse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 hidden md:flex flex-col items-center gap-2 select-none"
      >
        <span className="text-xs text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-650 flex justify-center p-1.5">
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-blue-600 dark:bg-sky-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
