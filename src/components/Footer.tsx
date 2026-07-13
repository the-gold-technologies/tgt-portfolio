"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: easeCurve }}
      className="relative pt-16 pb-10 px-4 md:px-8 text-slate-600 overflow-hidden bg-white border-t border-slate-200"
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Footer Background" 
          fill 
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/50" />
      </div>

      {/* Decorative ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[120px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Pre-footer CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-slate-200 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Ready to scale?
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-md">
              Let's build a digital experience that transforms your business.
            </p>
          </div>
          <Link
            href="#contact"
            className="group shrink-0 flex items-center justify-between gap-4 px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-[#d4af37] transition-all duration-300 shadow-md"
          >
            <span>Start a Project</span>
            <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:text-[#d4af37] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-max">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center font-black text-white text-xs shadow-md">
                TGT
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                The Gold Technologies
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-600 font-medium">
              We combine strategy, design, and engineering to build bespoke websites, custom portals, and AI solutions that convert visitors and scale enterprises globally.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:info@thegoldtechnologies.com" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] transition-colors shadow-sm text-slate-600">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] transition-colors shadow-sm text-slate-600">
                <Phone className="w-4 h-4" />
              </a>
              <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] transition-colors cursor-help shadow-sm text-slate-600" title="Global Reach">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Links Group 1 */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-slate-900 font-bold tracking-widest text-xs uppercase mb-2">Navigation</h4>
            <Link href="#why-choose" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Why Choose Us</Link>
            <Link href="#projects" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Portfolio & Projects</Link>
            <Link href="#pricing" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Pricing Plans</Link>
            <Link href="#team" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Our Team</Link>
          </div>

          {/* Links Group 2 */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-slate-900 font-bold tracking-widest text-xs uppercase mb-2">Corporate</h4>
            <Link href="#technologies" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Tech Stack</Link>
            <Link href="#contact" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Book a Consultation</Link>
            <a href="#" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-[#d4af37] font-semibold transition-colors w-max">Terms of Service</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold relative z-10">
          <p className="text-slate-500">© {new Date().getFullYear()} The Gold Technologies. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-500/50"></span>
            All systems operational
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
