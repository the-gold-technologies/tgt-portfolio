"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-[#f1f2f4] text-midnight py-20 px-4 md:px-8 text-center relative overflow-hidden border-t border-gray-200/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight">
          Your Competitors Are <span className="font-serif italic text-[#d4af37] font-medium">Winning Customers</span> Online Every Day.
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl mx-auto font-medium leading-relaxed">
          Don&apos;t let an outdated website hold your business back. Get a
          High-Converting Website Built by Experts.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-midnight hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-lg"
        >
          Request Free Consultation <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
