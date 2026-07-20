import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import GitHubStats from './sections/GitHubStats';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import GlowCursor from './components/GlowCursor';
import ScrollToTop from './components/ScrollToTop';

// Custom Premium 404 Page Component
function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#090D16] text-white font-poppins px-6 text-center relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-500/10 dark:bg-rose-500/5 blur-[100px] pulse-glow-1"></div>
      </div>

      <div className="relative z-10 max-w-md w-full flex flex-col items-center">
        <span className="px-3.5 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 text-xxs font-bold tracking-widest text-rose-450 uppercase mb-5 select-none">
          SYSTEM ERROR
        </span>
        <h1 className="text-8xl sm:text-9xl font-extrabold text-rose-500 font-mono tracking-tighter leading-none select-none">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold font-poppins mt-5">
          Directory Path Not Found
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
          The requested endpoint does not exist. It may have been relocated or deleted from our server cache.
        </p>
        <a
          href="/"
          className="mt-8 px-6 py-3.5 bg-blue-600 hover:bg-blue-750 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-sky-400/20 hover:scale-[1.02] active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
        >
          Return to Console
        </a>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Simple custom routing to detect invalid paths on static hosts
    const path = window.location.pathname;
    if (path !== '/' && path !== '/index.html' && path !== '') {
      setIs404(true);
    }
  }, []);

  if (is404) {
    return <NotFoundPage />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <div key="portfolio-root" className="flex flex-col min-h-screen relative text-slate-900 dark:text-white transition-colors duration-300">
            <GlowCursor />
            <Navbar />
            <main className="flex-1">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <GitHubStats />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
