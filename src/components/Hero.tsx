"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, MonitorSmartphone, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const tags = [
    "UI/UX Design",
    "Custom Dev",
    "CRO",
    "SEO",
    "E-Commerce",
    "SaaS Apps",
    "Web Portals",
  ];

  return (
    <div className="bg-white relative">
      {/* Full-width dark background hero section */}
      <section className="relative mx-1 pt-32 md:pt-46 pb-28 md:pb-36 overflow-hidden bg-black rounded-b-[2.5rem] md:rounded-b-[5rem] shadow-2xl">
        {/* Background Ambient Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#d4af37]/15 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[40%] w-[50%] h-[50%] bg-yellow-500/15 blur-[120px] rounded-full mix-blend-screen" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[96%] xl:max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative">
            <div className="w-full max-w-4xl shrink-0 relative z-20">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: easeCurve }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[3.6rem] font-medium text-white tracking-tight leading-[1.05] mb-6"
              >
                Building the future with <br />{" "}
                <span className="text-[#d4af37]">high converting</span> web{" "}
                <br className="hidden lg:block" />
                experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeCurve, delay: 0.15 }}
                className="text-slate-300 text-md md:text-md mb-10 max-w-xl font-normal leading-relaxed pr-2"
              >
                We help businesses unlock growth, with robust web development,
                high converting UI/UX Design and intelligent CRO strategies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeCurve, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-4 bg-[#c29f32] text-white pl-8 pr-2 py-2 rounded-full font-bold text-sm tracking-wide hover:bg-[#d4af37] transition-all hover:scale-105 group shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
                >
                  <span>GET FREE CONSULTATION</span>
                  <span className="bg-slate-900 text-white p-2.5 rounded-full group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </Link>

                <div className="flex flex-col gap-1.5">
                  <p className="text-sm font-medium text-slate-300">
                    Rated 4.9/5 by 100+ clients
                  </p>
                  <div className="flex gap-1 text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeCurve, delay: 0.2 }}
              className="w-full lg:absolute lg:right-[-12%] xl:-right-16 lg:top-1/2 lg:-translate-y-[47%] lg:w-[700px] xl:w-[720px] aspect-square max-w-2xl lg:max-w-none z-10 pointer-events-none mt-8 lg:mt-0"
            >
              <Image
                src="/hero-image.png"
                alt="Digital Experience"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Floating Cards */}
      {/* <div className="max-w-[96%] xl:max-w-[1400px] mx-auto w-full relative z-20 -mt-28 md:-mt-36 px-6 sm:px-10 md:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white flex flex-col justify-center min-h-[220px] hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-bold rounded-full border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-xs font-medium mt-auto">
              End-to-end digital solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.5 }}
            className="bg-[#d4af37] rounded-3xl p-6 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] flex flex-col justify-between min-h-[220px] text-slate-900 hover:-translate-y-2 transition-transform duration-500"
          >
            <p className="text-sm font-semibold mb-2 opacity-90">
              Commitment to ROI
            </p>
            <div>
              <h3 className="text-6xl lg:text-7xl font-black tracking-tighter mb-2">
                100<span className="text-4xl">%</span>
              </h3>
              <p className="text-sm font-semibold opacity-90 leading-tight">
                Focus on measurable growth, lead generation, and scalable
                solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.6 }}
            className="bg-black rounded-3xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex flex-col justify-center min-h-[220px] text-white hover:-translate-y-2 transition-transform duration-500 border border-zinc-800"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-xl md:text-[1.3rem] font-bold leading-tight">
              Expertise that Combines{" "}
              <span className="text-[#d4af37]">Strategy, Design</span>, and
              Advanced Technology.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.7 }}
            className="bg-gradient-to-br from-zinc-50 to-white rounded-3xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-zinc-200 flex flex-col justify-between min-h-[220px] hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="flex justify-between items-start">
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                Track Record
              </p>
              <div className="p-2.5 bg-zinc-100 rounded-full">
                <MonitorSmartphone className="w-5 h-5 text-zinc-800" />
              </div>
            </div>
            <div>
              <h3 className="text-5xl font-black text-slate-900 mb-2">100+</h3>
              <p className="text-sm font-semibold text-slate-600 leading-tight">
                Successful web applications and digital portals delivered
                globally.
              </p>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
}
