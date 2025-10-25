"use client";

import React from "react";
import { GlowingEffect } from "./ui/glowing-effect";
import { Box, CheckCircle, GitBranch, KeyIcon, Sparkles } from "lucide-react";

/**
 * FeaturesSection
 * - Converted from a Bento grid into a simple, responsive feature section
 * - UI rewritten to match the project's retro-tech, monospace, neon-accent aesthetic
 * - Content preserved from original (titles + descriptions + icons)
 *
 * Drop this in place of the bento usage — it sits well between the hero and faq/footer.
 */

const FEATURES = [
  {
    id: "friction",
    icon: <GitBranch className="h-5 w-5" />,
    title: "End Git Friction",
    description: "Stop memorizing commands and writing commit messages.",
  },
  {
    id: "safety",
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Your Safety Net",
    description: "We handle complex tasks so you can code with confidence.",
  },
  {
    id: "powered",
    icon: <Sparkles className="h-5 w-5" />,
    title: "Powered by Gemini",
    description:
      "Git Pilot's intelligence is driven by Google's Gemini. The API understands the nuances of your code changes which allows it to provide suggestions that are remarkably accurate and feel like they were written by a human expert.",
  },
  {
    id: "get-started",
    icon: <Box className="h-5 w-5" />,
    title: "Get Started in Seconds",
    description: "It's free, open-source, and ready to upgrade your workflow.",
  },
  {
    id: "safe",
    icon: <KeyIcon className="h-5 w-5" />,
    title: "Safe and Interactive",
    description:
      "We never run a command without your approval. You can review, edit, or cancel any suggestion.",
  },
];

export function FeaturesSection(): JSX.Element {
  return (
    <section
      id="features"
      className="w-full px-6 py-20 bg-transparent"
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            id="features-title"
            className="font-mono text-4xl md:text-5xl font-extrabold text-neutral-100"
            style={{ letterSpacing: "-0.02em" }}
          >
            Features
          </h2>
          <p className="mt-2 text-sm text-neutral-400 font-mono max-w-2xl mx-auto">
            What Git Pilot brings to your workflow — bold, fast, and privacy-first.
          </p>
        </div>

        {/* Features list: stacked on mobile, 2-column on md, 3-col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, idx) => (
            <article
              key={f.id}
              className="relative group rounded-2xl overflow-hidden border border-neutral-800
                         bg-gradient-to-b from-neutral-900/85 to-neutral-900/75 p-4"
              aria-labelledby={`feature-${f.id}`}
            >
              {/* subtle glow layer (uses GlowingEffect UI, kept inline with design) */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <GlowingEffect
                  blur={8}
                  borderWidth={2}
                  spread={60}
                  glow={true}
                  disabled={false}
                  proximity={48}
                  inactiveZone={0.02}
                />
              </div>

              {/* Badge + title row */}
              <header className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0
                             bg-gradient-to-br from-[#00D4FF] via-[#6E00FF] to-[#FF5EC4]
                             shadow-[0_10px_30px_rgba(110,0,255,0.12)]"
                  aria-hidden
                >
                  <span className="text-black">{/* icon container */ f.icon}</span>
                </div>

                <div className="min-w-0">
                  <h3
                    id={`feature-${f.id}`}
                    className="font-mono text-lg md:text-xl font-semibold text-neutral-100"
                  >
                    {f.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-neutral-400 font-mono">
                    {f.description}
                  </p>
                </div>
              </header>

              {/* decorative ASCII motif + CTA area */}
              <div className="mt-4 flex items-center justify-between">
                <div className="font-mono text-xs text-neutral-500 select-none">
                  {/* Echo hero ASCII but subtle — ties visuals together */}
                  ~ . _ : - ~ = + * # % @
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm font-semibold
                               bg-neutral-800/60 border border-neutral-700 hover:bg-neutral-800/40 transition"
                    aria-label={`Learn more about ${f.title}`}
                  >
                    Learn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.584 10 10.29 6.707a1 1 0 010-1.414z" />
                      <path d="M3 10a1 1 0 011-1h9a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </button>
                  <span className="text-xs text-neutral-500 font-mono">v1.0</span>
                </div>
              </div>

              {/* bottom accent line */}
              <div
                className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
