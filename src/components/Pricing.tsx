"use client";

import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ff7a00]/3 blur-[90px] pointer-events-none -z-10" />

      <div className="text-center mb-16">
        <span className="text-[#ff7a00] uppercase tracking-widest font-black text-[10px] px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 inline-block mb-3 animate-pulse">
          Limited Time Offer
        </span>
        <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight text-zinc-900">
          Website Development Packages
        </h2>
        <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-sm sm:text-base font-semibold leading-relaxed">
          Choose a development tier optimized for your present operations and
          scale parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
        {/* Package 1 */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-gradient-to-b from-zinc-50/60 to-zinc-50 border border-zinc-200/60 flex flex-col justify-between hover:bg-white hover:border-[#ff7a00]/25 transition-all duration-500 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)]">
          <div>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-2">
              Starter Website
            </span>
            <h3 className="text-lg font-black text-zinc-800 mb-1 leading-tight">
              Perfect for Startups &amp; Small Businesses
            </h3>

            <div className="my-6 flex items-baseline gap-2">
              <span className="text-3xl font-black text-zinc-900">$299</span>
              <span className="text-sm line-through text-zinc-400 font-bold">
                $400
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mb-6 font-semibold">
              Best For: Consultants, Professionals, Local Businesses
            </p>

            <ul className="space-y-4 text-xs text-zinc-700 border-t border-zinc-200/80 pt-6">
              {[
                "Up to 5-7 Pages",
                "Custom Design",
                "Mobile Responsive",
                "Contact Form",
                "WhatsApp Integration",
                "Basic On-Page SEO",
                "Social Media Integration",
                "Speed Optimization",
                "30 Days Support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-semibold"
                >
                  <div className="w-5 h-5 rounded-full bg-orange-50/50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#ff7a00]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            className="w-full py-3.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-900 hover:scale-[1.02] active:scale-95 transition-all font-black text-xs uppercase tracking-wider text-center block mt-8 shadow-sm"
          >
            Get Started Today
          </a>
        </div>

        {/* Package 2 (Highlighted Capsule Pillar) */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-white border-2 border-[#ff7a00]/30 flex flex-col justify-between relative shadow-[0_20px_50px_rgba(255,122,0,0.05)] hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-zinc-950 text-white text-[9px] font-black uppercase tracking-widest shadow-md">
            Most Popular
          </div>
          <div>
            <span className="text-[10px] font-black text-[#ff7a00] uppercase tracking-widest block mb-2">
              Business CMS Website
            </span>
            <h3 className="text-lg font-black text-zinc-900 mb-1 leading-tight">
              Manage Your Website Without Technical Knowledge
            </h3>

            <div className="my-6 flex items-baseline gap-2">
              <span className="text-3xl font-black text-[#ff7a00]">$449</span>
              <span className="text-sm line-through text-zinc-400 font-bold">
                $600
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mb-6 font-semibold">
              Best For: Growing Businesses, Service Providers, Healthcare, Real
              Estate
            </p>

            <ul className="space-y-4 text-xs text-zinc-700 border-t border-zinc-200 pt-6">
              <li className="font-black text-zinc-800 mb-2">
                Includes Everything in Starter Plus:
              </li>
              {[
                "CMS Admin Panel (WordPress)",
                "Blog Management",
                "Content Updates Anytime",
                "Lead Capture Forms",
                "Google Analytics Setup",
                "Basic Security Setup",
                "Training Session",
                "60 Days Support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-semibold"
                >
                  <div className="w-5 h-5 rounded-full bg-orange-50/50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#ff7a00]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#fbbf24] text-[#050507] hover:scale-[1.02] active:scale-95 transition-all font-black text-xs uppercase tracking-wider text-center block mt-8 shadow-md"
          >
            Get Started Today
          </a>
        </div>

        {/* Package 3 */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-gradient-to-b from-zinc-50/60 to-zinc-50 border border-zinc-200/60 flex flex-col justify-between hover:bg-white hover:border-[#ff7a00]/25 transition-all duration-500 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)]">
          <div>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-2">
              eCommerce Website
            </span>
            <h3 className="text-lg font-black text-zinc-850 mb-1 leading-tight">
              Start Selling Online
            </h3>

            <div className="my-6 flex items-baseline gap-2">
              <span className="text-3xl font-black text-zinc-900">$999</span>
              <span className="text-sm line-through text-zinc-400 font-bold">
                $1,500
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mb-6 font-semibold">
              Best For: Retail, Fashion, Electronics, FMCG
            </p>

            <ul className="space-y-4 text-xs text-zinc-700 border-t border-zinc-200/80 pt-6">
              {[
                "Up to 50 Products Upload",
                "Product Categories",
                "Shopping Cart",
                "Payment Gateway Integration",
                "Order Management",
                "Customer Login",
                "Mobile Responsive",
                "SEO Setup",
                "Inventory Management",
                "Shipping Configuration",
                "Admin Dashboard",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-semibold"
                >
                  <div className="w-5 h-5 rounded-full bg-orange-50/50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#ff7a00]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            className="w-full py-3.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-900 hover:scale-[1.02] active:scale-95 transition-all font-black text-xs uppercase tracking-wider text-center block mt-8 shadow-sm"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Trust Builders Card Row (Borderless Floating Layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-8 rounded-[36px] bg-zinc-50 border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
        {[
          "100+ Projects Delivered",
          "Clients Across UAE, US, UK, Europe & India",
          "Dedicated Project Manager",
          "No Hidden Charges",
          "Source Code Ownership",
          "Post-Launch Support",
        ].map((trust) => (
          <div
            key={trust}
            className="text-center flex flex-col items-center justify-center p-3 hover:scale-105 transition-transform duration-300 cursor-default"
          >
            <CheckCircle2 className="w-5 h-5 text-[#ff7a00] mb-2.5 animate-pulse" />
            <span className="text-[10px] font-black text-zinc-650 leading-snug uppercase tracking-wider">
              {trust}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
