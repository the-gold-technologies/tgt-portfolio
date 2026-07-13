"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../app/data";

const CorporateMockup = () => {
  return (
    <div className="w-full h-full min-h-[250px] bg-midnight rounded-2xl overflow-hidden relative shadow-[0_20px_40px_rgba(255,122,0,0.06)] border-0 flex items-center justify-center">
      <img
        src="/projects/corporate-mockup.png"
        alt="Corporate Website Case Study Mockup"
        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
};

const ECommerceMockup = () => {
  return (
    <div className="w-full h-full min-h-[250px] bg-midnight rounded-2xl overflow-hidden relative shadow-[0_20px_40px_rgba(255,122,0,0.06)] border-0 flex items-center justify-center">
      <img
        src="/projects/ecommerce-mockup.png"
        alt="E-Commerce Storefront Case Study Mockup"
        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
};

const PortalMockup = () => {
  return (
    <div className="w-full h-full min-h-[250px] bg-midnight rounded-2xl overflow-hidden relative shadow-[0_20px_40px_rgba(255,122,0,0.06)] border-0 flex items-center justify-center">
      <img
        src="/projects/portal-mockup.png"
        alt="SaaS Portal Dashboard Case Study Mockup"
        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
};

const EnterpriseMockup = () => {
  return (
    <div className="w-full h-full min-h-[250px] bg-midnight rounded-2xl overflow-hidden relative shadow-[0_20px_40px_rgba(255,122,0,0.06)] border-0 flex items-center justify-center">
      <img
        src="/projects/enterprise-mockup.png"
        alt="Enterprise Systems Case Study Mockup"
        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
};

export default function Portfolio() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 bg-midnight text-white z-10 relative border-t border-b border-gray-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,122,0,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] uppercase tracking-widest font-black text-xs mb-3 block animate-pulse">
            PORTFOLIO SECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
            Real Projects. Real Businesses. Real Results.
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-semibold leading-relaxed">
            Explore websites and digital solutions developed for clients across
            multiple industries.
          </p>
        </div>

        {/* Mockups and Detail View Grid (Completely Non-Boxy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Borderless Project Selector (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            {PROJECTS.map((proj, index) => {
              const isSelected = selectedProjectIndex === index;
              return (
                <button
                  key={proj.title}
                  onClick={() => setSelectedProjectIndex(index)}
                  className="text-left flex items-start gap-4 cursor-pointer group focus:outline-none relative py-1"
                >
                  {/* Active Indicator bar */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-300 ${
                      isSelected
                        ? "bg-[#d4af37] scale-y-100"
                        : "bg-transparent scale-y-50 group-hover:bg-gray-800"
                    }`}
                  />

                  <div className="pl-6">
                    <span
                      className={`text-[9px] font-black font-mono tracking-widest block mb-1 uppercase ${
                        isSelected
                          ? "text-[#d4af37]"
                          : "text-gray-550 group-hover:text-gray-400"
                      }`}
                    >
                      {proj.category}
                    </span>
                    <h3
                      className={`font-black text-lg transition-colors ${
                        isSelected
                          ? "text-white"
                          : "text-gray-450 group-hover:text-gray-200"
                      }`}
                    >
                      {proj.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Device Mockup Showcase (Right Column - Rounded Float layout) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-6 sm:p-8 rounded-[36px] bg-midnight/90/40 border border-gray-900 relative overflow-hidden backdrop-blur-md flex flex-col justify-between shadow-[0_25px_60px_rgba(255,122,0,0.08)] hover:shadow-[0_25px_60px_rgba(255,122,0,0.12)] transition-shadow duration-500">
              {/* Header Simulator Bar */}
              <div className="flex items-center justify-between border-b border-gray-900/80 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-midnight text-[10px] text-gray-550 border border-gray-900/60 font-mono tracking-wide">
                  https://preview.tgt.company/
                  {PROJECTS[selectedProjectIndex].title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}
                </div>
              </div>

              {/* Main Preview Content */}
              <div className="mb-8">
                <span className="text-[10px] text-[#d4af37] font-black tracking-widest uppercase mb-2 block animate-pulse">
                  {PROJECTS[selectedProjectIndex].category} Build
                </span>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-6">
                    <h3 className="text-2xl font-black text-white mb-4">
                      {PROJECTS[selectedProjectIndex].title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-6 font-semibold">
                      {PROJECTS[selectedProjectIndex].description}
                    </p>

                    <div className="space-y-3">
                      {PROJECTS[selectedProjectIndex].details.map(
                        (detail, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-midnight/80 border border-gray-900 text-[11px] text-gray-350 font-semibold shadow-sm"
                          >
                            {detail}
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Browser Simulator Screen Mockup */}
                  <div className="md:col-span-6 w-full flex items-center justify-center">
                    {selectedProjectIndex === 0 && <CorporateMockup />}
                    {selectedProjectIndex === 1 && <ECommerceMockup />}
                    {selectedProjectIndex === 2 && <PortalMockup />}
                    {selectedProjectIndex === 3 && <EnterpriseMockup />}
                  </div>
                </div>
              </div>

              {/* Footer Specs Row */}
              <div className="flex flex-wrap gap-3 border-t border-gray-900 pt-6 mt-auto items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {PROJECTS[selectedProjectIndex].features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 text-[9px] font-black uppercase tracking-wider"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="text-xs text-[#d4af37] hover:text-[#d4af37] font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors group"
                >
                  View Case Study{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
