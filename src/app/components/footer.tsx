"use client";

import React from "react";
import AsciiArtBackground from "./ui/AsciiiBackground";
import { IconBrandGithub, IconBrandLinkedin, IconBrandXFilled } from "@tabler/icons-react";


export const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full px-6 py-12"
      aria-labelledby="footer-heading"
    >
      <div
        id="footer-heading"
        className="relative md:mx-4 max-w-8xl rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25" aria-hidden>
          <AsciiArtBackground
            rowHeight={10}
            ramp=" .:-=+*#%@"
            speed={0.18}
            contrast={0.9}
          />
          {/* top fade to make content readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>

        {/* Foreground content */}
        <div
          className="relative z-10 p-6 flex flex-col md:flex-row items-center gap-6"
        >
          {/* Left: author */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-neutral-300">
              made with &lt;3 by{" "}
              <a
                className="font-medium text-neutral-100 hover:text-gradient-accent"
                target="_blank"
                rel="noopener noreferrer"
                href="https://abhaydesu.dev"
              >
                Abhay
              </a>
            </div>
          </div>

          {/* Middle: ascii divider */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div
              className="font-mono text-xs text-neutral-500 select-none"
              aria-hidden
              style={{ letterSpacing: "0.06em" }}
            >
              {Array.from({ length: 40 })
                .map((_, i) => (i % 6 === 0 ? "~" : i % 3 === 0 ? "-" : "."))
                .join("")}
            </div>
          </div>

          {/* Right: social links */}
          <div className="flex items-center gap-6">
            <a
              className="flex items-center gap-2 text-neutral-300 hover:text-white hover:scale-112 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abhaydesu/"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin height={22} width={22} />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              className="flex items-center gap-2 text-neutral-300 hover:text-white hover:scale-112 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/abhaydesu/"
              aria-label="GitHub"
            >
              <IconBrandGithub height={22} width={22} />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              className="flex items-center gap-2 text-neutral-300 hover:text-white hover:scale-112 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/abhaydesu"
              aria-label="X / Twitter"
            >
              <IconBrandXFilled height={22} width={22} />
              <span className="sr-only">X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
