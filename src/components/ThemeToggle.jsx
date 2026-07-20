import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      // Default to dark mode if no preference is set
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl backdrop-blur-md bg-white/10 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/60 shadow-lg text-amber-500 dark:text-sky-300 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 stroke-[2]" />
      ) : (
        <Moon className="w-5 h-5 stroke-[2] text-slate-700 dark:text-sky-300" />
      )}
    </button>
  );
}
