"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Tone = "dim" | "plain" | "ok" | "strong" | "select";
type Line = { text: string; tone?: Tone };
type Scenario = { id: string; tab: string; command: string; output: Line[] };

const scenarios: Scenario[] = [
  {
    id: "commit",
    tab: "commit",
    command: 'git pilot commit "add user authentication"',
    output: [
      { text: "✔ Reading staged changes", tone: "ok" },
      { text: "✔ Drafting a conventional commit", tone: "ok" },
      { text: "" },
      { text: "feat(auth): add user authentication", tone: "strong" },
      { text: "" },
      { text: "What would you like to do?", tone: "dim" },
      { text: " Accept ", tone: "select" },
      { text: "✔ Committed", tone: "ok" },
    ],
  },
  {
    id: "run",
    tab: "run",
    command: 'git pilot run "squash the last 3 commits into one"',
    output: [
      { text: "✔ Translating your request", tone: "ok" },
      { text: "" },
      { text: "------- Suggested Command -------", tone: "dim" },
      { text: "  git rebase -i HEAD~3", tone: "strong" },
      { text: "---------------------------------", tone: "dim" },
      { text: "" },
      { text: "Nothing runs until you confirm.", tone: "dim" },
    ],
  },
  {
    id: "branch",
    tab: "branch",
    command: 'git pilot branch "add oauth login"',
    output: [
      { text: "✔ Generating a conventional branch name", tone: "ok" },
      { text: "" },
      { text: "--- Suggested Branch Name ---", tone: "dim" },
      { text: "feature/add-oauth-login", tone: "strong" },
      { text: "-----------------------------", tone: "dim" },
      { text: "" },
      { text: " Accept ", tone: "select" },
      { text: '✔ Switched to new branch "feature/add-oauth-login"', tone: "ok" },
    ],
  },
  {
    id: "undo",
    tab: "undo",
    command: "git pilot undo",
    output: [
      { text: "✔ Reading your reflog", tone: "ok" },
      { text: "Last action: commit 3f2a1c9 “wip”", tone: "plain" },
      { text: "" },
      { text: "------- Suggested Command -------", tone: "dim" },
      { text: "  git reset --soft HEAD~1", tone: "strong" },
      { text: "---------------------------------", tone: "dim" },
      { text: "" },
      { text: "Your changes stay staged.", tone: "dim" },
    ],
  },
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const toneClass: Record<Tone, string> = {
  dim: "text-paper/40",
  plain: "text-paper/75",
  ok: "text-paper/55",
  strong: "text-paper",
  select: "",
};

const TYPE_MS = 28;
const LINE_MS = 280;
const HOLD_MS = 4200;

export const TerminalDemo = () => {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);
  const [typed, setTyped] = useState(0);
  const [shown, setShown] = useState(0);

  const scenario = scenarios[idx];
  const cmdLen = scenario.command.length;
  const outLen = scenario.output.length;

  useEffect(() => {
    if (reduce) {
      setTyped(cmdLen);
      setShown(outLen);
      return;
    }
    setTyped(0);
    setShown(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 400;
    for (let i = 1; i <= cmdLen; i++) {
      timers.push(setTimeout(() => setTyped(i), t + i * TYPE_MS));
    }
    t += cmdLen * TYPE_MS + 350;
    for (let j = 1; j <= outLen; j++) {
      timers.push(setTimeout(() => setShown(j), t + j * LINE_MS));
    }
    t += outLen * LINE_MS;
    if (auto) {
      timers.push(
        setTimeout(() => setIdx((i) => (i + 1) % scenarios.length), t + HOLD_MS),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, [idx, auto, reduce, cmdLen, outLen]);

  const typing = typed < cmdLen;

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Git Pilot commands"
        className="mx-auto mb-5 flex w-fit gap-1 rounded-full bg-paper p-1 font-mono text-xs shadow-[0_1px_0_rgba(22,20,15,0.04),0_0_0_1px_rgba(22,20,15,0.06)]"
      >
        {scenarios.map((s, i) => {
          const active = i === idx;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={active}
              onClick={() => {
                setAuto(false);
                setIdx(i);
              }}
              className={`press focus-ring relative rounded-full px-3.5 py-1.5 ${
                active ? "text-paper" : "text-ink/55 hover:text-ink"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="demo-tab"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                />
              )}
              <span className="relative">{s.tab}</span>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-2xl bg-ink shadow-[0_50px_100px_-50px_rgba(23,32,46,0.6),0_20px_40px_-30px_rgba(23,32,46,0.4)]">
        <div className="flex items-center gap-2 border-b border-paper/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="ml-3 font-mono text-xs text-paper/35">
            ~/my-project
          </span>
        </div>

        <div
          role="tabpanel"
          aria-live="off"
          className="h-[19rem] overflow-hidden px-5 py-5 font-mono text-[13px] leading-6 sm:h-[17rem] sm:text-sm"
        >
          <p className="break-words text-paper">
            <span className="mr-2 text-accent">$</span>
            {scenario.command.slice(0, typed)}
            {(typing || shown === 0) && (
              <span className="ml-px inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
            )}
          </p>

          {scenario.output.slice(0, shown).map((line, i) => (
            <motion.p
              key={`${scenario.id}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className={`min-h-6 whitespace-pre-wrap break-words ${toneClass[line.tone ?? "plain"]}`}
            >
              {line.tone === "select" ? (
                <>
                  <span className="mr-2 text-accent">❯</span>
                  <span className="rounded-sm bg-accent px-1.5 font-medium text-ink">
                    {line.text.trim()}
                  </span>
                </>
              ) : (
                line.text
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalDemo;
