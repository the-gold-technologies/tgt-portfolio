"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PROJECTS } from "../data";

// Extract all unique categories dynamically
const categories = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects dynamically based on selection
  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const easeCurve = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#d4af37] selection:text-white">
      <Navbar alwaysLight={true} />

      {/* Hero Header Section - White theme matching the Kraus Marketing visual layout */}
      <header className="relative z-10 pt-44 pb-12 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className="text-6xl sm:text-8xl font-black mt-2 tracking-tight leading-none text-black mb-6">
              Portfolio
            </h1>
            <span className="text-[#d4af37] uppercase tracking-widest font-black text-xs sm:text-sm mb-3 block animate-pulse">
              AWARD-WINNING DIGITAL AGENCY
            </span>
            <p className="text-2xl sm:text-3xl font-bold leading-snug text-black">
              TGT produces next-gen custom systems, enterprise solutions, and AI
              integrations for clients across all industries.
              <span className="text-zinc-500 font-normal">
                {" "}
                Check out some of our most robust pipelines and campaign-driven
                platforms in our established portfolio below. You just may find
                some inspiration for your next software initiative.
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area - White background matching the Kraus Group layout style */}
      <main className="relative z-10 py-16 bg-white text-black min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
          {/* Categories / Filter list exactly like the Kraus group portfolio */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12 pb-6 border-b border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-none">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`text-sm md:text-[15px] font-bold uppercase tracking-wider transition-colors duration-300 relative py-1 ${
                    isActive
                      ? "text-[#d4af37]"
                      : "text-zinc-500 hover:text-black"
                  }`}
                >
                  {category}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 35,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Framer-Motion Animated Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: easeCurve }}
                  key={project.title}
                  onClick={() => {
                    if (project.link) {
                      window.open(
                        project.link,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-gray-200/60 bg-zinc-50 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500"
                >
                  {/* Background Image / Screenshot */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1.2s] ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  {/* Kraus-style top-left tag */}
                  {project.tag && (
                    <div className="absolute top-6 left-6 z-30 bg-[#00a7e1] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-sm shadow-sm select-none group-hover:opacity-0 transition-opacity duration-500">
                      {project.tag}
                    </div>
                  )}

                  {/* Kraus-style dark hover overlay */}
                  <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

                  {/* Default static visual gradient subtle overlay (bottom protection) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                  {/* Standard view content (Visible by default at bottom) */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                    <span className="text-[#d4af37] text-[10px] font-black tracking-widest uppercase mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover content (Details + Explore) */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    <span className="text-[#d4af37] text-[10px] font-black tracking-widest uppercase mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                      {project.title}
                    </h3>

                    {project.link ? (
                      <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 group-hover:bg-[#d4af37] group-hover:text-black group-hover:border-[#d4af37] transition-all w-max text-xs font-bold backdrop-blur-md group/btn">
                        View Site
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white transition-all w-max text-xs font-bold backdrop-blur-md">
                        View Platform
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
