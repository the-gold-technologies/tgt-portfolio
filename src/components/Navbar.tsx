"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="sticky top-4 z-50 w-full px-4 flex justify-center pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between w-full max-w-5xl bg-white/90 backdrop-blur-md border border-zinc-200/85 rounded-full px-6 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        {/* Logo on Left */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center font-extrabold text-white text-xs">
            TGT
          </div>
          <span className="font-extrabold text-sm tracking-tight text-zinc-900">
            The <span className="text-[#ff7a00]">Gold</span> Technologies
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-zinc-500">
          <a href="#why-choose" className="hover:text-black transition-colors">
            Start Here
          </a>
          <a href="#services" className="hover:text-black transition-colors">
            Capabilities
          </a>
          <a href="#projects" className="hover:text-black transition-colors">
            Portfolio
          </a>
          <a href="#pricing" className="hover:text-black transition-colors">
            Pricing
          </a>
          <a href="#team" className="hover:text-black transition-colors">
            Team
          </a>
        </nav>

        {/* Action Button */}
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-xs font-extrabold bg-zinc-950 text-white hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
        >
          Book a Call
        </a>
      </header>
    </div>
  );
}
