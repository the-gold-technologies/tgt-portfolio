"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [msgInput, setMsgInput] = useState<string>("");
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !msgInput) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#ff7a00", "#d4af37", "#000000"],
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 max-w-5xl mx-auto z-10 relative"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-50/40 blur-[80px] pointer-events-none -z-10" />

      {/* Grid wrapper (Borderless, transparent design) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Info panel */}
        <div className="lg:col-span-6 text-left">
          <span className="text-[#ff7a00] uppercase tracking-widest font-black text-xs mb-3 block animate-pulse">
            COLLABORATION BRIEFING
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight mb-6">
            Let&apos;s Build a Website That Works as Hard as You Do
          </h2>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-semibold">
            Book a free strategy call and discover how the right website can help you:
          </p>

          <div className="space-y-4">
            {[
              "Generate More Leads",
              "Increase Online Visibility",
              "Improve Customer Trust",
              "Automate Business Processes",
              "Scale Revenue Faster",
            ].map((bullet) => (
              <div key={bullet} className="flex items-center gap-3.5 group cursor-default">
                <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors duration-250">
                  <Check className="w-3.5 h-3.5 text-[#ff7a00]" />
                </div>
                <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider group-hover:text-zinc-900 transition-colors">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <p className="text-zinc-800 text-xs font-black mt-10 uppercase tracking-widest font-mono">
            Get Your Free Website Consultation Today
          </p>
        </div>

        {/* Input Form Panel (Seamless transparent fields, no surrounding box) */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: easeCurve }}
                onSubmit={handleContactSubmit}
                className="space-y-8"
              >
                <div className="relative">
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#ff7a00] mb-2 font-mono">
                    Corporate Email Address
                  </label>
                  <div className="relative flex items-center border-b-2 border-zinc-200 focus-within:border-[#ff7a00] transition-colors pb-2">
                    <Mail className="w-4 h-4 text-zinc-400 mr-3 shrink-0" />
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="founder@enterprise.com"
                      className="w-full bg-transparent text-sm focus:outline-none text-zinc-800 font-semibold placeholder-zinc-350"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[9px] font-black uppercase tracking-widest text-[#ff7a00] mb-2 font-mono">
                    Describe Your Target Goal
                  </label>
                  <div className="relative flex items-start border-b-2 border-zinc-200 focus-within:border-[#ff7a00] transition-colors pb-2">
                    <MessageSquare className="w-4 h-4 text-zinc-400 mr-3 mt-1 shrink-0" />
                    <textarea
                      required
                      rows={2}
                      value={msgInput}
                      onChange={(e) => setMsgInput(e.target.value)}
                      placeholder="Build an eCommerce shop or custom client portal..."
                      className="w-full bg-transparent text-sm focus:outline-none text-zinc-800 font-semibold resize-none placeholder-zinc-350"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#fbbf24] text-[#050507] font-black text-xs tracking-widest uppercase shadow-md hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-8"
                >
                  Submit Briefing
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6 border border-[#ff7a00]/10 shadow-sm animate-bounce">
                  <CheckCircle2 className="w-8 h-8 text-[#ff7a00]" />
                </div>
                <h3 className="text-xl font-black mb-2 text-zinc-900">
                  Briefing Dispatched!
                </h3>
                <p className="text-zinc-505 text-xs max-w-sm mb-6 leading-relaxed font-semibold">
                  Thank you. Meghna Tiwari and Chetan Saini will review your technical specifications shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setEmailInput("");
                    setMsgInput("");
                  }}
                  className="px-6 py-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 hover:scale-[1.02] active:scale-95 transition-all text-zinc-800 font-black uppercase tracking-wider cursor-pointer shadow-sm"
                >
                  Submit Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
