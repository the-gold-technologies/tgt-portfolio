"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

// Inline Custom SVG Logos for 35 Technologies to avoid extra image files and ensure high resolution and fast loading
const renderLogo = (name: string, color: string) => {
  switch (name) {
    case "React JS":
    case "React Native Devs":
    case "MERN Architects":
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" className="w-full h-full">
          <circle cx="0" cy="0" r="2.05" fill={color} />
          <g stroke={color} strokeWidth="1.2" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "Laravel":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M20.25 15.584l-4.5 2.598v-5.196l4.5-2.598v5.196zm-5.625-7.794l-4.5 2.598V5.192l4.5-2.598v5.196zM9 11.25L4.5 8.652v5.196L9 16.446V11.25z" />
        </svg>
      );
    case "Wordpress":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18.5c-4.14 0-7.5-3.36-7.5-7.5 0-.58.07-1.14.2-1.68l4.47 12.27c.87.5 1.83.82 2.83.91zm5.83-3.66c-.1-.38-.72-2.54-.72-2.54-.25-.83-.87-1.28-1.57-1.28h-.12c-.75 0-1.42.54-1.7 1.25L12 20.25l-2.07-6.2c-.28-.71-.95-1.25-1.7-1.25h-.12c-.7 0-1.32.45-1.57 1.28l-.5 1.7L4.56 10.3c1.38-2.6 4.12-4.3 7.44-4.3 2.5 0 4.73.97 6.4 2.56L14.7 17.5h.03c.53 0 .97-.44.97-.97 0-.25-.09-.5-.27-.67l-1.03-.98c-.28-.27-.45-.63-.45-1.03 0-.82.68-1.5 1.5-1.5.3 0 .58.08.82.25l1.56 1.05z" />
        </svg>
      );
    case "Shopify":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M19 6h-2v-1.5C17 2.01 14.99 0 12.5 0S8 2.01 8 4.5V6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-9-1.5c0-1.38 1.12-2.5 2.5-2.5S15 3.12 15 4.5V6H10V4.5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2L4 6.6v9.2L12 22l8-4.6V6.6L12 2zm6.2 13.2L12 18.7l-6.2-3.5V8.8L12 5.3l6.2 3.5v6.4z" />
        </svg>
      );
    case "PostgreSQL":
    case "Data Engineers":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm0-5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2C8 6 6 11 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2-9-6-13zm0 16c-1.7 0-3-1.3-3-3 0-2.2 1.3-5 3-7.5 1.7 2.5 3 5.3 3 7.5 0 1.7-1.3 3-3 3z" />
        </svg>
      );
    case "Django":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14h-2.2v-1.2h-.1c-.4.6-1.1 1.4-2.4 1.4-2.4 0-3.6-1.8-3.6-4.2V9.8h2.4v2.5c0 1.2.4 2.1 1.4 2.1 1 0 1.5-.7 1.5-1.7V9.8h2.4v6.2h.6z" />
        </svg>
      );
    case "iOS Swift":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M21.5 15.5c-3.1 1.4-6.4 2-9.5 2-5.5 0-9.5-2.5-9.5-6.5 0-2.3 1.2-4.5 3-6 0 0-1 1.8-.5 3.3.6 1.8 2.2 3.2 4 3.7 0 0-1.8-2-.9-4.2 1-2.2 2.8-3.2 4.4-3.8 0 0-.5 1.5.1 2.8 1.1 2.3 3.5 3.3 5.4 3.7 0 0-2.4-2.8-1.5-5.5 1-2.7 3.5-3.5 5.5-3.5 0 0-.8 2 .2 3.8s3.4 3 5.4 3.5c0 0-3-3-1.6-6.8 1.4 0 2.6.8 3.5 2s1.4 2.6 1.4 4c0 3.1-1.6 5.8-4.5 7z" />
        </svg>
      );
    case "Android Kotlin":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient
              id="kotlinLogoGrad"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#7F52FF" />
              <stop offset="100%" stopColor="#FA7343" />
            </linearGradient>
          </defs>
          <path d="M2 22h20L12 12 22 2H2v20z" fill="url(#kotlinLogoGrad)" />
        </svg>
      );
    case "Flutter Devs":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M14.3 2L2.3 14l3.7 3.7L21.7 6.3V2zm0 8.3L8.6 16l5.7 5.7H22v-5.7z" />
        </svg>
      );
    case "Java Engineers":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      );
    case ".NET Engineers":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <circle cx="12" cy="12" r="10" />
          <path
            d="M8 8.5v7h2V12h3v3.5h2v-7h-2V12H10V8.5H8zm9.5 0v7h2v-7h-2z"
            fill="#ffffff"
          />
        </svg>
      );
    case "Ruby on Rails":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2L2 9l10 13 10-13L12 2zm0 3.3l6.5 4.5H5.5L12 5.3zM4.6 11.5h14.8L12 19.8 4.6 11.5z" />
        </svg>
      );
    case "Bootstrap":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <rect width="20" height="20" x="2" y="2" rx="4" />
          <path
            d="M8.5 7.5h3.2c1.2 0 2 .7 2 1.7 0 .8-.5 1.3-1.2 1.5.9.2 1.5.8 1.5 1.8 0 1.2-1 1.9-2.3 1.9H8.5v-6.9zm2 2.7h1.1c.5 0 .8-.2.8-.6s-.3-.5-.8-.5h-1.1v1.1zm0 2.7h1.3c.5 0 .9-.2.9-.6s-.4-.6-.9-.6h-1.3v1.2z"
            fill="#ffffff"
          />
        </svg>
      );
    case "Power BI":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <rect width="4" height="8" x="4" y="12" rx="0.5" />
          <rect width="4" height="13" x="10" y="7" rx="0.5" />
          <rect width="4" height="18" x="16" y="2" rx="0.5" />
        </svg>
      );
    case "Tableau":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="2" fill="#E97627" />
          <circle cx="6" cy="12" r="1.5" fill="#4E79A7" />
          <circle cx="18" cy="12" r="1.5" fill="#4E79A7" />
          <circle cx="12" cy="6" r="1.5" fill="#F28E2B" />
          <circle cx="12" cy="18" r="1.5" fill="#F28E2B" />
          <circle cx="8" cy="8" r="1.2" fill="#E15759" />
          <circle cx="16" cy="16" r="1.2" fill="#E15759" />
          <circle cx="16" cy="8" r="1.2" fill="#76B7B2" />
          <circle cx="8" cy="8" r="1.2" fill="#76B7B2" />
        </svg>
      );
    case "Zend":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16L4 18h16" />
        </svg>
      );
    case "CodeIgniter":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2C8 6 6 10 6 14s3 8 6 8 6-3 6-8-2-8-6-12zm-2 15c-.5-1-1-2-1-3.5 0-2.2 1.3-4 2.5-5.5.8 1 1.5 2.2 1.5 3.5 0 1.5-.5 2.5-1 3.5-.5-1-1-1.5-1-2s-.5.5-1 1z" />
        </svg>
      );
    case "Flask":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
        >
          <path d="M9 3h6M10 3v6l-4 8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l-4-8V3M8.5 13h7" />
        </svg>
      );
    case "Express":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "Nest JS":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2L4 5v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V5l-8-3zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
        </svg>
      );
    case "jQuery":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12c2-2 4-2 6 0s2 2 4 0" />
        </svg>
      );
    case "Sensors & Actuators":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
        >
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
        </svg>
      );
    case "Cloud Computing":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case "Wireless Protocols":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
          <circle cx="12" cy="19.5" r="1.5" fill={color} />
        </svg>
      );
    case "AI & ML":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        >
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M12 2v9M8 5h8M7 11V8a5 5 0 0 1 10 0v3" />
        </svg>
      );
    case "MEAN Stack Specialists":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2L2 5.5l1.5 11.5L12 22l8.5-5L22 5.5zM12 5l5 11h-2.2l-1.1-2.5H10.3L9.2 16H7zM12 8.5l1.6 3.5h-3.2z" />
        </svg>
      );
    case "SAP Consultants":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M2 4h20l-2 16H4zM6 15l2-6 2 6M14 9h4v6h-4z" />
        </svg>
      );
    case "QA Engineers":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      );
    case "Python Scientists":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M12.12 2a4.8 4.8 0 00-4.8 4.8v1.68h4.8v.96H5.4A4.8 4.8 0 00.6 14.24a4.8 4.8 0 004.8 4.8h1.68v-1.68a3.12 3.12 0 013.12-3.12h4.8a4.8 4.8 0 004.8-4.8V7.52a4.8 4.8 0 00-4.8-4.8h-2.88z"
            fill="#3776AB"
          />
          <path
            d="M11.88 22a4.8 4.8 0 004.8-4.8v-1.68h-4.8v-.96h6.72A4.8 4.8 0 0023.4 9.76a4.8 4.8 0 00-4.8-4.8h-1.68v1.68a3.12 3.12 0 01-3.12 3.12h-4.8a4.8 4.8 0 00-4.8 4.8v1.68a4.8 4.8 0 004.8 4.8h2.88z"
            fill="#FFE873"
          />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          stroke={color}
          strokeWidth="2"
        >
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
  }
};

