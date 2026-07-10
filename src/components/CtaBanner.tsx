"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 md:px-12 text-center relative overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.04),transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight">
          Your Competitors Are Winning Customers Online Every Day.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-xl mx-auto font-semibold leading-relaxed">
          Don&apos;t let an outdated website hold your business back. Get a
          High-Converting Website Built by Experts.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-[#ff7a00] to-[#fbbf24] text-[#050507] hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          Request Free Consultation <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
