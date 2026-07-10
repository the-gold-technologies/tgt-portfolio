"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, CheckCircle2, Smartphone, Users } from "lucide-react";

export default function Hero() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 z-10 max-w-7xl mx-auto pt-24 pb-12 text-center overflow-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col items-center max-w-4xl mx-auto z-10">
        {/* Eyebrow Announcement Pill Badge */}
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-bold text-zinc-800 mb-8 shadow-sm hover:border-zinc-350 hover:bg-zinc-100/50 transition-all cursor-pointer group"
        >
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-950 text-white text-[10px] font-black uppercase tracking-wider">
            New ⚡
          </span>
          <span className="text-zinc-600 text-xs flex items-center gap-1 font-semibold">
            Experience TGT Custom Software v2.0
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              ➔
            </span>
          </span>
        </motion.a>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeCurve, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-[5.2rem] font-black tracking-tight leading-[1.12] mb-8 text-zinc-900 max-w-4xl mx-auto"
        >
          Websites That Don&apos;t <br />
          Just Look Good. They Deliver{" "}
          <span className="inline-block px-6 py-1.5 rounded-full border-2 border-[#ff7a00]/30 text-[#ff7a00] bg-orange-50/40 shadow-[0_0_40px_rgba(255,122,0,0.08)] relative animate-pulse">
            Results.
            <span className="absolute inset-0 rounded-full bg-[#ff7a00]/5 blur-lg pointer-events-none" />
          </span>
        </motion.h1>

        {/* Subtitle / Core Offering */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.15 }}
          className="max-w-3xl text-zinc-850 text-base sm:text-lg md:text-xl font-bold tracking-tight mb-4 leading-relaxed"
        >
          Custom Websites, Portals &amp; Web Applications Designed to Generate
          Leads, Build Trust, and Scale Your Business.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.2 }}
          className="max-w-2xl text-zinc-500 text-xs sm:text-sm font-semibold leading-relaxed mb-10"
        >
          Whether you&apos;re a startup, SME, or enterprise, we create
          high-performance websites tailored to your business goals — from
          corporate websites and eCommerce stores to custom portals and business
          applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          {/* Black Capsule button */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-zinc-950 text-white hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-1.5"
          >
            <span>✦ Get a Proposal</span>
          </a>

          {/* White Capsule button with Avatar */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2.5 shadow-sm hover:shadow"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-100 shrink-0">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Support Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <span>Book a Call</span>
          </a>
        </motion.div>

        {/* Live Interactive Analytics Console Showcase (Completely Non-Boxy Visual Component) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeCurve, delay: 0.35 }}
          className="w-full max-w-3xl mx-auto mb-16 p-6 rounded-[36px] bg-zinc-950 text-white border border-zinc-900 relative shadow-[0_30px_60px_rgba(255,122,0,0.06)] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <div className="px-4 py-1 rounded-full bg-zinc-900 text-[10px] text-zinc-550 border border-zinc-850 font-mono tracking-wide">
              https://agency.tgt.company/core-performance
            </div>
            <span className="w-12" />
          </div>

          {/* Internal Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                label: "Conversion Rate",
                val: "4.82%",
                trend: "+1.25%",
                trendColor: "text-green-400",
                desc: "Industry avg: 2.1%",
              },
              {
                label: "Page Uptime",
                val: "99.99%",
                trend: "100%",
                trendColor: "text-[#ff7a00]",
                desc: "Server nodes: Active",
              },
              {
                label: "SEO Speed Score",
                val: "98/100",
                trend: "A Grade",
                trendColor: "text-green-400",
                desc: "Core Web Vitals",
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-900 text-left"
              >
                <span className="text-[9px] font-black text-zinc-550 uppercase tracking-widest block mb-1 font-mono">
                  {metric.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-white">
                    {metric.val}
                  </span>
                  <span className={`text-[9px] font-bold ${metric.trendColor}`}>
                    {metric.trend}
                  </span>
                </div>
                <span className="text-[9px] text-zinc-500 block mt-1 font-semibold">
                  {metric.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Core Analytics SVG Graph */}
          <div className="h-32 w-full relative overflow-hidden bg-zinc-900/10 border border-zinc-900 rounded-2xl p-4">
            <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono mb-2">
              <span>Conversion Audit Growth Chart</span>
              <span className="text-[#ff7a00] font-bold">
                Live Synapse Node
              </span>
            </div>
            <svg
              className="w-full h-full"
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
            >
              <path
                d="M0 25 Q10 5, 20 20 T40 10 T60 5 T80 15 T100 2 L100 30 L0 30 Z"
                fill="url(#gradientGoldHero)"
              />
              <path
                d="M0 25 Q10 5, 20 20 T40 10 T60 5 T80 15 T100 2"
                fill="none"
                stroke="#ff7a00"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="gradientGoldHero"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Value Props Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mt-4"
        >
          {[
            { text: "10+ Years of Industry Experience", icon: Award },
            {
              text: "Global Clients Across UAE, US, UK, Europe & India",
              icon: Globe,
            },
            {
              text: "100+ Successful Digital Projects Delivered",
              icon: CheckCircle2,
            },
            { text: "SEO-Friendly & Mobile Responsive", icon: Smartphone },
            { text: "Dedicated Development Team", icon: Users },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-1.5 shadow-sm text-[11px] font-bold text-zinc-700 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-205"
              >
                <Icon className="w-3.5 h-3.5 text-[#ff7a00]" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
