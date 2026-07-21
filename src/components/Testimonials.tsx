/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Quote, Star, MessageSquare, BadgeCheck } from "lucide-react";
import { Testimonial } from "../types";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Chief Executive Officer",
    company: "FinTech Flow Inc.",
    quote: "Nexora designed and launched a set of UGC ad creatives and dynamic motion graphics for our seasonal campaigns. Our customer acquisition cost dropped by 42% in the first thirty days, while CTR skyrocketed. Their speed and creative execution is flawless.",
    rating: 5,
    initials: "SJ"
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "VP of Operations",
    company: "Luxe Lodgings",
    quote: "We have collaborated with several creative agencies, but Nexora operates on an entirely different plane of quality. Their motion graphics ads brought a premium feeling to our brand, resulting in a staggering 3.5x return on ad spend.",
    rating: 5,
    initials: "MV"
  },
  {
    id: "3",
    name: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "Solas E-Commerce",
    quote: "Their TikTok UGC creative strategy and thumb-stopping hooks completely transformed our advertising loops. Nexora's performance standards are very real—we are actively tracking a 4.2% average click-through rate on our main campaign funnels.",
    rating: 5,
    initials: "ER"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-24 px-4 relative max-w-7xl mx-auto">
      {/* Absolute decorative gradient line */}
      <div className="absolute top-0 right-1/4 w-px h-16 bg-gradient-to-b from-transparent to-indigo-500/10 pointer-events-none" />

      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          TESTIMONIALS FROM OUR PARTNERS
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-slate-100 font-extrabold tracking-tight">
          Validated by Industry Leaders
        </h2>
        <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto font-medium leading-relaxed">
          See how luxury brands and high-growth direct-to-consumer platforms use Nexora's high-converting ad creative to transform social traffic into loyal customers.
        </p>
      </div>

      {/* Bento Grid layout */}
      <div 
        id="testimonials-bento-grid" 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {TESTIMONIALS.map((testimonial, idx) => (
          <motion.div
            id={`testimonial-card-${testimonial.id}`}
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative bg-slate-900 border border-slate-900/80 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/20 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          >
            {/* Top quote icon design */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-indigo-500/10 group-hover:text-indigo-500/25 transition-colors duration-300" />
            </div>

            {/* Testimonial Quote */}
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium mb-8 italic">
              "{testimonial.quote}"
            </p>

            {/* Client Profile */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-900/80">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-indigo-700/5 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs uppercase shadow-[0_2px_10px_rgba(99,102,241,0.05)]">
                {testimonial.initials}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-slate-100 font-sans">
                    {testimonial.name}
                  </h4>
                  <BadgeCheck className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                  {testimonial.role} at <span className="text-slate-400">{testimonial.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
