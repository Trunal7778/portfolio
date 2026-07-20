import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = resumeData;

  return (
    <footer className="bg-slate-100 dark:bg-[#0A0D16] border-t border-slate-200 dark:border-slate-800/80 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright */}
        <div className="text-center sm:text-left order-2 sm:order-1">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 select-none">
            Designed & Engineered with precision.
          </p>
        </div>

        {/* Right Side: Social links */}
        <div className="flex items-center gap-5 order-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/50 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/50 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/50 transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5 stroke-[2]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
