'use client';

import React, { useState } from 'react';

type CodeBlockProps = {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
  copyable?: boolean;
  copyLabel?: string;
};

export default function CodeBlock({
  children,
  className = '',
  inline = true,
  copyable = true,
  copyLabel = 'Copy code',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      let text = '';
      if (typeof children === 'string') text = children;
      else {
        const container = document.createElement('div');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        container.appendChild((children as any) as Node);
        text = container.textContent ?? '';
      }

      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error('copy failed', err);
    }
  };

  const base = [
    inline ? 'inline-flex' : 'flex',
    'items-center',
    'gap-3',
    'bg-[var(--color-surface)]',
    'border',
    'border-[var(--color-border)]',
    'rounded-md',
    'py-3',
    'px-5',
    'font-mono',
    'text-base',
  ].join(' ');

  return (
    <div className={`${base} ${className}`.trim()}>
      <div className="flex-1 break-words">
        {typeof children === 'string' ? (
          <code className="whitespace-pre-wrap">{children}</code>
        ) : (
          children
        )}
      </div>

      {copyable && (
        <button
          type="button"
          aria-label={copyLabel}
          onClick={handleCopy}
          className="inline-flex items-center justify-center text-lime-200 rounded-md px-1 py-1 text-sm transition-opacity duration-150 hover:opacity-90"
        >
          {copied ? (
            <span className="select-none">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
            </span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 2a2 2 0 00-2 2v1H5a2 2 0 00-2 2v7a2 2 0 002 2h7a2 2 0 002-2v-1h1a2 2 0 002-2V6a2 2 0 00-2-2H8zM7 4a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-1V7a2 2 0 00-2-2H7V4z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
