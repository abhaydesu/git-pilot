import React from "react";
import CopyButton from "./ui/CopyButton";

interface DocsCodeBlockProps {
  children: React.ReactNode;
  copyable?: boolean;
}

export const DocsCodeBlock = ({
  children,
  copyable = false,
}: DocsCodeBlockProps) => (
  <div className="relative my-5">
    <pre
      className={`overflow-x-auto rounded-xl bg-paper p-5 ring-soft ${copyable ? "pr-14" : ""}`}
    >
      <code className="font-mono text-[13px] leading-relaxed text-ink sm:text-sm">
        {children}
      </code>
    </pre>
    {copyable && typeof children === "string" && (
      <CopyButton
        text={children}
        label="Copy code"
        className="absolute right-2.5 top-2.5"
      />
    )}
  </div>
);
