// app/components/Navbar.tsx
"use client"; // Required for useState and useEffect

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 50% of the viewport height
      const shouldBeVisible = window.scrollY > window.innerHeight * 0.5;
      if (shouldBeVisible !== isVisible) {
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]); // Re-run effect only if isVisible changes

  // Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Gradient Fade */}
      <div
        className={`fixed top-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-transparent h-28 w-full ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-40 
        transition-all duration-300 ease-out`}
      />

      <div
        className={`
          fixed 
          w-[90%] md:w-8xl 
          flex items-center 
          rounded-xl 
          justify-between 
          bg-neutral-950/90 
          border border-neutral-800 
          top-4 md:top-10 
          p-4 md:py-5 md:px-7
          left-1/2 -translate-x-1/2 
          z-50 
          backdrop-blur-sm
          transition-all duration-300 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-16 pointer-events-none"
          }
        `}
      >
        <div className="font-array text-3xl hover:scale-105 transition-all duration-300">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Git Pilot
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-lg font-mono">
          <Link
            href="/docs"
            className="text-neutral-300 hover:text-white transition-all duration-300"
          >
            Docs
          </Link>
          <a
            target="_blank"
            href="https://www.npmjs.com/package/@abhaydesu/git-pilot"
            className="text-neutral-300 hover:text-white transition-all duration-300"
          >
            Npm
          </a>
          <a
            target="_blank"
            href="https://github.com/abhaydesu/git-pilot-cli"
            className="text-neutral-300 hover:text-white transition-all duration-300"
          >
            Github
          </a>
        </div>

        <button
          className="md:hidden z-50 p-2 -mr-2" // Added padding for easier tapping
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-neutral-300 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-neutral-300 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-neutral-300 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          fixed w-[90%] left-1/2 -translate-x-1/2
          top-[5.75rem] // Positioned below the navbar (1rem top + 4.25rem height + 0.5rem gap)
          md:hidden // Critical: only show on mobile
          bg-neutral-950/90 border border-neutral-800 rounded-xl
          backdrop-blur-sm
          transition-all duration-300 ease-out
          overflow-hidden z-50
          ${
            isVisible && isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-16 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center gap-6 p-6 font-mono text-lg">
          <Link
            href="/docs"
            className="text-neutral-300 hover:text-white transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Docs
          </Link>
          <a
            target="_blank"
            href="https://www.npmjs.com/package/@abhaydesu/git-pilot"
            className="text-neutral-300 hover:text-white transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Npm
          </a>
          <a
            target="_blank"
            href="https://github.com/abhaydesu/git-pilot-cli"
            className="text-neutral-300 hover:text-white transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
};