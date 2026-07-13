"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, TrendingUp, Shield, Zap, CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="why-choose"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto z-10 relative bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12  gap-16 items-center">
        {/* Left Column: TGT Positioning & Custom Checklist */}
        <div className="lg:col-span-6 flex flex-col text-left">
          {/* Eyebrow tag */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="text-xs font-black tracking-widest text-[#d4af37] uppercase mb-3 block"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.12] text-midnight mb-4"
          >
            Why Choose <span className="font-serif italic text-[#d4af37]">The Gold Technologies</span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeCurve, delay: 0.1 }}
            className="text-base sm:text-lg font-bold text-gray-800 mb-4 border-l-2 border-[#d4af37] pl-3"
          >
            More Than a Website Agency. Your Technology Partner.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeCurve, delay: 0.15 }}
            className="text-gray-550 text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
          >
            At The Gold Technologies, we combine strategy, design, development,
            and technology expertise to create digital experiences that drive
            measurable business growth.
          </motion.p>

          {/* Checklist items in a modern Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
            {[
              "Custom Website Development",
              "WordPress & CMS Solutions",
              "E-commerce & Shopify Development",
              "Web Applications & Portals",
              "UI/UX Design",
              "SEO-Friendly Architecture",
              "Ongoing Support & Maintenance",
            ].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  ease: easeCurve,
                  delay: 0.2 + idx * 0.05,
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-semibold tracking-wide group-hover:text-midnight transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Animated Interactive Tech Dashboard */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] w-full">
          {/* Ambient glowing background circles */}
          <div className="absolute w-72 h-72 rounded-full bg-[#d4af37]/5 blur-[80px] -top-10 -left-10 pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full bg-[#d4af37]/10 blur-[80px] -bottom-10 -right-10 pointer-events-none" />

          {/* Main Container for the composition */}
          <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center scale-90 sm:scale-100">
            {/* SVG Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                className="w-full h-full opacity-35 animate-spin-slow"
                viewBox="0 0 400 400"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="url(#orbitGradient1)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
                <defs>
                  <linearGradient
                    id="orbitGradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#d4af37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75">
              <svg
                className="w-full h-full opacity-25 animate-spin-reverse-slow"
                viewBox="0 0 400 400"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="130"
                  fill="none"
                  stroke="url(#orbitGradient2)"
                  strokeWidth="1"
                  strokeDasharray="8 6"
                />
                <defs>
                  <linearGradient
                    id="orbitGradient2"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Center Glow Hub - TGT AI Core */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeCurve }}
              className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#d4af37] p-[1.5px] shadow-[0_0_50px_rgba(255,122,0,0.25)] flex items-center justify-center group cursor-pointer"
            >
              <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300 group-hover:bg-gray-50">
                {/* Subtle internal spinning lines or pulse */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#d4af37]/5 to-[#d4af37]/10"
                />
                <Cpu className="w-8 h-8 text-[#d4af37] relative z-10 mb-1 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-[10px] font-black text-gray-800 tracking-wider relative z-10 uppercase">
                  TGT Core
                </span>
              </div>
            </motion.div>

            {/* Glassmorphic Widget 1: Live Analytics Chart (Floating Top Left) */}
            <motion.div
              initial={{ x: -60, y: -80, opacity: 0 }}
              whileInView={{ x: -40, y: -60, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.3 }}
              whileHover={{ y: -65, scale: 1.02 }}
              className="absolute top-8 left-0 z-20 w-[200px] rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Performance
                </span>
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> +85%
                </span>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">
                99.8 Gb/s
              </div>

              {/* Animated SVG Sparkline Chart */}
              <div className="h-10 w-full overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 160 40">
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Fill under path */}
                  <motion.path
                    d="M0,35 Q20,10 40,25 T80,15 T120,30 T160,10 L160,40 L0,40 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />
                  {/* Main Stroke Path */}
                  <motion.path
                    d="M0,35 Q20,10 40,25 T80,15 T120,30 T160,10"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Pulsing endpoint */}
                  <motion.circle
                    cx="160"
                    cy="10"
                    r="3"
                    fill="#d4af37"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Glassmorphic Widget 2: Security & Shield (Floating Bottom Right) */}
            <motion.div
              initial={{ x: 60, y: 80, opacity: 0 }}
              whileInView={{ x: 40, y: 60, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.4 }}
              whileHover={{ y: 55, scale: 1.02 }}
              className="absolute bottom-8 right-0 z-20 w-[190px] rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Enterprise Security
                </span>
              </div>
              <div className="text-lg font-bold text-gray-800 mb-1">
                Ultra Secure
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-medium text-gray-500">
                  256-bit Encrypted
                </span>
              </div>
            </motion.div>

            {/* Glassmorphic Widget 3: Small floating Speed Badge (Floating Top Right) */}
            <motion.div
              initial={{ x: 40, y: -40, opacity: 0 }}
              whileInView={{ x: 30, y: -30, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-10 right-4 z-20 flex items-center gap-2 bg-midnight/90 text-white rounded-full py-1.5 px-3 shadow-lg border border-gray-800"
            >
              <Zap className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
              <span className="text-[10px] font-bold tracking-wider uppercase">
                0.1s Load Time
              </span>
            </motion.div>

            {/* Glassmorphic Widget 4: Small uptime progress (Floating Bottom Left) */}
            <motion.div
              initial={{ x: -40, y: 40, opacity: 0 }}
              whileInView={{ x: -30, y: 30, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCurve, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-10 left-4 z-20 flex items-center gap-2 bg-white border border-gray-200/80 rounded-full py-1.5 px-3.5 shadow-md"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[10px] font-bold text-gray-600 tracking-wider uppercase">
                99.99% Uptime
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
