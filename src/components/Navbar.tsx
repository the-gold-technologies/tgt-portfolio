"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentScrolledRef = useRef(scrolled);

  useEffect(() => {
    currentScrolledRef.current = scrolled;
  }, [scrolled]);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 80 && !currentScrolledRef.current) {
        setScrolled(true);
      } else if (scrollY < 40 && currentScrolledRef.current) {
        setScrolled(false);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check initial scroll position on mount
    updateScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex justify-center ${scrolled ? "top-4 pointer-events-none px-4" : "top-0"}`}
      >
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            scrolled
              ? "flex items-center bg-[#f1f1f1] backdrop-blur-md shadow-sm border border-gray-200/50 justify-between w-max rounded-full m-auto px-6 py-2.5 gap-6 md:gap-12"
              : "w-full py-6 px-4 md:px-8 lg:px-12 bg-transparent rounded-none"
          }`}
        >
          <div
            className={
              scrolled
                ? "flex items-center w-full justify-between gap-6 md:gap-12"
                : "max-w-7xl 2xl:max-w-[90rem] mx-auto w-full flex items-center justify-between gap-4 sm:gap-8"
            }
          >
            <Link href="/" className="shrink-0">
              <div className="flex items-center gap-2.5 relative z-10">
                <Image
                  alt="logo"
                  width={scrolled ? 40 : 52}
                  height={scrolled ? 40 : 52}
                  className={`rounded-full transition-all duration-500 shrink-0`}
                  src="/logo.jpeg"
                />
                <span
                  className={`font-bold tracking-tight transition-all duration-500 whitespace-nowrap overflow-hidden ${
                    scrolled
                      ? "text-slate-900 text-[15px] max-w-[300px] opacity-100 ml-2 md:max-w-0 md:opacity-0 md:ml-0"
                      : "text-slate-900 text-[17px] sm:text-[19px] max-w-[300px] opacity-100 ml-2"
                  }`}
                >
                  The Gold Technologies
                </span>
              </div>
            </Link>

            <div
              className={`hidden md:flex items-center gap-8 text-[14px] font-medium transition-all duration-500 relative z-10 ${
                scrolled ? "text-slate-800" : "text-slate-600"
              }`}
            >
              <Link
                href="#why-choose"
                className={`transition-colors hover:text-black`}
              >
                Why Us
              </Link>
              <Link
                href="#projects"
                className={`transition-colors hover:text-black`}
              >
                Projects
              </Link>
              <Link
                href="#pricing"
                className={`transition-colors hover:text-black`}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className={`transition-colors hover:text-black`}
              >
                Contact Us
              </Link>
            </div>

            <div className="hidden sm:flex items-center gap-4 transition-all duration-500 relative z-10 shrink-0">
              <Link
                href="#contact"
                className={`px-6 py-2.5 rounded-full font-bold bg-[#D4AF37] text-black hover:bg-[#F5D061] transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 ${scrolled ? "text-[12px] px-5 py-2.5" : "text-[13px]"}`}
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden flex items-center justify-center p-2 -mr-2 rounded-full text-slate-900 hover:bg-slate-200/50 transition-colors shrink-0`}
              aria-label="Open Mobile Menu"
            >
              <Menu
                className={
                  scrolled ? "w-5 h-5 sm:w-6 sm:h-6" : "w-6 h-6 sm:w-7 sm:h-7"
                }
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-[70] w-[85vw] sm:w-[400px] bg-white flex flex-col p-6 sm:p-8 shadow-2xl border-l border-slate-100"
            >
              <div className="flex justify-between items-center mb-8 sm:mb-12 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    alt="logo"
                    width={32}
                    height={32}
                    className="rounded-full shrink-0 shadow-sm"
                    src="/logo.jpeg"
                  />
                  <span className="text-[17px] sm:text-[19px] font-bold tracking-tight text-slate-900 truncate">
                    The Gold Technologies
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 rounded-full text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
                  aria-label="Close Mobile Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 sm:gap-8 text-[17px] sm:text-[20px] font-semibold tracking-tight text-slate-900 px-2">
                <Link
                  href="#why-choose"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Why Us
                </Link>
                <Link
                  href="#projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-auto pt-12">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex justify-center py-4 rounded-full text-sm font-bold bg-[#D4AF37] text-black hover:bg-[#F5D061] transition-all shadow-md"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
