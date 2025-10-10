// app/components/DocsSidebar.tsx

import Link from 'next/link';

export const DocsSidebar = () => {
  return (
    <aside className="sticky top-50 h-[calc(100vh-7rem)] w-64 pr-8 text-sm">
      <nav className="flex flex-col space-y-4">
        <div>
          <h3 className="mb-2 font-semibold text-xl text-neutral-100">guide</h3>
          <ul className="space-y-2">
            <li><Link href="#how-it-works" className="text-xs text-neutral-300 hover:text-lime-200">How It Works</Link></li>
            <li><Link href="#installation" className="text-xs text-neutral-300 hover:text-lime-200">Installation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl text-neutral-100">commands</h3>
          <ul className="space-y-2">
            <li><Link href="#usage-commit" className="text-xs text-neutral-300 hover:text-lime-200">git pilot commit</Link></li>
            <li><Link href="#usage-run" className="text-xs text-neutral-300 hover:text-lime-200">git pilot run</Link></li>
            <li><Link href="#usage-branch" className="text-xs text-neutral-300 hover:text-lime-200">git pilot branch</Link></li>
            <li><Link href="#usage-undo" className="text-xs text-neutral-300 hover:text-lime-200">git pilot undo</Link></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};