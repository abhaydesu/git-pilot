"use client";

import React from "react";
import { cn } from "@/lib/utils";
import CopyButton from "./ui/CopyButton";

type CodeBlockProps = {
  children: string;
  className?: string;
  /** dark: the primary action (inverts with the theme). light: a fixed light pill for the dark footer. */
  tone?: "dark" | "light";
  copyLabel?: string;
};

/** The install command as a pill. For a CLI, installing *is* the primary CTA. */
export default function CodeBlock({
  children,
  className = "",
  tone = "dark",
  copyLabel = "Copy install command",
}: CodeBlockProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-1 rounded-full py-1.5 pl-5 pr-1.5 font-mono text-[13px] sm:text-sm",
        dark ? "bg-ink text-paper" : "bg-snow text-night",
        className,
      )}
    >
      <span aria-hidden className={dark ? "text-accent dark:text-accent-deep" : "text-accent-deep"}>
        $
      </span>
      <code className="ml-1 flex-1 overflow-x-auto whitespace-nowrap">{children}</code>
      <CopyButton
        text={children}
        label={copyLabel}
        className={
          dark
            ? "text-paper/60 hover:bg-paper/10 hover:text-paper"
            : "text-night/50 hover:bg-night/5 hover:text-night"
        }
      />
    </div>
  );
}
