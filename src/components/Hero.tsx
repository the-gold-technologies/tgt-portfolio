"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Globe,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const floatingCards = [
    {
      icon: Award,
      title: "10+ Years",
      subtitle: "Experience",
      delay: 0.8,
      position: "-left-4 top-8 sm:-left-8 sm:top-12",
    },
    {
      icon: Globe,
      title: "Global",
      subtitle: "Clients",
      delay: 1.0,
      position: "-right-2 top-1/4 sm:-right-6 sm:top-1/3",
    },
    {
      icon: ShieldCheck,
      title: "100+ Projects",
      subtitle: "Delivered",
      delay: 1.2,
      position: "-left-2 bottom-20 sm:-left-6 sm:bottom-28",
    },
    {
      icon: Users,
      title: "Dedicated",
      subtitle: "Team",
      delay: 1.4,
      position: "right-0 bottom-6 sm:-right-4 sm:bottom-12",
    },
  ];

  return (
    <section className="relative  flex items-center justify-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4af37]/10 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-50/50 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
              Premium Web Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeCurve, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4"
          >
            Websites That Don't Just Look Good.{" "}
            <br className="hidden xl:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-amber-600">
              They Deliver Results.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.15 }}
            className="text-lg md:text-xl font-bold text-slate-800 leading-snug mb-3 max-w-xl"
          >
            Custom Websites, Portals & Web Applications Designed to Generate
            Leads, Build Trust, and Scale Your Business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.2 }}
            className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed mb-10 font-medium"
          >
            Whether you're a startup, SME, or enterprise, we create
            high-performance websites tailored to your business goals — from
            corporate websites and eCommerce stores to custom portals and
            business applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-[#d4af37] text-white font-bold text-sm tracking-wide hover:bg-[#c29f32] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              Get Free Consultation
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
            <Link
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-white border-2 border-slate-200 text-slate-800 font-bold text-sm tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 text-center"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeCurve, delay: 0.4 }}
          className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center"
        >
          {/* Main Visual Frame */}
          <div className="relative w-[90%] h-[90%] rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl border-4 border-white/40 shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-10 group">
            <Image
              src="/hero-mockup.png"
              alt="Dashboard Preview"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          </div>

          {/* Floating Modular Cards */}
          {floatingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: card.delay,
                ease: easeCurve,
              }}
              className={`absolute ${card.position} z-20 bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 hover:-translate-y-1 transition-transform cursor-default`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                <card.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37]" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-[11px] sm:text-[13px] leading-tight">
                  {card.title}
                </h4>
                <p className="text-slate-500 text-[9px] sm:text-[11px] font-medium">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
