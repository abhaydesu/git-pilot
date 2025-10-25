'use client';

import { Check, Copy } from 'lucide-react';
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
          className="absolute top-3 right-3 p-1.5 bg-neutral-800 rounded-md text-neutral-400 hover:text-white cursor-pointer hover:bg-neutral-700 transition-all duration-300"
          aria-label="Copy code"
        >
          {copied ? (
            <Check height={16} width={16}/>
          ) : (
            <Copy height={16} width={16} />
          )}
        </button>
      )}
    </div>
  );
};