/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Maximize2, Volume2, VolumeX, Eye, Sparkles, Film, ArrowUpRight } from "lucide-react";
import { WorkSample } from "../types";

const WORK_SAMPLES: WorkSample[] = [
  {
    id: "showreel",
    title: "Nexora Creative Ad Showreel",
    videoUrl: "/whatsapp_video.mp4",
    description: "An immersive, fast-paced showcase of our top-performing UGC creatives and high-fidelity motion graphic ads crafted to capture attention and scale customer acquisition.",
    tags: ["Core Showreel", "UGC Creative", "Motion Graphics", "CTR Optimization"],
    category: "Featured Showcase",
    features: [
      "High-impact kinetic title design",
      "Precision sound-design integration",
      "Dynamic speed ramps & transitions",
      "Thumb-stopping hook optimization"
    ]
  },
  {
    id: "design-1",
    title: "UGC Direct Response Ad",
    videoUrl: "/design_1.mp4",
    description: "High-converting authentic user-generated content for TikTok and Instagram, featuring high-retention hooks, relatable creator storytelling, and clear calls-to-action.",
    tags: ["TikTok Ad", "User Generated Content", "Hook Strategy", "Direct Response"],
    category: "UGC Ad Campaigns",
    features: [
      "Authentic creator-led hook strategy",
      "Native-style overlay typography",
      "High-retention rhythmic sequence",
      "Clear direct response CTA button"
    ]
  },
  {
    id: "design-2",
    title: "SaaS Motion Graphics Product Video",
    videoUrl: "/design_2.mp4",
    description: "A premium motion graphics ad featuring seamless animated transitions, sleek interface mockups, and dynamic kinetic typography explaining key product features.",
    tags: ["Motion Graphics", "Product Demo", "Kinetic Typography", "2D/3D Animation"],
    category: "Motion Graphic Ads",
    features: [
      "Sleek product interface animations",
      "Vector-perfect transition design",
      "Kinetic typographic value cards",
      "High-contrast premium color grading"
    ]
  },
  {
    id: "design-3",
    title: "E-Commerce Creator Hook Ad",
    videoUrl: "/design_3.mp4",
    description: "Social-first creator video focusing on problem-solving presentation, micro-narratives, and native native-style typography optimized for high click-through rates.",
    tags: ["UGC Hook", "E-Commerce", "Native Format", "Conversion Boost"],
    category: "Direct Response & Hooks",
    features: [
      "Problem-solving presentation narrative",
      "Micro-storytelling editing style",
      "Optimized CTR mobile format",
      "Native comment callout overlay"
    ]
  },
  {
    id: "design-4",
    title: "Sleek Animated Typography Promo",
    videoUrl: "/design_4.mp4",
    description: "High-energy, fast-paced motion graphics promo utilizing bold visual rhythms, kinetic layout animation, and sound-synchronized visual transitions.",
    tags: ["Kinetic Typography", "Brand Promo", "Social Ad", "Attention Grabber"],
    category: "Motion Graphic Ads",
    features: [
      "High-energy typographical pacing",
      "Sound-synchronized motion graphics",
      "Bold branded visual aesthetics",
      "High-attention intro sequence"
    ]
  }
];

