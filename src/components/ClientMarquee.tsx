"use client";

import React from "react";
import Image from "next/image";

const clientLogos = [
  {
    name: "Centriik",
    image: "/clients/centriik.png",
  },
  {
    name: "DS Cooling Towers",
    image: "/clients/dscooling.png",
  },
  {
    name: "Himalayan Agro",
    image: "/clients/himalayan.png",
  },
  {
    name: "Bir Credit Solution",
    image: "/clients/bircredit.png",
  },
  {
    name: "Indian Vastu Experts",
    image: "/clients/vastu.png",
  },
  {
    name: "Label",
    image: "/clients/label.png",
  },
  {
    name: "My Weekend Trip",
    image: "/clients/myweekendtrip.png",
  },
];

export default function ClientMarquee() {
  return (
    <section className="py-14 bg-[#F0F0F0] relative overflow-hidden z-20">
      <div className="max-w-[96%] xl:max-w-[1400px] mx-auto w-full px-6 sm:px-10 md:px-16">
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-8 md:py-10 md:px-12 shadow-sm border border-gray-100/50 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          {/* Static Title Side */}
          <div className="flex-shrink-0 text-center md:text-left min-w-[200px]">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted by 50+ Companies
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-semibold">
              From startups to enterprises
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] h-10 bg-slate-300" />

          {/* Sliding Ribbon */}
          <div 
            className="flex-1 overflow-hidden relative w-full"
            style={{ 
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
          >
            <div className="flex w-max gap-16 items-center animate-marquee">
              {/* Set 1 */}
              <div className="flex gap-16 items-center">
                {clientLogos.map((client, idx) => (
                  <div
                    key={`set1-${idx}`}
                    className="flex items-center justify-center shrink-0 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={140}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Set 2 */}
              <div className="flex gap-16 items-center" aria-hidden="true">
                {clientLogos.map((client, idx) => (
                  <div
                    key={`set2-${idx}`}
                    className="flex items-center justify-center shrink-0 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={140}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
