"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

// Custom premium mathematical SVG geometric icons matching the mockup
function LooksOutdatedIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left part: vertical pill + top-left horizontal pill */}
      <rect x="12" y="6" width="7" height="28" rx="3.5" fill="#fbbf24" />
      <rect x="5" y="6" width="14" height="12" rx="6" fill="#fbbf24" />
      {/* Right part: vertical pill + bottom-right horizontal pill */}
      <rect x="21" y="6" width="7" height="28" rx="3.5" fill="#fbbf24" />
      <rect x="21" y="22" width="14" height="12" rx="6" fill="#fbbf24" />
    </svg>
  );
}

function LoadsSlowlyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top-Left circle */}
      <circle cx="12" cy="12" r="6" fill="#fbbf24" />
      {/* Bottom-Left circle */}
      <circle cx="12" cy="28" r="6" fill="#fbbf24" />
      {/* Bottom-Right circle */}
      <circle cx="28" cy="28" r="6" fill="#fbbf24" />
      {/* Top-Right quarter circle pointing up-right */}
      <path d="M 22 18 H 34 C 34 11.37 28.63 6 22 6 V 18 Z" fill="#fbbf24" />
    </svg>
  );
}

function MobileFriendlyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top-Left leaf pointing top-left */}
      <path d="M 18 18 H 6 C 6 11.37 11.37 6 18 6 V 18 Z" fill="#fbbf24" />
      {/* Top-Right leaf pointing top-right */}
      <path d="M 22 18 H 34 C 34 11.37 28.63 6 22 6 V 18 Z" fill="#fbbf24" />
      {/* Bottom-Left leaf pointing bottom-left */}
      <path d="M 18 22 H 6 C 6 28.63 11.37 34 18 34 V 22 Z" fill="#fbbf24" />
      {/* Bottom-Right leaf pointing bottom-right */}
      <path d="M 22 22 H 34 C 34 28.63 28.63 34 22 34 V 22 Z" fill="#fbbf24" />
    </svg>
  );
}

function GoogleRankIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top-Left circle */}
      <circle cx="12" cy="12" r="6" fill="#fbbf24" />
      {/* Top-Right circle */}
      <circle cx="28" cy="12" r="6" fill="#fbbf24" />
      {/* Bottom-Left circle */}
      <circle cx="12" cy="28" r="6" fill="#fbbf24" />
      {/* Bottom-Right circle */}
      <circle cx="28" cy="28" r="6" fill="#fbbf24" />
    </svg>
  );
}

function ConversionIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center circle */}
      <circle cx="20" cy="20" r="4" fill="#fbbf24" />
      {/* Concentric rings */}
      <circle cx="20" cy="20" r="10" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="6 4" />
      <circle cx="20" cy="20" r="16" stroke="#fbbf24" strokeWidth="2" />
    </svg>
  );
}

export default function PainPoint() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const painPoints = [
    {
      id: 1,
      label: "Looks outdated",
      description:
        "First impressions are vital. An outdated look signals stagnation and turns prospects away.",
      icon: LooksOutdatedIcon,
      colSpan: "",
    },
    {
      id: 2,
      label: "Loads slowly",
      description:
        "Lagging speeds lose over 40% of target visitors instantly. Speed is key to retention.",
      icon: LoadsSlowlyIcon,
      colSpan: "",
    },
    {
      id: 3,
      label: "Isn't mobile-friendly",
      description:
        "Over 60% of search traffic is mobile. A broken phone display fails your visitors.",
      icon: MobileFriendlyIcon,
      colSpan: "",
    },
    {
      id: 4,
      label: "Doesn't rank on Google",
      description:
        "Without optimized indexing, competitors take the top results and your visibility drops.",
      icon: GoogleRankIcon,
      colSpan: "",
    },
    {
      id: 5,
      label: "Fails to convert visitors into customers",
      description:
        "High traffic is useless without active calls, leads, and inquiries.",
      icon: ConversionIcon,
      colSpan: "sm:col-span-2 sm:max-w-md",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative bg-black text-white py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve }}
              className="text-4xl sm:text-[44px] font-bold tracking-tight text-white leading-[1.1] max-w-sm"
            >
              Is Your Website Costing You Customers?
            </motion.h2>

            {/* Relocated and redesigned Quote Text with left gold border */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.08 }}
              className="text-zinc-300 italic border-l-2 border-[#fbbf24] pl-4 mt-8 text-xs sm:text-sm leading-relaxed max-w-sm"
            >
              &ldquo;Your website should be your best salesperson—working 24/7 to attract, engage, and convert potential customers.&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.12 }}
              className="text-[#fbbf24] mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider font-mono"
            >
              We help turn underperforming sites into revenue-generating assets.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.16 }}
              className="text-zinc-400 mt-10 text-xs sm:text-sm font-normal leading-relaxed max-w-xs"
            >
              Most businesses lose leads because their website:
            </motion.p>
          </div>

          {/* Right Column: Grid of Pain Points */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {painPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: easeCurve,
                      delay: idx * 0.1,
                    }}
                    className={`flex flex-col items-start text-left ${item.colSpan}`}
                  >
                    <div className="mb-6 flex items-center justify-center">
                      <Icon />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight text-zinc-100">
                      {item.label}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
