/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Copy, Check, Send, Sparkles, PhoneCall, HelpCircle, Clock } from "lucide-react";

export default function ContactSection() {
  const emailAddress = "nexora.org.10@gmail.com";
  const [copied, setCopied] = useState(false);
  const [briefCopied, setBriefCopied] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "High-Retention UGC Video Ads",
    "2D/3D Motion Graphic Ads"
  ]);

  const servicesList = [
    "High-Retention UGC Video Ads",
    "2D/3D Motion Graphic Ads",
    "Creative Posters",
    "Designing Ad",
    "Animated Brand Storytelling",
    "Direct Response Social Creatives"
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleCopyBrief = () => {
    const text = `Selected Services for Nexora Campaign:\n${selectedServices.length > 0 ? selectedServices.map(s => `- ${s}`).join("\n") : "- All core creative services"}`;
    navigator.clipboard.writeText(text);
    setBriefCopied(true);
    setTimeout(() => setBriefCopied(false), 2000);
  };

  return (
    <section id="contact-section" className="py-24 px-4 relative max-w-7xl mx-auto">
      {/* Decorative vertical golden line */}
      <div className="absolute bottom-0 left-1/3 w-px h-16 bg-gradient-to-t from-transparent to-indigo-500/10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Grid Side: Details */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-indigo-450 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            PARTNER WITH NEXORA - THE NEXT GENERATION
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-100 font-extrabold tracking-tight mb-6">
            Let's Scale Your Ad Campaigns
          </h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8 font-medium">
            Ready to launch high-performance UGC campaigns, dynamic motion graphics, or click-boosting social ads? Reach out directly via our secure channel or build a project proposal right here.
          </p>

          {/* Quick Copyable Email Card */}
          <div 
            id="email-info-card"
            className="p-5 rounded-xl bg-slate-950/40 border border-slate-900/80 flex items-center justify-between gap-4 shadow-xl hover:border-slate-800 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Official Communication Channel
                </p>
                <span 
                  id="nexora-email-text"
                  className="text-xs md:text-sm font-bold text-slate-100 select-all"
                >
                  {emailAddress}
                </span>
              </div>
            </div>

            <button
              id="copy-email-btn"
              onClick={handleCopy}
              className={`p-2 rounded-lg border transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider ${
                copied 
                  ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-300" 
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-750"
              }`}
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              No unsolicited sales pitch or hidden consulting pricing.
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Average turnaround reply duration: under 4 hours.
            </div>
          </div>
        </div>

        {/* Right Grid Side: Interactive Brief Builder */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-900/80 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Glowing Background Accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/3 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-100 font-sans tracking-tight mb-2">
                Build a Bespoke Creative Brief
              </h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-6">
                SELECT THE AD SERVICES YOU REQUIRE:
              </p>

              {/* Capabilities selection buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {servicesList.map((service) => {
                  const selected = selectedServices.includes(service);
                  return (
                    <button
                      id={`service-select-${service.toLowerCase().replace(/\s+/g, '-')}`}
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`p-3 text-left text-xs font-semibold rounded-lg border transition-all duration-200 cursor-pointer ${
                        selected
                          ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-300 border-indigo-500/40"
                          : "bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${selected ? "bg-indigo-400 shadow-[0_0_8px_#b07736]" : "bg-slate-800"}`} />
                        {service}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Campaign Blueprint Generator */}
            <div className="bg-slate-950/60 border border-slate-900/80 rounded-xl p-5 md:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-[10px] text-indigo-450 font-extrabold uppercase tracking-widest">
                    Live Campaign Blueprint
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  {selectedServices.length} Selected
                </span>
              </div>

              {selectedServices.length > 0 ? (
                <div className="space-y-4">
                  <div className="text-xs text-slate-400 font-medium">
                    Our team will craft a high-converting production strategy containing:
                  </div>
                  <ul className="space-y-2">
                    {selectedServices.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-200">{service}</strong> – optimized for maximum audience retention and high click-through rate.
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-900/60">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4.5 h-4.5 text-slate-600" />
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-slate-500 font-bold">Turnaround</span>
                        <span className="text-xs text-slate-200 font-bold">3-5 Business Days</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4.5 h-4.5 text-slate-600" />
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-slate-500 font-bold">Revisions</span>
                        <span className="text-xs text-slate-200 font-bold">Unlimited Loops</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                  Select one or more creative services above to configure your campaign.
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
