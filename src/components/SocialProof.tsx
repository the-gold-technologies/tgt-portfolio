"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const industries = [
    { name: "Finance", emoji: "💼" },
    { name: "Real Estate", emoji: "🏢" },
    { name: "Healthcare", emoji: "🩺" },
    { name: "Tourism", emoji: "✈️" },
    { name: "Education", emoji: "🎓" },
    { name: "Manufacturing", emoji: "🏭" },
    { name: "E-commerce", emoji: "🛒" },
    { name: "Renewable Energy", emoji: "🌱" },
    { name: "Tech & Marketing", emoji: "⚡" },
  ];

  return (
    <section
      id="social-proof"
      className="py-24 bg-[#f1f2f4] border-t border-b border-zinc-200/60 text-zinc-900 z-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Eyebrow and elegant header layout */}
        <div className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[0.5px] bg-[#d97706]/30"></span>
            <span className="text-[#d97706] font-mono tracking-widest text-[10px] sm:text-xs font-bold uppercase">
              Partnerships
            </span>
            <span className="w-8 h-[0.5px] bg-[#d97706]/30"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight text-zinc-900"
          >
            Trusted By <span className="font-serif italic text-[#b45309] font-medium">Businesses Across The Globe</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.1 }}
            className="text-zinc-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed text-center"
          >
            We partner with forward-thinking enterprises to deliver robust digital systems. 
            Currently serving clients in the{" "}
            <span className="text-zinc-900 font-semibold">UAE, USA, UK, Europe, Australia, Canada, Japan,</span> and{" "}
            <span className="text-zinc-900 font-semibold">India</span>, we build custom solutions across:
          </motion.p>
        </div>

        {/* Flat Full-Width Infinite Scrolling Marquee Ribbon containing Industries */}
        <div className="relative overflow-hidden w-full py-10 bg-white border-t border-b border-zinc-200/60 shadow-sm my-8">
          {/* Faded edges to blend smoothly */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f1f2f4] via-[#f1f2f4]/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f1f2f4] via-[#f1f2f4]/60 to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max gap-12 items-center animate-marquee">
            {/* Set 1 */}
            <div className="flex gap-12 items-center">
              {industries.map((ind, idx) => (
                <div
                  key={`set1-${idx}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-200/80 bg-[#f1f2f4] text-sm sm:text-base font-semibold text-zinc-700 transition-all duration-300 hover:border-[#d97706]/30 hover:bg-white cursor-default select-none whitespace-nowrap scale-[1.15] transform-gpu mx-2"
                >
                  <span className="text-lg select-none">{ind.emoji}</span>
                  <span className="tracking-tight">{ind.name}</span>
                </div>
              ))}
            </div>
            {/* Set 2 */}
            <div className="flex gap-12 items-center" aria-hidden="true">
              {industries.map((ind, idx) => (
                <div
                  key={`set2-${idx}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-200/80 bg-[#f1f2f4] text-sm sm:text-base font-semibold text-zinc-700 transition-all duration-300 hover:border-[#d97706]/30 hover:bg-white cursor-default select-none whitespace-nowrap scale-[1.15] transform-gpu mx-2"
                >
                  <span className="text-lg select-none">{ind.emoji}</span>
                  <span className="tracking-tight">{ind.name}</span>
                </div>
              ))}
            </div>
            {/* Set 3 */}
            <div className="flex gap-12 items-center" aria-hidden="true">
              {industries.map((ind, idx) => (
                <div
                  key={`set3-${idx}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-200/80 bg-[#f1f2f4] text-sm sm:text-base font-semibold text-zinc-700 transition-all duration-300 hover:border-[#d97706]/30 hover:bg-white cursor-default select-none whitespace-nowrap scale-[1.15] transform-gpu mx-2"
                >
                  <span className="text-lg select-none">{ind.emoji}</span>
                  <span className="tracking-tight">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
