"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../app/data";

export default function Portfolio() {
  const [active, setActive] = useState<number>(0);

  return (
    <section
      id="portfolio"
      className="py-24 px-4 md:px-8 bg-black text-white z-10 relative border-t border-b border-gray-900"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <span className="text-[#d4af37] uppercase tracking-widest font-black text-xs mb-3 block animate-pulse">
            PORTFOLIO SECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight text-white">
            Real Projects. Real Businesses.<br />
            <span className="font-serif italic text-[#d4af37] font-medium">Real Results.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-semibold leading-relaxed">
            Explore websites and digital solutions developed for clients across
            multiple industries.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[450px] lg:h-[500px] gap-3 md:gap-5">
          {PROJECTS.map((project, index) => {
            const isActive = active === index;
            
            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className={`relative overflow-hidden rounded-[2rem] border border-white/10 cursor-pointer transition-all duration-1000 ease-in-out group ${
                  isActive ? "flex-[5] md:flex-[6]" : "flex-[1]"
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Overlays */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive 
                      ? "bg-gradient-to-t from-[#0a0a0a]/95 via-black/60 to-black/10 opacity-100" 
                      : "bg-black/80 opacity-100 group-hover:bg-black/60"
                  }`} 
                />

                {/* Content - Active State */}
                <div 
                  className={`absolute inset-0 flex flex-col justify-end p-8 md:p-10 transition-all duration-1000 ease-in-out delay-100 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span className="text-[#d4af37] text-[10px] md:text-xs font-black tracking-widest uppercase">
                      EXPERTISE
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base font-medium max-w-lg mb-8 line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition-all w-max text-sm font-bold backdrop-blur-md group/btn"
                    >
                      Explore 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition-all w-max text-sm font-bold backdrop-blur-md group/btn">
                      Explore 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  )}
                </div>

                {/* Content - Inactive State */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <h3 className="text-white/70 font-bold tracking-[0.2em] uppercase text-sm md:text-base whitespace-nowrap transform md:-rotate-90 transition-colors group-hover:text-white">
                    {project.category}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
