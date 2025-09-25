'use client';

import React, { useState } from 'react';

interface DocsCodeBlockProps {
  children: React.ReactNode;
  copyable?: boolean;
}

export const DocsCodeBlock = ({ children, copyable = false }: DocsCodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative my-6">
      <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 pr-12 overflow-x-auto">
        <code className="font-mono text-sm text-neutral-200">
          {children}
        </code>
      </pre>
      {copyable && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 bg-neutral-800 rounded-md text-neutral-400 hover:text-lime-300 cursor-pointer hover:bg-neutral-700 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-lime-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M10 14h-1a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v1" />
            <path d="M13 10l-1 -1l1 -1" />
            <path d="M16 7l1 1l-1 1" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};