/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  ArrowUp, 
  ExternalLink, 
  Cpu, 
  Zap, 
  Award, 
  Sparkles, 
  CheckCircle,
  TrendingUp,
  Building2,
  Users2,
  Lock
} from "lucide-react";

import PixelIntro from "./components/PixelIntro";
import VideoGallery from "./components/VideoGallery";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import NexoraLogo from "./components/NexoraLogo";
import { MarbleVeinLeft, MarbleVeinRight, MarbleVeinBottom } from "./components/MarbleBackground";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [conversionMultiplier, setConversionMultiplier] = useState(70);
  const emailAddress = "nexora.org.10@gmail.com";

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/20 selection:text-indigo-200 overflow-x-hidden antialiased">
      <AnimatePresence mode="wait">
        {!introComplete ? (
          <motion.div key="intro-screen" className="contents">
            <PixelIntro onComplete={() => setIntroComplete(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main-portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
             {/* Subtle atmospheric ambient gold lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-indigo-500/2 blur-[150px] pointer-events-none -z-10" />
            <div className="absolute bottom-[800px] left-0 w-[600px] h-[600px] bg-indigo-500/3 blur-[180px] pointer-events-none -z-10" />

            {/* Glowing gold veins imitating luxury Midnight Blue Marble splits in empty spaces */}
            <MarbleVeinLeft />
            <MarbleVeinRight />
            <MarbleVeinBottom />

            {/* Sticky Glassmorphic Header */}
            <header className="sticky top-0 z-40 bg-slate-950/75 backdrop-blur-md border-b border-slate-900/60 transition-all duration-300">
              <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo Brand */}
                <div 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={scrollToTop}
                >
                  <NexoraLogo size={38} className="group-hover:scale-105 transition-transform duration-300" />
                  <div className="flex flex-col -space-y-0.5">
                    <span className="text-base font-bold tracking-[0.25em] text-slate-100 font-sans leading-none">NEXORA</span>
                    <span className="text-[8px] font-extrabold text-indigo-400/90 tracking-wider uppercase">THE NEXT GENERATION</span>
                  </div>
                </div>

                {/* Center Navigation links */}
                <nav className="hidden md:flex items-center gap-8">
                  <button 
                    id="nav-link-showcase"
                    onClick={() => scrollToSection("work-section")} 
                    className="text-xs font-semibold tracking-wider text-slate-400 hover:text-indigo-400 uppercase transition-colors cursor-pointer"
                  >
                    Our Work
                  </button>
                  <button 
                    id="nav-link-validation"
                    onClick={() => scrollToSection("testimonials-section")} 
                    className="text-xs font-semibold tracking-wider text-slate-400 hover:text-indigo-400 uppercase transition-colors cursor-pointer"
                  >
                    Validation
                  </button>
                  <button 
                    id="nav-link-partner"
                    onClick={() => scrollToSection("contact-section")} 
                    className="text-xs font-semibold tracking-wider text-slate-400 hover:text-indigo-400 uppercase transition-colors cursor-pointer"
                  >
                    Partner
                  </button>
                </nav>

                {/* Header CTA Direct Link */}
                <div className="flex items-center gap-4">
                  <div
                    id="header-cta-email"
                    className="hidden sm:inline-flex text-xs font-semibold tracking-wider text-slate-450 uppercase items-center gap-1.5 selection:bg-indigo-500/30"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="select-all font-mono font-bold tracking-normal lowercase">{emailAddress}</span>
                  </div>
                  
                  <button
                    id="header-cta-quote"
                    onClick={() => scrollToSection("contact-section")}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 hover:text-white border border-indigo-500/30 hover:border-indigo-450 text-white font-bold tracking-wider text-[10px] uppercase rounded-lg transition-all duration-300 cursor-pointer shadow-md hover:shadow-indigo-500/20"
                  >
                    Get Free Ad Audit
                  </button>
                </div>
              </div>
            </header>

            {/* Hero & Conversion Metric Section */}
            <section id="hero-section" className="relative pt-20 pb-24 px-4 max-w-7xl mx-auto">
              {/* Vertical grid lines */}
              <div className="absolute left-10 top-0 bottom-0 w-px bg-slate-950 pointer-events-none" />
              <div className="absolute right-10 top-0 bottom-0 w-px bg-slate-950 pointer-events-none" />

              <div className="text-center max-w-4xl mx-auto mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest rounded-full mb-6 shadow-[0_2px_15px_rgba(99,102,241,0.05)]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Bespoke UGC & Motion Graphic Ads
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-slate-100 leading-[1.1] mb-6"
                >
                  We design high-converting video ads that scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 drop-shadow-[0_2px_10px_rgba(178,27,47,0.1)] font-bold">your customer acquisition.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium"
                >
                  Nexora crafts thumb-stopping UGC (User Generated Content) and dynamic Motion Graphic advertisements engineered to maximize CTR, retention, and brand loyalty.
                </motion.p>

                {/* Primary CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <button
                    id="hero-cta-showcase"
                    onClick={() => scrollToSection("work-section")}
                    className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-widest text-xs uppercase rounded-lg shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    View Ad Portfolio
                  </button>

                  <button
                    id="hero-cta-partner"
                    onClick={() => scrollToSection("contact-section")}
                    className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-bold tracking-widest text-xs uppercase rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg"
                  >
                    Request Free Ad Strategy
                  </button>
                </motion.div>
              </div>

              {/* Core Requested Stat Block: Premium, highly focused, flat depth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-5xl mx-auto bg-slate-900 border border-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-24"
              >
                {/* Subtle structural grids */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#122b24_1px,transparent_1px),linear-gradient(to_bottom,#122b24_1px,transparent_1px)] bg-[size:30px_30px] opacity-25 pointer-events-none" />
                <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/2 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Stats Content (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-indigo-500/5 border border-indigo-500/10 text-[9px] text-indigo-400 font-bold uppercase tracking-widest rounded">
                      <Award className="w-3.5 h-3.5" />
                      Validated Performance Metrics
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-100 font-sans tracking-tight leading-tight">
                      We had worked with <span className="text-indigo-400 font-serif font-black italic">50+ businesses</span> with an average of <span className="text-indigo-400 font-serif font-black italic">70% customer conversion rate.</span>
                    </h3>

                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                      Standard generic social media ads struggle to maintain viewer retention past the first 2 seconds. By crafting psychological creator hooks and pristine motion design, Nexora creatives capture, engage, and convert modern social media audiences.
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-900/80">
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-slate-100 font-sans">150+</div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mt-1">High-Performing Ads</div>
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-slate-100 font-sans">4.2%</div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mt-1">Avg. Click-Through Rate</div>
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-slate-100 font-sans">3.5x</div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mt-1">Average ROAS</div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Conversion Simulator Slider (5 cols) */}
                  <div className="lg:col-span-5 bg-slate-950/80 border border-slate-900/60 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-inner relative">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">CTR & Conversion Simulator</span>
                        <TrendingUp className="w-4 h-4 text-indigo-400 animate-pulse" />
                      </div>

                      <p className="text-slate-400 text-[11px] leading-relaxed mb-6 font-medium">
                        Drag the slider to visualize how Nexora's custom ad creatives scale click-through rate compared to standard stock photo creatives.
                      </p>

                      {/* Simulator Output */}
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-end">
                          <span className="text-[10px] text-slate-500 font-bold uppercase">Generic Stock Ad CTR:</span>
                          <span className="text-sm font-bold text-red-400/80">1.2%</span>
                        </div>
                        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-red-400/30 rounded-full" style={{ width: "12%" }} />
                        </div>

                        <div className="flex justify-between items-end pt-2">
                          <span className="text-[10px] text-slate-300 font-bold uppercase">Nexora Creative Target:</span>
                          <span className="text-sm font-black text-indigo-400 shadow-[0_0_8px_rgba(180,127,63,0.2)]">{(conversionMultiplier / 10).toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-300 shadow-[0_0_8px_#b47f3f]" style={{ width: `${conversionMultiplier}%` }} />
                        </div>
                      </div>
                    </div>

                    {/* Interactive Slider Input */}
                    <div className="space-y-2 pt-4 border-t border-slate-900/60">
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
                        <span>Standard Baseline</span>
                        <span>Max Performance Target</span>
                      </div>
                      <input
                        id="conversion-simulator-range"
                        type="range"
                        min="30"
                        max="95"
                        value={conversionMultiplier}
                        onChange={(e) => setConversionMultiplier(Number(e.target.value))}
                        className="w-full accent-indigo-500 bg-slate-900 rounded-lg appearance-none h-1.5 cursor-pointer"
                      />
                      <div className="text-center pt-2 text-[10px] text-slate-400 font-bold">
                        {(conversionMultiplier / 10).toFixed(1)}% CTR = {((conversionMultiplier / 10) / 1.2).toFixed(1)}x Lead Efficiency Increase
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Video Work Gallery */}
            <VideoGallery />

            {/* Testimonials */}
            <Testimonials />

            {/* Partner / Contact Section */}
            <ContactSection />

            {/* Luxury Footer */}
            <footer className="bg-slate-950 border-t border-slate-900 py-16 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
                {/* Brand block (5 cols) */}
                <div className="md:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <NexoraLogo size={32} />
                    <div className="flex flex-col -space-y-1">
                      <span className="text-sm font-bold tracking-[0.25em] text-slate-100 font-sans leading-none">NEXORA</span>
                      <span className="text-[7px] font-extrabold text-indigo-400 tracking-wider uppercase">THE NEXT GENERATION</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-sm font-medium">
                    Designing and producing premium ad creatives. Helping brands scale customer acquisition with high-converting UGC and motion graphics.
                  </p>
                </div>

                {/* Info links block (3 cols) */}
                <div className="md:col-span-3 space-y-3">
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">SITEMAP</h4>
                  <ul className="space-y-2 text-xs text-slate-500 font-medium">
                    <li>
                      <button onClick={() => scrollToSection("hero-section")} className="hover:text-indigo-400 transition-colors cursor-pointer">
                        Hero Overview
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection("work-section")} className="hover:text-indigo-400 transition-colors cursor-pointer">
                        Case Showcases
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection("testimonials-section")} className="hover:text-indigo-400 transition-colors cursor-pointer">
                        Partner Reviews
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection("contact-section")} className="hover:text-indigo-400 transition-colors cursor-pointer">
                        Creative Brief Form
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Direct Mail Details block (4 cols) */}
                <div className="md:col-span-4 space-y-3">
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">CONTACT INQUIRIES</h4>
                  <p className="text-slate-500 text-xs font-medium">
                    For bespoke project briefs or creative collaboration inquiries, reach out directly.
                  </p>
                  <div
                    id="footer-email-block"
                    className="inline-flex items-center gap-2 text-slate-400 font-bold text-xs mt-2"
                  >
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <span className="select-all font-mono lowercase tracking-normal">{emailAddress}</span>
                  </div>
                </div>
              </div>

              {/* Copyright details */}
              <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                <div>
                  © {new Date().getFullYear()} NEXORA - THE NEXT GENERATION. ALL RIGHTS RESERVED.
                </div>
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-indigo-400/60" />
                    Secure SSL Enforced
                  </span>
                  <span>
                    Privacy Protocol
                  </span>
                </div>
              </div>
            </footer>

            {/* Smooth Back to Top Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  id="scroll-to-top-btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 p-3 rounded-xl bg-slate-950/90 hover:bg-indigo-500 hover:text-white border border-slate-900 hover:border-indigo-400/20 text-slate-300 shadow-2xl transition-all duration-300 cursor-pointer z-30"
                  title="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
