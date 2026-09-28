import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CodeBlock from "./code-block";
import Reveal from "./ui/Reveal";
import TerminalDemo from "./ui/TerminalDemo";

export const Landing = () => (
  <section className="px-5 pb-28 pt-40 md:pb-36 md:pt-52">
    <div className="mx-auto max-w-[1120px] text-center">
      <Reveal>
        <h1 className="t-display text-[clamp(3.25rem,8.2vw,6.25rem)] text-ink">
          Git, in plain English.
        </h1>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="mx-auto mt-7 max-w-[33rem] text-[17px] leading-[1.6] text-ink/65 md:text-lg">
          Git Pilot turns a sentence into the right commit, branch name or
          command, then waits for your OK before anything runs.
        </p>
      </Reveal>

      <Reveal
        delay={0.12}
        className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
      >
        <CodeBlock>npm i -g @abhaydesu/git-pilot</CodeBlock>
        <Link
          href="/docs"
          className="press focus-ring group inline-flex items-center gap-2 rounded-full px-2 py-2 text-[15px] text-ink/80 hover:text-ink"
        >
          Read the docs
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5"
          />
        </Link>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-24 max-w-[860px] text-left">
        <TerminalDemo />
      </Reveal>
    </div>
  </section>
);
