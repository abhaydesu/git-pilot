// docs/page.tsx
import { DocsCodeBlock } from "../components/DocsCodeBlock";

// A restyled inline-code component to match the new vibe
const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-neutral-800/60 border border-neutral-700 text-neutral-200 font-mono text-sm rounded-md px-1.5 py-0.5 mx-0.5">
    {children}
  </code>
);

export default function DocsPage() {
  return (
    <article className="w-full">
      <header>
        <h1 className="text-4xl md:text-7xl font-array font-semibold tracking-wider text-neutral-100">
          Documentation
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-satoshi text-neutral-400 max-w-3xl">
          Welcome to the official Git-Pilot documentation. Here you&apos;ll find
          everything you need to streamline your Git workflow with AI.
        </p>
      </header>

      <section id="how-it-works" className="mt-16 md:mt-24 scroll-mt-48">
        <h2 className="font-satoshi text-3xl md:text-4xl font-semibold text-neutral-300 border-b border-neutral-800 pb-4">
          How It Works
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-neutral-300 font-satoshi max-w-4xl">
          Git-Pilot is a CLI tool that communicates with a secure backend API
          powered by Google&apos;s Gemini models. This architecture keeps your
          AI API keys safe and off your local machine. You always have the final
          say, with the ability to review, edit, or cancel any AI suggestion
          before it runs.
        </p>
      </section>

      <section id="installation" className="mt-16 md:mt-24 scroll-mt-48">
        <h2 className="font-satoshi text-3xl md:text-4xl font-semibold text-neutral-300 border-b border-neutral-800 pb-4">
          Installation
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-neutral-300 font-satoshi">
          Make sure you have Node.js (v18+) and Git installed. Then, run the
          following command to install Git-Pilot globally from npm:
        </p>
        <DocsCodeBlock copyable>
          npm install -g @abhaydesu/git-pilot
        </DocsCodeBlock>
      </section>

      <section id="commands" className="mt-16 md:mt-24">
        <h2 className="font-satoshi text-3xl md:text-4xl font-semibold text-neutral-300 border-b border-neutral-800 pb-4">
          Commands
        </h2>
        <div className="mt-12 space-y-20">
          {/* --- Command: commit --- */}
          <div id="usage-commit" className="scroll-mt-48">
            <h3 className="font-mono text-2xl md:text-3xl font-semibold text-neutral-200">
              git pilot commit
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300 font-satoshi max-w-4xl">
              Analyzes your staged changes (<Code>git diff</Code>) to generate a
              clear and descriptive commit message that follows the Conventional
              Commits specification. This is perfect for maintaining a clean
              history and auto-generating changelogs.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-300 font-satoshi max-w-4xl">
              You can either provide your intent directly or let the AI figure
              it out by analyzing your diff.
            </p>

            <p className="mt-6 font-semibold text-neutral-200 text-base">
              Without an Intent:
            </p>
            <p className="mt-2 text-base leading-relaxed text-neutral-400 font-satoshi">
              If you omit the intent, the AI will analyze your staged changes on
              its own to generate the most appropriate message.
            </p>
            <DocsCodeBlock copyable>git pilot commit</DocsCodeBlock>

            <p className="mt-6 font-semibold text-neutral-200 text-base">
              With an Intent:
            </p>
            <DocsCodeBlock copyable>
              git pilot commit &quot;your intent here&quot;
            </DocsCodeBlock>
            <p className="mt-2 text-sm text-neutral-400 font-mono">Example:</p>
            <DocsCodeBlock>
              git pilot commit &quot;add user authentication&quot;
            </DocsCodeBlock>
          </div>

          {/* --- Command: run --- */}
          <div id="usage-run" className="scroll-mt-48">
            <h3 className="font-mono text-2xl md:text-3xl font-semibold text-neutral-200">
              git pilot run
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300 font-satoshi max-w-4xl">
              Translates a plain English request into the precise Git command.
              Stop searching Stack Overflow and just ask the AI. The suggested
              command is always displayed for confirmation before execution.
            </p>
            <DocsCodeBlock copyable>
              git pilot run &quot;your request in plain english&quot;
            </DocsCodeBlock>
            <p className="mt-4 text-sm text-neutral-400 font-mono">Examples:</p>
            <DocsCodeBlock>
              {`git pilot run "squash the last 3 commits into one"

------- Suggested Command -------
  git rebase -i HEAD~3
---------------------------------`}
            </DocsCodeBlock>
          </div>

          <div id="usage-branch" className="scroll-mt-48">
            <h3 className="font-mono text-2xl md:text-3xl font-semibold text-neutral-200">
              git pilot branch
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300 font-satoshi max-w-4xl">
              Generates a clean, conventional branch name from a description of
              your work. This helps keep your repository organized and easy to C
              navigate. Branch names are typically formatted as{" "}
              <Code>type/description</Code>.
            </p>
            <DocsCodeBlock copyable>
              git pilot branch &quot;a description of your new feature or
              fix&quot;
            </DocsCodeBlock>
            <p className="mt-4 text-sm text-neutral-400 font-mono">Examples:</p>
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
          <div id="usage-undo" className="scroll-mt-48">
            <h3 className="font-mono text-2xl md:text-3xl font-semibold text-neutral-200">
              git pilot undo
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300 font-satoshi max-w-4xl">
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
