"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  text: string;
  label?: string;
  className?: string;
};

// Icon swap: both icons stay mounted and cross-fade with scale + blur,
// so the change reads as one object transforming rather than two popping.
const iconBase =
  "col-start-1 row-start-1 h-4 w-4 transition-[opacity,transform,filter] duration-200 ease-out-strong";
const shown = "opacity-100 scale-100 blur-0";
const hidden = "opacity-0 scale-[0.25] blur-[4px]";

export const CopyButton = ({
  text,
  label = "Copy to clipboard",
  className = "",
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: stay silent */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : label}
      className={cn(
        "press focus-ring grid size-9 place-items-center rounded-full text-ink/50 hover:bg-ink/5 hover:text-ink",
        className,
      )}
    >
      <Copy aria-hidden className={`${iconBase} ${copied ? hidden : shown}`} />
      <Check aria-hidden className={`${iconBase} ${copied ? shown : hidden}`} />
    </button>
  );
};

export default CopyButton;
