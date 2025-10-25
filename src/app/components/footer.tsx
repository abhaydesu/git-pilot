"use client";

import React from "react";
import AsciiArtBackground from "./ui/AsciiiBackground";

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.18 9.09 7.59 10.56.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.75-1.5-3.75-1.5-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.06-1.24-5.06-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.14a10.7 10.7 0 012.84-.38c.96.01 1.93.13 2.84.38 2.16-1.43 3.11-1.14 3.11-1.14.61 1.54.23 2.68.11 2.96.72.79 1.16 1.78 1.16 3 0 4.3-2.59 5.25-5.06 5.52.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.77.53C19.07 20.84 22.25 16.67 22.25 11.75 22.25 5.48 17.27.5 11 .5z" />
  </svg>
);

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3.5 9h3v11h-3V9zM9 9h2.86v1.5h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.63V20h-3v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.92 1.3-1.92 2.65V20H9V9z" />
  </svg>
);

const IconX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M20.3 7.3a1 1 0 00-1.4-1.4L12 13.8 5.1 6.9A1 1 0 103.7 8.3l6.9 6.9L3.7 22a1 1 0 101.4 1.4L12 16.6l6.9 6.8a1 1 0 001.4-1.4L13.4 14l6.9-6.7z" />
  </svg>
);

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
              <IconLinkedIn />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              className="flex items-center gap-2 text-neutral-300 hover:text-white hover:scale-112 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/abhaydesu/"
              aria-label="GitHub"
            >
              <IconGitHub />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              className="flex items-center gap-2 text-neutral-300 hover:text-white hover:scale-112 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/abhaydesu"
              aria-label="X / Twitter"
            >
              <IconX />
              <span className="sr-only">X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