export default function Technologies() {
  const col1 = [
    { name: "Node.js", color: "#339933" },
    { name: "Java Engineers", color: "#007396" },
    { name: "Shopify", color: "#7AB55C" },
    { name: "Cloud Computing", color: "#00A4EF" },
    { name: "Bootstrap", color: "#7952B3" },
  ];

  const col2 = [
    { name: "React JS", color: "#61DAFB" },
    { name: "AI & ML", color: "#9E00FF" },
    { name: "Tableau", color: "#E97627" },
    { name: "Power BI", color: "#F2C811" },
    { name: "QA Engineers", color: "#00C4B4" },
  ];

  const col3 = [
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "iOS Swift", color: "#FA7343" },
    { name: "Android Kotlin", color: "#7F52FF" },
    { name: ".NET Engineers", color: "#512BD4" },
  ];

  const col4 = [
    { name: "Laravel", color: "#FF2D20" },
    { name: "Django", color: "#092E20" },
    { name: "Ruby on Rails", color: "#CC0000" },
    { name: "Wordpress", color: "#21759B" },
    { name: "CodeIgniter", color: "#EE4323" },
  ];

  const dupCol1 = [...col1, ...col1, ...col1];
  const dupCol2 = [...col2, ...col2, ...col2];
  const dupCol3 = [...col3, ...col3, ...col3];
  const dupCol4 = [...col4, ...col4, ...col4];

  return (
    <section
      id="technologies"
      className="py-28 bg-black text-white z-10 relative border-t border-gray-900 overflow-hidden w-full animate-fadeIn"
    >
      {/* Subtle radial background glow behind the tech container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat opacity-[0.2]"
        style={{ backgroundImage: "url('/tech-bg.png')" }}
      />
      <div className="absolute inset-0 z-[2] bg-black/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <style>{`
          .marquee-vertical-up {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .marquee-vertical-down {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .marquee-col-1 {
            animation: scroll-vertical-up-anim 22s linear infinite;
          }
          .marquee-col-2 {
            animation: scroll-vertical-down-anim 26s linear infinite;
          }
          .marquee-col-3 {
            animation: scroll-vertical-up-anim 24s linear infinite;
          }
          .marquee-col-4 {
            animation: scroll-vertical-down-anim 28s linear infinite;
          }
          .marquee-vertical-up:hover,
          .marquee-vertical-down:hover {
            animation-play-state: paused;
          }
          @keyframes scroll-vertical-up-anim {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-33.3333%);
            }
          }
          @keyframes scroll-vertical-down-anim {
            0% {
              transform: translateY(-33.3333%);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}</style>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/90 border border-gray-800 rounded-full text-xs font-semibold text-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.2)] mb-6">
              <span className="text-[#d4af37]">✦</span>
              <span>Our Tech Stack</span>
            </div>

            <h2 className="text-3xl sm:text-[44px] font-bold tracking-tight text-white leading-tight">
              Key Technologies &amp; Platforms
            </h2>

            <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed font-semibold max-w-lg">
              We work with leading platforms and technologies that empower
              digital transformation, accelerate delivery, and drive measurable
              business results.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-white text-midnight rounded-full font-bold text-xs uppercase tracking-wider border border-gray-200 hover:bg-gray-100 transition-all shadow-[0_4px_12px_rgba(255,255,255,0.1)] group"
            >
              Explore Tech Stack
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end z-10">
            <div className="w-full max-w-[520px] bg-black/40 border border-gray-800/50 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-[32px] p-6 sm:p-8 h-[450px] sm:h-[530px] relative overflow-hidden flex gap-5 sm:gap-7 justify-center">
              {/* Top and Bottom Fades */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-950 via-gray-950/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent z-10 pointer-events-none" />

              {/* Column 1: Up */}
              <div className="flex flex-col overflow-hidden h-full">
                <div className="marquee-vertical-up marquee-col-1">
                  {dupCol1.map((tech, idx) => (
                    <motion.div
                      key={`col1-${tech.name}-${idx}`}
                      whileHover={{
                        scale: 1.1,
                        rotate: -3,
                        borderColor: `${tech.color}60`,
                        boxShadow: `0 12px 30px ${tech.color}20`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-white border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center cursor-default group"
                      title={tech.name}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {renderLogo(tech.name, tech.color)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 2: Down */}
              <div className="flex flex-col overflow-hidden h-full">
                <div className="marquee-vertical-down marquee-col-2">
                  {dupCol2.map((tech, idx) => (
                    <motion.div
                      key={`col2-${tech.name}-${idx}`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 3,
                        borderColor: `${tech.color}60`,
                        boxShadow: `0 12px 30px ${tech.color}20`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-white border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center cursor-default group"
                      title={tech.name}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {renderLogo(tech.name, tech.color)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 3: Up */}
              <div className="flex flex-col overflow-hidden h-full">
                <div className="marquee-vertical-up marquee-col-3">
                  {dupCol3.map((tech, idx) => (
                    <motion.div
                      key={`col3-${tech.name}-${idx}`}
                      whileHover={{
                        scale: 1.1,
                        rotate: -3,
                        borderColor: `${tech.color}60`,
                        boxShadow: `0 12px 30px ${tech.color}20`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-white border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center cursor-default group"
                      title={tech.name}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {renderLogo(tech.name, tech.color)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 4: Down */}
              <div className="flex flex-col overflow-hidden h-full">
                <div className="marquee-vertical-down marquee-col-4">
                  {dupCol4.map((tech, idx) => (
                    <motion.div
                      key={`col4-${tech.name}-${idx}`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 3,
                        borderColor: `${tech.color}60`,
                        boxShadow: `0 12px 30px ${tech.color}20`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-white border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center cursor-default group"
                      title={tech.name}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {renderLogo(tech.name, tech.color)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
