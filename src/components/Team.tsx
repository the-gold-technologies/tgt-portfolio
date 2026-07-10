"use client";

import React from "react";
import { TEAM } from "../app/data";

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative border-t border-zinc-200"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff7a00]/3 blur-[90px] pointer-events-none -z-10" />

      {/* Header (Inspired by reference layout) */}
      <div className="text-left mb-20 max-w-5xl mx-auto">
        <span className="text-zinc-400 uppercase tracking-widest font-black text-[10px] block mb-2 font-mono">
          WE ARE TGT
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-none">
          Our People
        </h2>
      </div>

      {/* Grid of Team Profiles (Color cropped circle avatars + organic blobs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl mx-auto">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center group cursor-default"
          >
            {/* Organic Blob Avatar Frame */}
            <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
              {/* Organic colored blob element behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00] to-[#fbbf24] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 pointer-events-none shadow-sm" />
              
              {/* Circular Cropped Colored avatar to hide square gray background */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white bg-white relative z-10 transition-transform duration-500 group-hover:-translate-y-1 shadow-md">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>

            {/* Profile Info matching mockup hierarchy */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-[#ff7a00] font-black uppercase tracking-widest block mb-1 font-mono">
                {member.role}
              </span>
              <h3 className="text-lg font-black text-zinc-900 mb-1 leading-tight">
                {member.name}
              </h3>
              <a
                href={`mailto:${member.email}`}
                className="text-[11px] text-pink-500 font-extrabold block hover:underline leading-none mb-3"
              >
                {member.email}
              </a>
              <p className="text-[10px] text-zinc-400 font-semibold max-w-[200px] leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
