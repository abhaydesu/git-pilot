// docs/page.tsx
import { DocsCodeBlock } from "../components/DocsCodeBlock";

// A restyled inline-code component to match the new vibe
const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="mx-0.5 rounded-md bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
    {children}
  </code>
);

const h2 = "t-section text-[2rem] text-ink md:text-[2.5rem]";
const h3 =
  "flex items-center gap-3 font-mono text-xl font-medium text-ink md:text-[22px]";
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
        <h2 className={`${h2} border-b border-ink/10 pb-5`}>How It Works</h2>
        <p className={prose}>
          Git-Pilot is a local-first CLI tool that connects directly to
          Google&apos;s Gemini API using your personal API key stored in your
          operating system&apos;s credential manager. Requests travel directly
          over TLS to Google without a hosted intermediary. You can review,
          edit, or cancel suggestions before they change your repository.
        </p>
      </section>

      <section id="installation" className="mt-16 scroll-mt-28 md:mt-24">
        <h2 className={`${h2} border-b border-ink/10 pb-5`}>Installation</h2>
        <p className={prose}>
          Make sure you have Node.js (v20+) and Git installed. Then, run the
          following command to install Git-Pilot globally from npm:
        </p>
        <DocsCodeBlock copyable>
          npm install -g @abhaydesu/git-pilot
        </DocsCodeBlock>
      </section>

      <section id="first-run" className="mt-16 scroll-mt-28 md:mt-24">
        <h2 className={`${h2} border-b border-ink/10 pb-5`}>First-Run Setup</h2>
        <p className={prose}>
          Stage the changes you want to commit, then run <Code>git pilot</Code>.
          If no key is configured, Git Pilot shows its data-sharing notice and
          starts setup. You can also start setup directly:
        </p>
        <DocsCodeBlock copyable>git pilot setup</DocsCodeBlock>
        <p className={prose}>
          Setup shows which Gemini model will be used and what data is sent. The
          API key prompt is masked. Git Pilot validates the key and model with
          Google before saving the key to your OS credential manager. The
          default model is <Code>gemini-3.5-flash-lite</Code>; model access can
          vary by Google project. If Google reports that a model is unavailable,
          check model access for your key or change the <Code>model</Code> value
          in your Git Pilot config, then run setup again. Google currently
          restricts access to Gemini 2.5 models for many new projects. See the{" "}
          <a
            className="underline decoration-ink/30 underline-offset-4 hover:text-ink"
            href="https://ai.google.dev/gemini-api/docs/models"
            target="_blank"
            rel="noreferrer"
          >
            Gemini model catalog
          </a>
          .
        </p>
      </section>

      <section id="commands" className="mt-16 scroll-mt-28 md:mt-24">
        <h2 className={`${h2} border-b border-ink/10 pb-5`}>Commands</h2>
        <div className="mt-12 space-y-16">
          {/* --- Command: commit --- */}
          <div id="usage-commit" className="scroll-mt-28">
            <h3 className={h3}>
              <span aria-hidden className="size-2.5 rounded-full bg-commit" />
              git pilot
            </h3>
            <p className={prose}>
              Run <Code>git pilot</Code> with staged changes. It analyzes your
              staged diff to generate a clear and descriptive Conventional
              Commit message.
            </p>
            <p className={prose}>
              You can either provide your intent directly or let the AI figure
              it out by analyzing your diff.
            </p>

            <p className={label}>Without an Intent:</p>
            <p className="mt-2 text-base leading-relaxed text-ink/60">
              If you omit the intent, the AI will analyze your staged changes on
              its own to generate the most appropriate message.
            </p>
            <DocsCodeBlock copyable>git pilot</DocsCodeBlock>

            <p className={label}>With an Intent:</p>
            <DocsCodeBlock copyable>
              git pilot add your intent here
            </DocsCodeBlock>
            <p className="mt-6 text-[13px] font-semibold text-ink/45">
              Example:
            </p>
            <DocsCodeBlock>git pilot add user authentication</DocsCodeBlock>
            <p className={prose}>
              Review the suggested message, then choose to accept and commit,
              edit it, regenerate it, or abort. Pressing Enter defaults to
              abort. Add <Code>--dry-run</Code> to print a message without
              committing.
            </p>
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
            <p className="mt-6 text-[13px] font-semibold text-ink/45">
              Examples:
            </p>
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
            <p className="mt-6 text-[13px] font-semibold text-ink/45">
              Examples:
            </p>
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
