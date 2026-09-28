"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string; dot?: string };

const groups: { title: string; items: Item[] }[] = [
  {
    title: "Guide",
    items: [
      { id: "how-it-works", label: "How it works" },
      { id: "installation", label: "Installation" },
    ],
  },
  {
    title: "Commands",
    items: [
      { id: "usage-commit", label: "commit", dot: "bg-commit" },
      { id: "usage-run", label: "run", dot: "bg-run" },
      { id: "usage-branch", label: "branch", dot: "bg-branch" },
      { id: "usage-undo", label: "undo", dot: "bg-undo" },
    ],
  },
];

export const DocsSidebar = () => {
  const [active, setActive] = useState<string>(groups[0].items[0].id);

  // Highlight the section currently crossing the top third of the viewport.
  useEffect(() => {
    const ids = groups.flatMap((g) => g.items.map((i) => i.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto py-2">
      <nav aria-label="Documentation" className="space-y-9">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-[13px] font-semibold text-ink/45">{group.title}</h3>
            <ul className="space-y-0.5">
              {group.items.map(({ id, label, dot }) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={`focus-ring -ml-3 flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-[15px] transition-colors duration-150 ease-out-strong ${
                        isActive ? "bg-ink/[0.06] text-ink" : "text-ink/55 hover:text-ink"
                      } ${dot ? "font-mono text-[14px]" : ""}`}
                    >
                      {dot && <span aria-hidden className={`size-2 rounded-full ${dot}`} />}
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