export default function VideoGallery() {
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const categories = ["All", ...Array.from(new Set(WORK_SAMPLES.map((s) => s.category)))];

  const filteredSamples = activeCategory === "All"
    ? WORK_SAMPLES
    : WORK_SAMPLES.filter((s) => s.category === activeCategory);

  // Handle subtle muted play on hover for previews
  const handleMouseEnter = (id: string) => {
    setHoveredVideoId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Safe fail for browser autoplay protections
      });
    }
  };

  const handleMouseLeave = (id: string) => {
    setHoveredVideoId(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      // Reset back to start or keep frame
      video.currentTime = 0;
    }
  };

  return (
    <section id="work-section" className="py-24 px-4 relative max-w-7xl mx-auto">
      {/* Visual background divider */}
      <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-transparent to-indigo-500/10 pointer-events-none" />
      
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            <Film className="w-3.5 h-3.5" />
            SAMPLE OF OUR WORK
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-100 font-extrabold tracking-tight">
            Engineered to Convert
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl font-medium leading-relaxed">
            Explore our premium portfolio of high-retention UGC ads and custom motion graphic creative tailored to capture attention and convert viewers.
          </p>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
          {categories.map((category) => (
            <button
              id={`cat-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-xs rounded-full font-semibold border transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-indigo-500/15 border-indigo-500/40 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.05)]"
                  : "bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of videos */}
      <div 
        id="video-portfolio-grid" 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredSamples.map((sample) => {
          const isHovered = hoveredVideoId === sample.id;
          const isShowreel = sample.id === "showreel";

          return (
            <motion.div
              layout
              id={`work-card-${sample.id}`}
              key={sample.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`group flex flex-col bg-slate-900 border border-slate-900 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-indigo-500/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] ${
                isShowreel ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12 gap-0" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(sample.id)}
              onMouseLeave={() => handleMouseLeave(sample.id)}
            >
              {/* Video Player Box */}
              <div className={`relative bg-black aspect-video overflow-hidden ${
                isShowreel ? "lg:col-span-7 h-full" : ""
              }`}>
                {/* Standard video element */}
                <video
                  ref={(el) => {
                    videoRefs.current[sample.id] = el;
                  }}
                  src={sample.videoUrl}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Cover poster/overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Dynamic Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none">
                  <motion.div
                    animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-full bg-slate-900/95 border border-indigo-500/30 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                  >
                    <Play className="w-5 h-5 text-indigo-400 fill-indigo-400 ml-0.5" />
                  </motion.div>
                </div>

                {/* Subtle Hover Video Scan Indicator */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-indigo-500/90 text-white rounded font-bold uppercase tracking-wider z-10 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                    >
                      <Sparkles className="w-3 h-3 animate-spin" />
                      Hover Preview Playback
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Category tag overlay on non-hover */}
                {!isHovered && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 border border-slate-900 text-[10px] text-slate-300 font-semibold uppercase tracking-wider rounded backdrop-blur-md">
                    {sample.category}
                  </div>
                )}
              </div>

              {/* Content Description Box */}
              <div className={`p-6 flex flex-col justify-between flex-1 ${
                isShowreel ? "lg:col-span-5 lg:p-8" : ""
              }`}>
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-slate-100 font-sans group-hover:text-indigo-400 transition-colors duration-300">
                      {sample.title}
                    </h3>
                    <div className="text-slate-500 group-hover:text-indigo-400 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed font-medium mb-6">
                    {sample.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {sample.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-950/50 border border-slate-900/60 text-[9px] text-slate-400 font-semibold uppercase tracking-wider rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Play Details CTA Button */}
                  <button
                    id={`view-showcase-btn-${sample.id}`}
                    onClick={() => setSelectedSample(sample)}
                    className="w-full py-3 bg-indigo-600/10 hover:bg-indigo-600 border border-indigo-500/20 hover:border-indigo-500 text-indigo-400 hover:text-white font-bold tracking-wider text-[10px] uppercase rounded-lg transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_4px_15px_rgba(99,102,241,0.15)]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Expand Case Study Theater
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Theater Modal Popup */}
      <AnimatePresence>
        {selectedSample && (
          <TheaterModal
            sample={selectedSample}
            onClose={() => setSelectedSample(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

interface TheaterModalProps {
  sample: WorkSample;
  onClose: () => void;
}

function TheaterModal({ sample, onClose }: TheaterModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Reset states on sample change
  useEffect(() => {
    setIsLoading(true);
    setVideoError(null);
  }, [sample]);

  // Playback initialization with unmuted-to-muted fallback state machine
  useEffect(() => {
    let active = true;
    if (videoRef.current) {
      // First attempt unmuted playback (which may succeed since user just clicked Case Study)
      videoRef.current.play()
        .then(() => {
          if (active) {
            setIsPlaying(true);
            setIsLoading(false);
          }
        })
        .catch(() => {
          // If browser blocked unmuted autoplay, retry as muted
          if (active && videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play()
              .then(() => {
                if (active) {
                  setIsPlaying(true);
                  setIsLoading(false);
                }
              })
              .catch(() => {
                if (active) {
                  setIsPlaying(false);
                  setIsLoading(false);
                }
              });
          }
        });
    }

    return () => {
      active = false;
    };
  }, [sample]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Muted play fallback on manual press if needed
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play()
                .then(() => {
                  setIsPlaying(true);
                });
            }
          });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMute = !isMuted;
      videoRef.current.muted = nextMute;
      setIsMuted(nextMute);
    }
  };

  const handleMaximize = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleScrubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      id="theater-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-md"
    >
      <div 
         id="theater-modal-container"
        className="w-full max-w-5xl bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 h-[90vh] md:h-[80vh] max-h-[750px]"
      >
        {/* Video Cinema View (8 cols) */}
        <div className="relative bg-black flex flex-col items-center justify-center md:col-span-8 group/player h-[50vh] md:h-full min-h-0 select-none">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center p-2 bg-black/60">
            <video
              key={sample.videoUrl}
              ref={videoRef}
              src={sample.videoUrl}
              loop
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onCanPlay={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => setIsLoading(false)}
              onError={(e) => {
                setIsLoading(false);
                const err = (e.target as HTMLVideoElement).error;
                setVideoError(err ? `Error ${err.code}: ${err.message || "The file could not be loaded or decoded."}` : "The video file failed to load.");
              }}
              onClick={togglePlay}
              className="max-w-full max-h-full w-auto h-auto object-contain cursor-pointer"
            />
          </div>

          {/* Loading spinner */}
          {isLoading && !videoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 z-10 pointer-events-none">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Interactive diagnostics fallback in case of errors */}
          {videoError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/90 z-20">
              <div className="w-12 h-12 rounded-full bg-rose-500/15 flex items-center justify-center text-rose-400 mb-3">
                <VolumeX className="w-6 h-6" />
              </div>
              <p className="text-slate-200 font-bold text-sm mb-1">Unable to Stream Video</p>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed mb-4">{videoError}</p>
              <div className="text-[10px] text-slate-400 bg-slate-900 border border-slate-800/80 rounded-md p-3 max-w-md">
                <p className="font-semibold text-slate-300 mb-1">Common Troubleshooting Steps:</p>
                <ul className="list-disc list-inside space-y-1 text-left text-slate-400">
                  <li>Verify the file <code className="text-indigo-400">public{sample.videoUrl}</code> was pushed to your GitHub.</li>
                  <li>Check if the file is tracked via Git LFS pointers (which Vercel might not download).</li>
                  <li>Ensure your Vercel project has synced fully with the latest commit.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Player controls bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col gap-3 opacity-100 md:opacity-0 md:group-hover/player:opacity-100 transition-opacity duration-300 z-10">
            {/* Scrubber / Progress bar */}
            <div className="flex items-center gap-3 w-full">
              <span className="text-[10px] font-semibold font-mono text-slate-400 min-w-[32px]">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.05"
                value={currentTime}
                onChange={handleScrubChange}
                className="flex-1 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 focus:outline-none focus:ring-0"
                style={{
                  background: `linear-gradient(to right, rgb(99, 102, 241) 0%, rgb(99, 102, 241) ${duration ? (currentTime / duration) * 100 : 0}%, rgb(30, 41, 59) ${duration ? (currentTime / duration) * 100 : 0}%, rgb(30, 41, 59) 100%)`
                }}
              />
              <span className="text-[10px] font-semibold font-mono text-slate-400 min-w-[32px] text-right">
                {formatTime(duration)}
              </span>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <button
                  id="modal-play-toggle"
                  onClick={togglePlay}
                  className="p-1.5 bg-slate-900 rounded-full hover:bg-slate-800 text-indigo-400 transition-colors cursor-pointer"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-indigo-400" /> : <Play className="w-4 h-4 fill-indigo-400 ml-0.5" />}
                </button>

                <button
                  id="modal-mute-toggle"
                  onClick={toggleMute}
                  className="p-1.5 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-350 hover:text-indigo-400 transition-colors cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                  {Math.round(currentTime / (duration || 1) * 100)}% viewed
                </span>
                <button
                  id="modal-max-toggle"
                  onClick={handleMaximize}
                  className="p-1.5 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-350 hover:text-indigo-400 transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Showcase Sidebar (4 cols) */}
        <div className="p-6 md:p-8 md:col-span-4 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-900 overflow-y-auto h-[40vh] md:h-full min-h-0">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-[9px] text-indigo-400 font-bold uppercase tracking-widest rounded">
                {sample.category}
              </span>
              <button
                id="close-theater-btn"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-450 hover:text-slate-100 transition-all duration-200 cursor-pointer text-xs font-semibold px-3 py-1 flex items-center gap-1"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-4 font-sans tracking-tight">
              {sample.title}
            </h3>

            <p className="text-slate-400 text-xs leading-relaxed mb-6 font-medium">
              {sample.description}
            </p>

            <div className="border-t border-slate-900/80 pt-6 mb-6">
              <h4 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-3">
                Creative Production Highlights
              </h4>
              <ul className="space-y-2.5">
                {(sample.features || [
                  "High-retention creative format",
                  "Optimized for high CTR",
                  "Premium brand-aligned visual design"
                ]).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex flex-wrap gap-1.5 mb-6">
              {sample.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-slate-950 border border-slate-900 text-[8px] text-slate-400 font-semibold uppercase tracking-wider rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              id="modal-cta-contact"
              onClick={() => {
                onClose();
                const contactEl = document.getElementById("contact-section");
                if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wider text-[10px] uppercase rounded-lg transition-all duration-300 shadow-[0_4px_15px_rgba(99,102,241,0.15)] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Discuss Creative Campaign
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
