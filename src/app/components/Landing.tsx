"use client";

import React, { useEffect, useState } from "react";
import AsciiArtBackground from "./ui/AsciiiBackground";
import Heading from "./Heading";
import CodeBlock from "./code-block";
import Link from "next/link";
import { ChevronsRight, Dot } from "lucide-react";

export const Landing: React.FC = () => {
  // Responsive props for the Ascii background.
  // Keep desktop (md and above) identical to original values.
  const [rowHeight, setRowHeight] = useState<number>(12);
  const [ramp, setRamp] = useState<string>(" ._:-~=+*#%@");
  const [speed, setSpeed] = useState<number>(0.2);
  const [contrast, setContrast] = useState<number>(1.0);

  useEffect(() => {
    // Only run in browser
    const handleResize = () => {
      const w = window.innerWidth;
      // Tailwind md breakpoint is 768px — keep md+ behavior identical
      if (w < 640) {
        // small phones: denser ascii, slightly faster for motion feel
        setRowHeight(8);
        setRamp(" .:-=+*#%");
        setSpeed(0.28);
        setContrast(0.95);
      } else if (w < 768) {
        // small tablets / large phones
        setRowHeight(10);
        setRamp(" ._:-~=+*#%@");
        setSpeed(0.22);
        setContrast(0.98);
      } else {
        // md and above — original values (no visual change on desktop)
        setRowHeight(12);
        setRamp(" ._:-~=+*#%@");
        setSpeed(0.2);
        setContrast(1.0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen border-b border-neutral-800">
      <div
        className="absolute inset-0 z-0 m-auto border border-neutral-800 pointer-events-none"
        style={{
          width: "96%",
          height: "93%",
          position: "absolute",
          opacity: 0.4,
        }}
        aria-hidden
      >
        <AsciiArtBackground
          rowHeight={rowHeight}
          ramp={ramp} // characters from light -> dark
          speed={speed}
          contrast={contrast}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-start justify-center">
        <div
          className="mt-60 w-full max-w-3xl mx-4 md:mx-auto
                     rounded-4xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6 md:p-10 shadow-2xl"
          role="region"
          aria-label="Hero"
        >
          <Heading>
            <h1 className="mx-auto max-w-2xl text-center font-semibold font-array">
              Git Pilot
            </h1>
          </Heading>

          <h2 className="mt-4 text-center text-2xl md:text-3xl">
            Your AI git assistant for the command line.
          </h2>
{/* 
          <div className="mt-0">
            <Subheading />
          </div> */}

          <div className="flex justify-center">
            <CodeBlock className="mx-auto mt-16 text-center text-xs md:text-md">
              npm install -g @abhaydesu/git-pilot
            </CodeBlock>
          </div>

          <div className="text-center flex flex-row justify-center items-center gap-2 text-neutral-600 mt-6 text-sm md:text-md">
            <a className="hover:text-neutral-300 hover:scale-102 transition-all duration-300" target="_blank" href="https://www.npmjs.com/package/@abhaydesu/git-pilot">npm</a> 
            <span>
                <Dot className="inline" />
            </span>
            <a className="hover:text-neutral-300 hover:scale-102 transition-all duration-300" target="_blank" href="https://github.com/abhaydesu/git-pilot-cli">github</a>
          </div>

          <div className="mx-auto text-center  mt-6 text-md md:text-xl">
            <div>
              Get started with{" "}
              <Link
                href="/docs"
                className="text-neutral-100  hover:text-neutral-400"
              >
                docs
                <ChevronsRight className="inline ml-2" height={20} width={20} />
              </Link>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};
