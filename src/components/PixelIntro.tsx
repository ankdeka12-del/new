/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PixelIntroProps {
  onComplete: () => void;
}

// 5x29 pixel grid for "HELLO"
// 1 = Active golden pixel, 0 = Empty pixel
const HELLO_GRID = [
  [1,0,0,0,1, 0, 1,1,1,1,1, 0, 1,0,0,0,0, 0, 1,0,0,0,0, 0, 0,1,1,1,0],
  [1,0,0,0,1, 0, 1,0,0,0,0, 0, 1,0,0,0,0, 0, 1,0,0,0,0, 0, 1,0,0,0,1],
  [1,1,1,1,1, 0, 1,1,1,1,0, 0, 1,0,0,0,0, 0, 1,0,0,0,0, 0, 1,0,0,0,1],
  [1,0,0,0,1, 0, 1,0,0,0,0, 0, 1,0,0,0,0, 0, 1,0,0,0,0, 0, 1,0,0,0,1],
  [1,0,0,0,1, 0, 1,1,1,1,1, 0, 1,1,1,1,1, 0, 1,1,1,1,1, 0, 0,1,1,1,0]
];

export default function PixelIntro({ onComplete }: PixelIntroProps) {
  const [stage, setStage] = useState<"hello" | "welcome" | "ready">("hello");
  const [welcomeText, setWelcomeText] = useState("");
  const targetWelcome = "WELCOME TO OUR PORTFOLIO_";

  // Timeline orchestration
  useEffect(() => {
    // Stage 1: HELLO grid animates for 2.2s, then switch to welcome
    const helloTimer = setTimeout(() => {
      setStage("welcome");
    }, 2500);

    return () => clearTimeout(helloTimer);
  }, []);

  // Typewriter effect for "welcome to my portfolio"
  useEffect(() => {
    if (stage !== "welcome") return;

    let index = 0;
    setWelcomeText("");

    const interval = setInterval(() => {
      if (index < targetWelcome.length) {
        index++;
        setWelcomeText(targetWelcome.slice(0, index));
      } else {
        clearInterval(interval);
        // Auto-complete after typewriter finishes plus small pause
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [stage]);

  // Handle immediate entry when user clicks ready or skip
  const handleProceed = () => {
    onComplete();
  };

  return (
    <div 
      id="pixel-intro-container" 
      className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center font-mono overflow-hidden select-none"
    >
      {/* Background Matrix/Grid Overlay */}
      <div 
        id="intro-grid-overlay" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0b291d_1px,transparent_1px),linear-gradient(to_bottom,#0b291d_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"
      />

      {/* Subtle atmospheric radial indigo glow */}
      <div 
        id="intro-radial-glow"
        className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"
      />

      {/* Skip Button */}
      <button
        id="skip-intro-btn"
        onClick={handleProceed}
        className="absolute top-6 right-6 px-4 py-2 text-xs uppercase tracking-widest text-slate-500 hover:text-indigo-400 border border-slate-800/80 hover:border-indigo-500/40 bg-slate-900/40 rounded transition-all duration-300 z-50 hover:shadow-[0_0_15px_rgba(99,102,241,0.1)] active:scale-95"
      >
        Skip Intro
      </button>

      <AnimatePresence mode="wait">
        {stage === "hello" && (
          <motion.div
            key="hello-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            {/* Retro terminal scanning lines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] z-40 opacity-30" />

            {/* Pixel Grid Rendering */}
            <div 
              id="hello-pixel-grid"
              className="grid gap-[3px] md:gap-[4px] p-4 bg-slate-900 border border-indigo-500/10 rounded-lg shadow-[0_0_30px_rgba(180,127,63,0.03)]"
              style={{ gridTemplateColumns: "repeat(29, minmax(0, 1fr))" }}
            >
              {HELLO_GRID.map((row, rowIndex) =>
                row.map((active, colIndex) => {
                  const delay = (colIndex + rowIndex) * 0.03;
                  return (
                    <motion.div
                      key={`cell-${rowIndex}-${colIndex}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: active ? 1 : 0.8, 
                        opacity: active ? 1 : 0.05,
                        backgroundColor: active ? "#b47f3f" : "rgba(180,127,63,0.05)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20, 
                        delay: delay 
                      }}
                      className={`w-[7px] h-[7px] sm:w-[10px] sm:h-[10px] md:w-[13px] md:h-[13px] rounded-[1px] ${
                        active ? "shadow-[0_0_8px_#b47f3f,0_0_2px_#b47f3f]" : ""
                      }`}
                    />
                  );
                })
              )}
            </div>

            {/* Subtitle status bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 text-[10px] tracking-widest text-indigo-500/50 uppercase font-bold"
            >
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
              SYSTEM INITIALIZING...
            </motion.div>
          </motion.div>
        )}

        {stage === "welcome" && (
          <motion.div
            key="welcome-stage"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-6 text-center max-w-lg"
          >
            <div className="text-indigo-400 text-xs tracking-[0.2em] uppercase mb-4 opacity-70 font-semibold font-sans">
              Nexora - The next generation
            </div>
            
            <h1 
              id="welcome-title-retro"
              translate="no"
              className="notranslate text-[10px] sm:text-sm md:text-lg text-slate-100 font-bold mb-6 tracking-wide min-h-[40px] md:min-h-[48px] text-center w-full max-w-full whitespace-normal break-words"
              style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: "1.6" }}
            >
              {welcomeText}
            </h1>

            <div className="w-32 h-1 bg-slate-900 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-300 shadow-[0_0_8px_#b47f3f]"
              />
            </div>
          </motion.div>
        )}

        {stage === "ready" && (
          <motion.div
            key="ready-stage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-8 text-center max-w-md"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6 animate-pulse">
              <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className="text-xl md:text-2xl text-slate-100 font-extrabold mb-3 tracking-tight font-sans">
              Enter Nexora
            </h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-sans font-medium">
              Welcome to the premium experience of NEXORA - The next generation design and high-performance ad creative showcase.
            </p>

            <button
              id="enter-btn-main"
              onClick={handleProceed}
              className="px-8 py-3 bg-white hover:bg-indigo-400 text-black font-bold tracking-wider text-xs uppercase rounded-full shadow-[0_4px_20px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer"
            >
              Enter Portfolio
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
