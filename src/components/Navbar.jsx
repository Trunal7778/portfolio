import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Projects', target: '#projects' },
  { label: 'Education', target: '#education' },
  { label: 'Contact', target: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor and set active section based on scroll position
  useEffect(() => {
    const sections = navItems.map(item => item.target.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -55% 0px', // center screen offset detection
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-md'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')} 
          className="text-xl font-bold tracking-tight text-blue-600 dark:text-sky-400 font-poppins relative group select-none"
        >
          Trunal<span className="text-slate-900 dark:text-slate-200 font-normal"> Prajapati</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.target}
              onClick={(e) => handleLinkClick(e, item.target)}
              className={`text-sm font-medium transition-colors duration-200 relative py-1 hover:text-blue-600 dark:hover:text-sky-400 ${
                activeSection === item.target.substring(1)
                  ? 'text-blue-600 dark:text-sky-400'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {item.label}
              {activeSection === item.target.substring(1) && (
                <motion.span
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 dark:bg-sky-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
          <ThemeToggle />
        </nav>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-850 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.target}
                  onClick={(e) => handleLinkClick(e, item.target)}
                  className={`text-base font-medium py-1.5 transition-colors border-l-2 pl-3 ${
                    activeSection === item.target.substring(1)
                      ? 'text-blue-600 dark:text-sky-400 border-blue-600 dark:border-sky-400 bg-blue-50/50 dark:bg-blue-950/20 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
