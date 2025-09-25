"use client";

import { GlowingEffect } from "./ui/glowing-effect";
import { Box, CheckCircle, GitBranch, KeyIcon, Sparkles } from "lucide-react";


export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 mt-90 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 max-w-4xl mx-auto">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<GitBranch className="h-4 w-4 text-black dark:text-lime-200" />}
        title="End Git Friction"
        description="Stop memorizing commands and writing commit messages."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<CheckCircle className="h-4 w-4 text-black dark:text-lime-200" />}
        title="Your Safety Net"
        description="We handle complex tasks so you can code with confidence."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-lime-200" />}
        title="Powered by Gemini"
        description="Git Pilot's intelligence is driven by Google's Gemini. The API understands the nuances of your code changes which allows it to provide suggestions that are remarkably accurate and feel like they were written by a human expert."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]"
        icon={<Box className="h-4 w-4 text-black dark:text-lime-200" />}
        title="Get Started in Seconds"
        description="It's free, open-source, and ready to upgrade your workflow."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]"
        icon={<KeyIcon className="h-4 w-4 text-black dark:text-lime-200" />}
        title="Safe and Interactive"
        description="We never run a command without your approval. You can review, edit, or cancel any suggestion."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border backdrop-blur-sm p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
