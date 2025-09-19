// components/Terminal.tsx
'use client';

import React from 'react';

type TerminalProps = {
  title?: string;
  lines: { prompt?: string; output?: string }[];
  className?: string;
};

export default function Terminal({
  title = 'bash',
  lines,
  className = '',
}: TerminalProps) {
  return (
    <div
      className={`max-w-2xl ml-10 mx-auto bg-[#1E1E1E]  rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div className="bg-[#2D2D2D] px-3 py-2 rounded-t-lg flex items-center relative">
        {/* Buttons */}
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        {/* Title */}
        <div className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-400">
          {title}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 font-mono mt-5 text-sm    leading-relaxed">
        {lines.map((line, idx) => (
          <p key={idx} className='my-1 '>
            {line.prompt && (
              <span className="text-lime-100">{line.prompt} </span>
            )}
            {line.output && (
              <span className="text-neutral-100">{line.output}</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
