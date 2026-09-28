import { Check } from "lucide-react";
import Reveal from "./ui/Reveal";

type Line = { text: string; tone?: "dim" | "strong" | "prompt" | "pick" };

/** A light product shot: the terminal as it reads in a real session. */
const Shot = ({ lines }: { lines: Line[] }) => (
  <div className="rounded-3xl bg-paper p-3 ring-soft">
    <div className="rounded-2xl bg-cream/70 px-5 py-6 font-mono text-[13px] leading-[1.9] sm:px-7 sm:text-[13.5px]">
      {lines.map((l, i) => (
        <p
          key={i}
          className={`min-h-[1.9em] whitespace-pre-wrap ${
            l.tone === "dim"
              ? "text-ink/40"
              : l.tone === "strong"
                ? "font-medium text-ink"
                : "text-ink/70"
          }`}
        >
          {l.tone === "prompt" && <span className="mr-2 text-accent-ink">$</span>}
          {l.tone === "pick" ? (
            <>
              <span className="mr-2 text-accent-ink">❯</span>
              <span className="rounded bg-ink px-1.5 py-0.5 text-paper">{l.text}</span>
            </>
          ) : (
            l.text
          )}
        </p>
      ))}
    </div>
  </div>
);

const rows = [
  {
    label: "Commit",
    labelClass: "text-commit-ink",
    title: ["Commits that write themselves.", "Conventional, every time."],
    body: "Git Pilot reads your staged changes and drafts a message that follows the Conventional Commits spec. Clean history, free changelogs.",
    checks: ["Reads your staged diff", "Or takes your intent in quotes", "Accept, edit or abort"],
    lines: [
      { text: "git pilot commit", tone: "prompt" },
      { text: "✔ Reading staged changes", tone: "dim" },
      { text: "" },
      { text: "feat(auth): add user authentication", tone: "strong" },
      { text: "" },
      { text: "Accept", tone: "pick" },
    ] as Line[],
  },
  {
    label: "Run",
    labelClass: "text-run-ink",
    title: ["Ask for what you want.", "Get the exact command."],
    body: "Stop searching for the right flag. Describe the outcome in plain English and Git Pilot answers with one precise command, displayed before it executes.",
    checks: ["Plain English in", "One precise command out", "Nothing runs without you"],
    lines: [
      { text: 'git pilot run "squash the last 3 commits"', tone: "prompt" },
      { text: "" },
      { text: "Suggested command", tone: "dim" },
      { text: "git rebase -i HEAD~3", tone: "strong" },
      { text: "" },
      { text: "Run it", tone: "pick" },
    ] as Line[],
  },
  {
    label: "Undo",
    labelClass: "text-undo-ink",
    title: ["Made a mess?", "Take it back, safely."],
    body: "The safety net. Git Pilot reads your reflog and suggests the safest way to reverse your last significant action: a bad commit, a merge or a rebase.",
    checks: ["Reads your reflog", "Suggests the safest reversal", "Commits, merges and rebases"],
    lines: [
      { text: "git pilot undo", tone: "prompt" },
      { text: "Last action: commit 3f2a1c9 “wip”", tone: "dim" },
      { text: "" },
      { text: "git reset --soft HEAD~1", tone: "strong" },
      { text: "Your changes stay staged.", tone: "dim" },
      { text: "Accept", tone: "pick" },
    ] as Line[],
  },
];

export const FeatureRows = () => (
  <section className="px-5">
    <div className="mx-auto max-w-[1120px] divide-y divide-ink/10 border-y border-ink/10">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className="grid items-center gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32"
        >
          <Reveal className={i % 2 ? "md:order-2" : ""}>
            <p className={`text-[14px] font-semibold ${r.labelClass}`}>{r.label}</p>
            <h2 className="t-section mt-4 text-[clamp(2rem,3.6vw,2.75rem)] text-ink">
              {r.title[0]}
              <br />
              {r.title[1]}
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-[1.6] text-ink/60">{r.body}</p>
            <ul className="mt-7 space-y-2.5">
              {r.checks.map((c) => (
                <li key={c} className={`flex items-center gap-2.5 text-[15px] font-medium ${r.labelClass}`}>
                  <Check aria-hidden strokeWidth={2.5} className="size-4" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className={i % 2 ? "md:order-1" : ""}>
            <Shot lines={r.lines} />
          </Reveal>
        </div>
      ))}
    </div>
  </section>
);
