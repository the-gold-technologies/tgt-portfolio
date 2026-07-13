"use client";

import React from "react";
import { motion } from "framer-motion";

// Custom premium white SVG icons inside dark rounded squares
function CorporateWebsitesIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 12 4 L 15.5 7.5 L 12 11 L 8.5 7.5 Z" fill="white" />
      <path d="M 12 13 L 15.5 16.5 L 12 20 L 8.5 16.5 Z" fill="white" />
      <path d="M 7 9 L 10.5 12.5 L 7 16 L 3.5 12.5 Z" fill="white" />
      <path d="M 17 9 L 20.5 12.5 L 17 16 L 13.5 12.5 Z" fill="white" />
    </svg>
  );
}

function ECommerceIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" fill="white" />
      <circle cx="20" cy="21" r="1" fill="white" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function CustomPortalsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" y1="12" x2="12" y2="5.5" stroke="white" strokeWidth="2" />
      <line x1="12" y1="12" x2="6.5" y2="17.5" stroke="white" strokeWidth="2" />
      <line
        x1="12"
        y1="12"
        x2="17.5"
        y2="17.5"
        stroke="white"
        strokeWidth="2"
      />
      <line x1="12" y1="12" x2="5.5" y2="11.5" stroke="white" strokeWidth="2" />
      <line
        x1="12"
        y1="12"
        x2="18.5"
        y2="11.5"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" fill="white" />
      <circle cx="12" cy="5" r="2" fill="white" />
      <circle cx="6" cy="18" r="2" fill="white" />
      <circle cx="18" cy="18" r="2" fill="white" />
      <circle cx="5" cy="11" r="2" fill="white" />
      <circle cx="19" cy="11" r="2" fill="white" />
    </svg>
  );
}

function EnterpriseSystemsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function AiAutomationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function WhatWeBuild() {
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const topRowProjects = [
    {
      id: 1,
      label: "Corporate Websites",
      description: "Build credibility and generate quality business inquiries.",
      icon: CorporateWebsitesIcon,
    },
    {
      id: 2,
      label: "E-Commerce Stores",
      description:
        "Turn visitors into customers with optimized shopping experiences.",
      icon: ECommerceIcon,
    },
    {
      id: 3,
      label: "Custom Portals & Web Applications",
      description:
        "Automate processes, improve efficiency, and scale operations.",
      icon: CustomPortalsIcon,
    },
  ];

  const bottomRowProjects = [
    {
      id: 4,
      label: "Enterprise Solutions",
      description:
        "ERP, CRM, BI Dashboards, Inventory Systems, and AI-powered platforms.",
      icon: EnterpriseSystemsIcon,
    },
    {
      id: 5,
      label: "AI & Automation Systems",
      description:
        "Integrate custom AI models, automate workflows, and deploy intelligent agents.",
      icon: AiAutomationIcon,
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white border-t border-gray-100 text-midnight z-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* elegant serif header matching the mockup style */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="text-4xl sm:text-5xl font-serif tracking-tight text-midnight font-medium"
        >
          What we build
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCurve, delay: 0.1 }}
          className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed"
        >
          We engineer high-performance custom software, business applications,
          and AI integrations tailored specifically to scale your operations.
        </motion.p>

        {/* Staggered card grid structure */}
        <div className="mt-16 flex flex-col gap-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRowProjects.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: easeCurve,
                    delay: idx * 0.1,
                  }}
                  className="flex flex-col items-start text-left p-8 bg-[#f8f9fb] rounded-[24px] border border-gray-100/50 shadow-sm"
                >
                  <div className="w-11 h-11 bg-midnight rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-midnight mb-2 tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: 2 wider cards, aligned and centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottomRowProjects.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: easeCurve,
                    delay: (idx + 3) * 0.1,
                  }}
                  className="flex flex-col items-start text-left p-8 bg-[#f8f9fb] rounded-[24px] border border-gray-100/50 shadow-sm"
                >
                  <div className="w-11 h-11 bg-midnight rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-midnight mb-2 tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
