// app/components/Features.tsx
import React from "react";
import { Scales } from "./Scales";
import { Supercharge } from "./Supercharge";
import BentoGridThirdDemo from "./Bento";
import { Box, GitBranch, Sparkle } from "lucide-react";

export const Features = () => {
  return (
    <>
      <section
        className="bg-neutral-950 py-20 px-4 mx-4 md:mx-10 mt-10 sm:px-6 lg:px-8 
                   relative [--pattern-fg:var(--color-neutral-800)] border-y border-neutral-800"
      >
        <Scales />
        <Supercharge />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8">
          
          {/* Bento Grid container (Takes 3 columns on LG) */}
          <div className="lg:col-span-3 mt-5">
            <BentoGridThirdDemo />
          </div>

          {/* Feature Cards container (Takes 2 columns on LG) */}
          <div className="lg:col-span-2 mt-5">
            <div className="flex flex-col space-y-5">
              
              {/* Card 1 */}
              <div className="bg-neutral-900 p-2 group group">
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl py-4 px-6">
                  <div className="w-fit rounded-lg py-3 group-hover:scale-105 transition-all duration-300 group-hover:-rotate-6">
                    <GitBranch height={25} width={25} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-black text-xl dark:text-white">
                      End Git Friction
                    </h3>
                    <h2 className="dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold mb-2 group-hover:ml-1 transition-all duration-300 ease-out">
                      Stop memorizing commands and writing commit messages.{" "}
                    </h2>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-neutral-900 p-2 group">
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl py-4 px-6">
                  <div className="w-fit rounded-lg py-3 group-hover:scale-105 transition-all duration-300 group-hover:rotate-6">
                    <Sparkle height={25} width={25} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-black text-xl dark:text-white">
                      Powered by Gemini
                    </h3>
                    <h2 className="dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold mb-2 group-hover:ml-1 transition-all duration-300 ease-out">
                      Git Pilot&apos;s intelligence is driven by Google&apos;s
                      Gemini. The API understands your code changes...
                    </h2>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-neutral-900 p-2 group">
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl py-4 px-6">
                  <div className="w-fit rounded-lg py-3 group-hover:scale-105 transition-all duration-300 group-hover:-rotate-6">
                    <Box height={25} width={25} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-black text-xl dark:text-white">
                      Get Started in Seconds
                    </h3>
                    <h2 className="dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold mb-2 group-hover:ml-1 transition-all duration-3D00 ease-out">
                      It&apos;s free, open-source, and ready to upgrade your
                      workflow.
                    </h2>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};