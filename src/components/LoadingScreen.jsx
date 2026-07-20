import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ finishLoading }) {
  const [text, setText] = useState('');
  const fullText = "const developer = { name: 'Trunal Prajapati', status: 'Ready' };";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          finishLoading();
        }, 800);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090D16] text-sky-400 font-mono text-xs sm:text-sm px-4"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-4 max-w-sm sm:max-w-md w-full">
        {/* Pulsing Visual Bracket Loader */}
        <div className="flex justify-center mb-4">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-l-2 border-sky-400 border-r-transparent border-b-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-1 rounded-full border-b border-dashed border-blue-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-lg font-bold text-sky-300">&lt;/&gt;</span>
          </div>
        </div>

        {/* Typing Box */}
        <div className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-lg shadow-xl min-h-[50px] flex items-center">
          <span className="text-slate-600 select-none mr-2">~</span>
          <span className="text-slate-200">{text}</span>
          <span className="inline-block w-1.5 h-3.5 bg-sky-400 ml-1 animate-pulse" />
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full bg-slate-900 rounded-full h-1 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 h-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
