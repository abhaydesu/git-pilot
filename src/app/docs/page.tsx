// docs/page.tsx
import { DocsCodeBlock } from "../components/DocsCodeBlock";

// A restyled inline-code component to match the new vibe
const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="mx-0.5 rounded-md bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
    {children}
  </code>
);

const h2 = "t-section text-[2rem] text-ink md:text-[2.5rem]";
const h3 = "flex items-center gap-3 font-mono text-xl font-medium text-ink md:text-[22px]";
const prose = "mt-4 max-w-2xl text-[17px] leading-[1.65] text-ink/65";
const label = "mt-8 text-[15px] font-medium text-ink";

export default function DocsPage() {
  return (
    <article className="w-full max-w-3xl">
      <header>
        <h1 className="t-serif text-[clamp(3.25rem,7vw,5.25rem)] text-ink">
          Documentation
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60 md:text-xl">
          Welcome to the official Git-Pilot documentation. Here you&apos;ll find
          everything you need to streamline your Git workflow with AI.
        </p>
      </header>

      <section id="how-it-works" className="mt-16 scroll-mt-28 md:mt-24">
        <h2 className={`${h2} border-b border-ink/10 pb-5`}>
          How It Works
        </h2>
        <p className={prose}>
          Git-Pilot is a CLI tool that communicates with a secure backend API
          powered by Google&apos;s Gemini models. You always have the final
          say, with the ability to review, edit, or cancel any AI suggestion
          before it runs.
        </p>
      </section>

      <section id="installation" className="mt-16 scroll-mt-28 md:mt-24">
        <h2 className={`${h2} border-b border-ink/10 pb-5`}>
          Installation
        </h2>
        <p className={prose}>
          Make sure you have Node.js (v20+) and Git installed. Then, run the
          following command to install Git-Pilot globally from npm:
        </p>
        <DocsCodeBlock copyable>
          npm install -g @abhaydesu/git-pilot
        </DocsCodeBlock>
      </section>

      <section id="commands" className="mt-16 scroll-mt-28 md:mt-24">
        <h2 className={`${h2} border-b border-ink/10 pb-5`}>
          Commands
        </h2>
        <div className="mt-12 space-y-16">
          {/* --- Command: commit --- */}
          <div id="usage-commit" className="scroll-mt-28">
            <h3 className={h3}>
              <span aria-hidden className="size-2.5 rounded-full bg-commit" />
              git pilot commit
            </h3>
            <p className={prose}>
              Analyzes your staged changes (<Code>git diff</Code>) to generate a
              clear and descriptive commit message that follows the Conventional
              Commits specification. This is perfect for maintaining a clean
              history and auto-generating changelogs.
            </p>
            <p className={prose}>
              You can either provide your intent directly or let the AI figure
              it out by analyzing your diff.
            </p>

            <p className={label}>
              Without an Intent:
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink/60">
              If you omit the intent, the AI will analyze your staged changes on
              its own to generate the most appropriate message.
            </p>
            <DocsCodeBlock copyable>git pilot commit</DocsCodeBlock>

            <p className={label}>
              With an Intent:
            </p>
            <DocsCodeBlock copyable>
              git pilot commit &quot;your intent here&quot;
            </DocsCodeBlock>
            <p className="mt-6 text-[13px] font-semibold text-ink/45">Example:</p>
            <DocsCodeBlock>
              git pilot commit &quot;add user authentication&quot;
            </DocsCodeBlock>
          </div>

          {/* --- Command: run --- */}
          <div id="usage-run" className="scroll-mt-28">
            <h3 className={h3}>
              <span aria-hidden className="size-2.5 rounded-full bg-run" />
              git pilot run
            </h3>
            <p className={prose}>
              Translates a plain English request into the precise Git command.
              Stop searching Stack Overflow and just ask the AI. The suggested
              command is always displayed for confirmation before execution.
            </p>
            <DocsCodeBlock copyable>
              git pilot run &quot;your request in plain english&quot;
            </DocsCodeBlock>
            <p className="mt-6 text-[13px] font-semibold text-ink/45">Examples:</p>
            <DocsCodeBlock>
              {`git pilot run "squash the last 3 commits into one"

------- Suggested Command -------
  git rebase -i HEAD~3
---------------------------------`}
            </DocsCodeBlock>
          </div>

          <div id="usage-branch" className="scroll-mt-28">
            <h3 className={h3}>
              <span aria-hidden className="size-2.5 rounded-full bg-branch" />
              git pilot branch
            </h3>
            <p className={prose}>
              Generates a clean, conventional branch name from a description of
              your work. This helps keep your repository organized and easy to
              navigate. Branch names are typically formatted as{" "}
              <Code>type/description</Code>.
            </p>
            <DocsCodeBlock copyable>
              git pilot branch &quot;a description of your new feature or
              fix&quot;
            </DocsCodeBlock>
            <p className="mt-6 text-[13px] font-semibold text-ink/45">Examples:</p>
            <DocsCodeBlock>
              {`git pilot branch "add oauth login"
  
✔ Generating a conventional branch name...
  
  --- Suggested Branch Name ---
  
  feature/add-oauth-login
  
  -----------------------------
  
  ✔ What would you like to do? Accept
  
  ✔ Switched to new branch "feature/add-oauth-login"`}
            </DocsCodeBlock>
          </div>

          {/* --- Command: undo --- */}
          <div id="usage-undo" className="scroll-mt-28">
            <h3 className={h3}>
              <span aria-hidden className="size-2.5 rounded-full bg-undo" />
              git pilot undo
            </h3>
            <p className={prose}>
              The ultimate safety net. It analyzes your recent Git history (
              <Code>reflog</Code>) to suggest the safest command to reverse your
              last significant action, whether it was a bad commit, a merge, or
              a rebase.
            </p>
            <DocsCodeBlock copyable>git pilot undo</DocsCodeBlock>
          </div>
        </div>
      </section>
    </article>
  );
}
