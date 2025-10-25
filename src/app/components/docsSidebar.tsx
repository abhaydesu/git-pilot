// app/components/DocsSidebar.tsx
"use client"; // <-- Add this to make it a Client Component

import Link from "next/link"; // We keep Link for any potential *future* page links

export const DocsSidebar = () => {
  // This function handles the smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Stop the default browser "jump"

    // Get the target ID from the link's href (e.g., "#how-it-works")
    const targetId = e.currentTarget.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // The browser will automatically account for the 'scroll-mt-48'
      // class on your target sections in page.tsx,
      // so we just need to tell it to scroll smoothly.
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    // Position sticky to account for navbar (h-20) + top padding (pt-16)
    <aside className="sticky top-36 h-[calc(100vh-9rem)] py-16">
      <nav className="flex flex-col space-y-8 border-l border-neutral-800 pl-6">
        <div>
          <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-neutral-200">
            Guide
          </h3>
          <ul className="space-y-3">
            <li>
              {/* Use <a> tags for on-page scrolling */}
              <a
                href="#how-it-works"
                onClick={handleSmoothScroll}
                className="font-mono text-base text-neutral-400 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#installation"
                onClick={handleSmoothScroll}
                className="font-mono text-base text-neutral-400 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                Installation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-neutral-200">
            Commands
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#usage-commit"
                onClick={handleSmoothScroll}
                className="font-mono text-base text-neutral-400 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                git pilot commit
              </a>
            </li>
            <li>
              <a
                href="#usage-run"
                onClick={handleSmoothScroll}
                className="font-mono text-base text-neutral-400 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                git pilot run
              </a>
            </li>
            <li>
              <a
                href="#usage-branch"
                onClick={handleSmoothScroll}
                className="font-mono text-base text-neutral-400 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                git pilot branch
              </a>
            </li>
            <li>
              <a
                href="#usage-undo"
                onClick={handleSmoothScroll}
                className="font-mono text-base text-neutral-400 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                git pilot undo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};