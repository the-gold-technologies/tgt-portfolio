"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const starterFeatures = [
    "Up to 5-7 Pages",
    "Custom Design",
    "Mobile Responsive",
    "Contact Form",
    "WhatsApp Integration",
    "Basic On-Page SEO",
    "Social Media Integration",
    "Speed Optimization",
    "30 Days Support",
  ];

  const cmsFeatures = [
    "Includes Everything in Starter Plus:",
    "CMS Admin Panel (WordPress)",
    "Blog Management",
    "Content Updates Anytime",
    "Lead Capture Forms",
    "Google Analytics Setup",
    "Basic Security Setup",
    "Training Session",
    "60 Days Support",
  ];

  const ecommerceFeatures = [
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
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-4 md:px-8 bg-[#f9fafc] border-t border-b border-gray-200/50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[0.5px] bg-[#d4af37]/30"></span>
            <span className="text-[#d4af37] font-mono tracking-widest text-[10px] sm:text-xs font-bold uppercase">
              Pricing Plans
            </span>
            <span className="w-8 h-[0.5px] bg-[#d4af37]/30"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.05 }}
            className="text-3xl sm:text-[44px] font-bold mt-4 tracking-tight text-midnight leading-tight"
          >
            Simple,{" "}
            <span className="font-serif italic text-[#d4af37] font-medium">
              Transparent Pricing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.1 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal leading-relaxed text-center"
          >
            Bespoke development packages built for your stage of growth. No
            hidden fees, no surprise contracts.
          </motion.p>
        </div>

        {/* Setup Discount Toggle Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200/80 flex items-center gap-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-black text-brand-gold shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Standard Setup
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billing === "yearly"
                  ? "bg-black text-brand-gold shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Prepaid Annual
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-end max-w-6xl mx-auto">
          {/* Starter Website Package */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-gray-200/60 shadow-sm flex flex-col justify-between min-h-[600px] lg:min-h-[710px] lg:h-auto">
            <div>
              <div className="flex items-baseline gap-2 text-midnight">
                <span className="text-[40px] font-bold leading-none tracking-tight">
                  {billing === "monthly" ? "$299" : "$249"}
                </span>
                <span className="text-sm line-through text-gray-400 font-bold">
                  {billing === "monthly" ? "$400" : "$330"}
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  /setup
                </span>
              </div>

              <h3 className="text-2xl font-bold text-midnight mt-2 tracking-tight">
                Starter Website
              </h3>

              <p className="text-gray-500 text-xs sm:text-[13px] mt-2 font-semibold">
                Perfect for Startups &amp; Small Businesses
              </p>

              <ul className="space-y-3.5 mt-6 border-t border-gray-100 pt-6">
                {starterFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600 text-xs sm:text-[13px] font-semibold"
                  >
                    <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-gold stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-wider text-center">
                Best For: Consultants, Professionals, Local Businesses
              </p>
              <a
                href="#contact"
                className="w-full py-3.5 rounded-full bg-gray-100 text-midnight hover:bg-gray-200 transition-all font-bold text-xs uppercase tracking-wider text-center block mt-4"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Business CMS Website Package (Featured - Most Popular) */}
          <div className="p-8 sm:p-10 lg:px-12 lg:pt-12 lg:pb-10 rounded-[28px] bg-black text-white shadow-[0_25px_50px_-12px_rgba(11,15,41,0.35)] border border-brand-gold/30 flex flex-col justify-between relative min-h-[660px] lg:min-h-[760px] lg:h-auto">
            <div className="absolute top-6 right-6 bg-brand-gold text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Most Popular
            </div>

            <div>
              <div className="flex items-baseline gap-2 text-white mt-2">
                <span className="text-[40px] font-bold leading-none tracking-tight">
                  {billing === "monthly" ? "$449" : "$379"}
                </span>
                <span className="text-sm line-through text-brand-gold font-bold">
                  {billing === "monthly" ? "$600" : "$500"}
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  /setup
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mt-2 tracking-tight">
                Business CMS Website
              </h3>

              <p className="text-gray-300 text-xs sm:text-[13px] mt-2 font-semibold opacity-95">
                Manage Your Website Without Technical Knowledge
              </p>

              <ul className="space-y-3.5 mt-6 border-t border-gray-800 pt-6">
                {cmsFeatures.map((item, idx) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-white text-xs sm:text-[13px] ${idx === 0 ? "font-bold text-brand-gold mb-1" : "font-semibold"}`}
                  >
                    {idx > 0 && (
                      <div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-midnight stroke-[3.5]" />
                      </div>
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-wider text-center">
                Best For: Growing Businesses, Service Providers, Healthcare,
                Education, Real Estate, Corporate
              </p>
              <a
                href="#contact"
                className="w-full py-3.5 rounded-full bg-brand-gold text-white hover:bg-brand-gold/90 transition-all font-bold text-xs uppercase tracking-wider text-center block mt-4 shadow-sm"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* eCommerce Website Package */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-gray-200/60 shadow-sm flex flex-col justify-between min-h-[600px] lg:min-h-[710px] lg:h-auto">
            <div>
              <div className="flex items-baseline gap-2 text-midnight">
                <span className="text-[40px] font-bold leading-none tracking-tight">
                  {billing === "monthly" ? "$999" : "$849"}
                </span>
                <span className="text-sm line-through text-gray-400 font-bold">
                  {billing === "monthly" ? "$1,500" : "$1,250"}
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  /setup
                </span>
              </div>

              <h3 className="text-2xl font-bold text-midnight mt-2 tracking-tight">
                eCommerce Website
              </h3>

              <p className="text-gray-500 text-xs sm:text-[13px] mt-2 font-semibold">
                Start Selling Online
              </p>

              <ul className="space-y-3.5 mt-6 border-t border-gray-100 pt-6">
                {ecommerceFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600 text-xs sm:text-[13px] font-semibold"
                  >
                    <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-gold stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-wider text-center">
                Best For: Retail, Fashion, Electronics, FMCG
              </p>
              <a
                href="#contact"
                className="w-full py-3.5 rounded-full bg-gray-100 text-midnight hover:bg-gray-200 transition-all font-bold text-xs uppercase tracking-wider text-center block mt-4"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
