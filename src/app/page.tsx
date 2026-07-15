"use client";

import React, { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PainPoint from "../components/PainPoint";
import WhyChoose from "../components/WhyChoose";
import SocialProof from "../components/SocialProof";
import WhatWeBuild from "../components/WhatWeBuild";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Technologies from "../components/Technologies";
import Team from "../components/Team";
import Contact from "../components/Contact";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

import ClientMarquee from "../components/ClientMarquee";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-midnight selection:bg-[#d4af37] selection:text-white"
    >
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-glow pointer-events-none z-0" />
      <div className="absolute top-[2000px] right-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <Navbar />
      <Hero />
      <ClientMarquee />
      <PainPoint />
      <WhyChoose />

      <SocialProof />
      <WhatWeBuild />
      <Portfolio />
      <Pricing />
      <Technologies />
      <Contact />
      <CtaBanner />
      <Footer />
    </div>
  );
}
