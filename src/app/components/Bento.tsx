"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrids";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { motion } from "motion/react";

/**
 * BentoGridThirdDemo
 * - kept layout & grid behavior the same
 * - refreshed each card's UI to match the project's retro-tech, monospace, neon-accent aesthetic
 * - removed any external references/images; all content now refers only to Git Pilot
 */

export function BentoGridThirdDemo() {
  return (
    // REMOVED: col-span-3, mt-5, mx-auto
    // ADDED: w-full (was already present, but important)
    <div className="bg-neutral-900 p-2 w-full max-w-4xl">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

/* =========================
   Reworked Skeletons (no external images)
   - all visuals now follow the project's dark / mono / neon look
   ========================= */

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 8, rotate: 3, transition: { duration: 0.22 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -8, rotate: -3, transition: { duration: 0.22 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-b from-neutral-900/40 to-neutral-900/20 rounded-lg p-2 flex-col gap-3"
    >
      <motion.div
        variants={variants}
        className="flex items-center gap-3 rounded-full border border-neutral-800 p-2 bg-neutral-950/60"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#fafafa] to-[#737373] shadow-sm" />
        <div className="h-3 w-full rounded-sm bg-neutral-800/60 font-mono" />
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex items-center gap-3 rounded-full border border-neutral-800 p-2 justify-end bg-neutral-950/60"
      >
        <div className="h-3 w-2/3 rounded-sm bg-neutral-800/60" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#e5e5e5] to-[#404040] shadow-sm" />
      </motion.div>

      <motion.div
        variants={variants}
        className="flex items-center gap-3 rounded-full border border-neutral-800 p-2 bg-neutral-950/60"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[##a3a3a3] to-[#171717] shadow-sm" />
        <div className="h-3 w-full rounded-sm bg-neutral-800/60" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.18 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-900/30 rounded-lg p-3 flex-col gap-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two-" + i}
          variants={variants}
          style={{
            maxWidth: `${Math.round(Math.random() * (100 - 40) + 40)}%`,
          }}
          className="h-3 rounded-full bg-gradient-to-r from-neutral-800/60 to-neutral-700/40 border border-neutral-800"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, rgba(82, 82, 82, 0.624), rgba(64, 64, 64, 0.624), rgba(38, 38, 38, 0.624), rgba(23, 23, 23, 0.624))",
        backgroundSize: "400% 400%",
        border: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <div className="flex-1 p-3" />
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 16, rotate: -4 },
    hover: { x: 0, rotate: 0, transition: { duration: 0.25 } },
  };
  const second = {
    initial: { x: -16, rotate: 4 },
    hover: { x: 0, rotate: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] gap-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-neutral-950/60 border border-neutral-800 p-4 flex flex-col items-center justify-center"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#fafafa] to-[#e5e5e5]" />
        <p className="mt-3 text-xs font-mono text-neutral-400 text-center">
          AI powered analysis
        </p>
        <span className="mt-3 inline-block text-xs px-2 py-1 rounded-full bg-neutral-800/50 font-mono">
          fast
        </span>
      </motion.div>

      <div className="h-full w-1/3 relative z-10 rounded-2xl bg-neutral-930/60 border border-neutral-800 p-4 flex flex-col items-center justify-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#a3a3a3] to-[#525252]" />
        <p className="mt-3 text-xs font-mono text-neutral-400 text-center">
          Natural language git
        </p>
        <span className="mt-3 inline-block text-xs px-2 py-1 rounded-full bg-neutral-800/50 font-mono">
          precise
        </span>
      </div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-neutral-950/60 border border-neutral-800 p-4 flex flex-col items-center justify-center"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#262626] to-[#0a0a0a]" />
        <p className="mt-3 text-xs font-mono text-neutral-400 text-center">
          Commit message crafting
        </p>
        <span className="mt-3 inline-block text-xs px-2 py-1 rounded-full bg-neutral-800/50 font-mono">
          consistent
        </span>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 8, rotate: 3, transition: { duration: 0.22 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -8, rotate: -3, transition: { duration: 0.22 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] gap-2 flex-col"
    >
      <motion.div
        variants={variants}
        className="flex items-start gap-3 rounded-2xl border border-neutral-800 p-3 bg-neutral-950/60"
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#d4d4d4] to-[#737373]" />
        <p className="text-xs text-neutral-400 font-mono">
          Summarizes very large diffs into concise, readable summaries that
          fit within limits.
        </p>
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex items-center justify-end gap-3 ml-auto rounded-full border border-neutral-800 p-2 bg-neutral-950/60 w-3/4"
      >
        <p className="text-xs text-neutral-400 font-mono">smart truncation</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#404040] to-[#171717]" />
      </motion.div>
    </motion.div>
  );
};

/* =========================
   Grid items (content)
   - All text mentions only Git Pilot
   - No external project/person references
   ========================= */

const items = [
  {
    title: "AI-Powered Commits",
    description: (
      <span className="text-sm font-mono text-neutral-300">
        Git Pilot analyzes staged changes and drafts conventional, context-aware
        commit messages that fit your repo&apos;s style.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Magic Undo",
    description: (
      <span className="text-sm font-mono text-neutral-300">
        Recover safely: `git pilot undo` suggests the cleanest command sequence
        to revert recent actions.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Intelligent Branching",
    description: (
      <span className="text-sm font-mono text-neutral-300">
        Describe a feature in plain text and Git Pilot proposes a tidy, readable
        branch name following conventions.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Natural Language Commands",
    description: (
      <span className="text-sm font-mono text-neutral-300">
        Translate plain English like “squash last 3 commits” into the exact Git
        commands you need — without guessing.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Large Diff Summaries",
    description: (
      <span className="text-sm font-mono text-neutral-300">
        For big commits, Git Pilot summarizes changes into compact, readable
        fragments suitable for commit messages or review notes.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-400" />,
  },
];

export default BentoGridThirdDemo;
