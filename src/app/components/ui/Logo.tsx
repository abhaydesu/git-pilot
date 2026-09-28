import React from "react";

/** The original Array wordmark, finished with a terminal cursor block. */
export const Logo = ({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) => (
  <span
    className={`inline-flex items-center font-wordmark text-[22px] leading-none ${tone === "ink" ? "text-ink" : "text-snow"} ${className}`}
  >
    Git Pilot
    <span aria-hidden className="ml-1.5 inline-block h-[0.78em] w-[0.42em] bg-accent" />
  </span>
);

export default Logo;
