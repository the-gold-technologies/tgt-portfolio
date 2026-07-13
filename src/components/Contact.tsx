"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MessageSquare, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [serviceInput, setServiceInput] = useState<string>("");
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
      colors: ["#d4af37", "#d4af37", "#000000"],
    });
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 md:px-8 bg-gray-50/50 border-t border-gray-150 z-10 relative overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-50/30 blur-[80px] pointer-events-none -z-10" />

      {/* Grid wrapper */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Info panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="lg:col-span-6 text-left flex flex-col justify-center"
        >
          <span className="text-gray-400 uppercase tracking-widest font-bold text-xs mb-4 block">
            Lead Capture Section
          </span>
          <h2 className="text-3xl sm:text-[40px] font-black text-midnight leading-tight mb-6">
            Let&apos;s Build a Website That Works as Hard as You Do
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed font-semibold max-w-md">
            Book a free strategy call and discover how the right website can help you:
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Generate More Leads",
              "Increase Online Visibility",
              "Improve Customer Trust",
              "Automate Business Processes",
              "Scale Revenue Faster",
            ].map((bullet) => (
              <div key={bullet} className="flex items-center gap-3.5 group cursor-default">
                <div className="w-6 h-6 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center shrink-0 group-hover:bg-[#d4af37]/20 transition-colors duration-250">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider group-hover:text-midnight transition-colors">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-800 text-xs font-black uppercase tracking-widest font-mono">
            Get Your Free Website Consultation Today
          </p>
        </motion.div>

        {/* Input Form Panel (White floating card layout) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCurve }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[480px] bg-white border border-gray-200/70 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-[36px] p-8 sm:p-10 transition-all duration-300">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: easeCurve }}
                  onSubmit={handleContactSubmit}
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full bg-gray-50 border border-gray-150/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white text-gray-850 font-semibold placeholder-gray-350 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="jane@framer.com"
                      className="w-full bg-gray-50 border border-gray-150/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white text-gray-850 font-semibold placeholder-gray-350 transition-all"
                    />
                  </div>

                  {/* Industry/Service Select Input */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="service" className="text-xs font-bold text-gray-500 mb-2">
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        required
                        value={serviceInput}
                        onChange={(e) => setServiceInput(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-150/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white text-gray-800 font-semibold appearance-none cursor-pointer transition-all"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="Starter Web">Starter Website (Static)</option>
                        <option value="Business CMS">Business CMS Website</option>
                        <option value="eCommerce">eCommerce Platform</option>
                        <option value="Enterprise Solution">Enterprise Solution</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea Input */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="message" className="text-xs font-bold text-gray-500 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      value={msgInput}
                      onChange={(e) => setMsgInput(e.target.value)}
                      placeholder="Type your message"
                      className="w-full bg-gray-50 border border-gray-150/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white text-gray-850 font-semibold resize-none placeholder-gray-350 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 text-left">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center gap-3.5 bg-[#d4af37] hover:bg-brand-gold/90 hover:scale-[1.02] active:scale-[0.98] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#d4af37] transition-transform duration-300 group-hover:translate-x-0.5">
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                      <span className="pr-1.5 font-extrabold tracking-tight">Get a Solution</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center mb-6 border border-[#d4af37]/10 shadow-sm animate-bounce">
                    <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-black mb-2 text-midnight">
                    Briefing Dispatched!
                  </h3>
                  <p className="text-gray-500 text-xs max-w-sm mb-6 leading-relaxed font-semibold">
                    Thank you. Meghna Tiwari and Chetan Saini will review your technical specifications shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setNameInput("");
                      setEmailInput("");
                      setServiceInput("");
                      setMsgInput("");
                    }}
                    className="px-6 py-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:scale-[1.02] active:scale-95 transition-all text-gray-800 font-bold uppercase tracking-wider cursor-pointer shadow-sm text-xs"
                  >
                    Submit Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
