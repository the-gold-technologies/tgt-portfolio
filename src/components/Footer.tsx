"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-20 px-6 md:px-12 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
        
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center font-extrabold text-white text-[10px]">
              TGT
            </div>
            <span className="font-extrabold text-base tracking-tight text-zinc-800">
              The Gold Technologies
            </span>
          </div>
          <p className="text-zinc-550 leading-relaxed font-semibold max-w-sm mt-2">
            We combine strategy, design, and engineering to build bespoke websites, custom portals, and AI solutions that convert visitors and scale enterprises.
          </p>
        </div>

        {/* Sitemap Column */}
        <div className="flex flex-col gap-4">
          <span className="font-black text-[10px] uppercase tracking-widest text-[#ff7a00] font-mono">
            Navigation
          </span>
          <div className="flex flex-col gap-3 font-semibold">
            <a href="#why-choose" className="hover:text-black hover:translate-x-0.5 transition-transform duration-200">Start Here</a>
            <a href="#services" className="hover:text-black hover:translate-x-0.5 transition-transform duration-200">Capabilities</a>
            <a href="#projects" className="hover:text-black hover:translate-x-0.5 transition-transform duration-200">Portfolio</a>
            <a href="#pricing" className="hover:text-black hover:translate-x-0.5 transition-transform duration-200">Pricing</a>
          </div>
        </div>

        {/* Vision / Support Column */}
        <div className="flex flex-col gap-4">
          <span className="font-black text-[10px] uppercase tracking-widest text-[#ff7a00] font-mono">
            Corporate
          </span>
          <div className="flex flex-col gap-3 font-semibold">
            <a href="#team" className="hover:text-black hover:translate-x-0.5 transition-transform duration-200">Leadership Team</a>
            <a href="#contact" className="hover:text-black hover:translate-x-0.5 transition-transform duration-200">Request Consultation</a>
            <a href="#technologies" className="hover:text-black hover:translate-x-0.5 transition-transform duration-200">Tech Stack</a>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto border-t border-zinc-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-semibold">
        <div>
          © {new Date().getFullYear()} TGT (The Gold Technologies). All systems operational.
        </div>
        <div className="flex gap-6 text-[#ff7a00]">
          <a href="#social-proof" className="hover:text-[#d4af37] transition-colors">Client Marquee</a>
          <a href="#contact" className="hover:text-[#d4af37] transition-colors">Help Desk</a>
        </div>
      </div>
    </footer>
  );
}
