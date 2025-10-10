import { DocsCodeBlock } from "../components/DocsCodeBlock";

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-neutral-800 text-lime-100 font-mono text-sm rounded-md px-1.5 py-1">
    {children}
  </code>
);

export default function DocsPage() {
  return (
    <article className="prose prose-invert max-w-none text-neutral-200">
      <header>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-100">
          <span className="text-lime-200">Git-Pilot</span> Documentation
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          Welcome to the official Git-Pilot documentation. Here you&apos;ll find everything you need to know to streamline your Git workflow with AI.
        </p>
      </header>

      <section id="how-it-works" className="mt-20 scroll-mt-50">
        <h2 className="text-3xl font-semibold text-neutral-100 border-b border-neutral-800 pb-3">
          How It Works
        </h2>
        <p className="mt-6 text-base leading-7">
          Git-Pilot is a CLI tool that communicates with a secure backend API powered by Google&apos;s Gemini models. This architecture keeps your AI API keys safe and off your local machine. You always have the final say, with the ability to review, edit, or cancel any AI suggestion before it runs.
        </p>
      </section>

      <section id="installation" className="mt-20 scroll-mt-50">
        <h2 className="text-3xl font-semibold text-neutral-100 border-b border-neutral-800 pb-3">
          Installation
        </h2>
        <p className="mt-6 text-base leading-7">
          Make sure you have Node.js (v18+) and Git installed. Then, run the following command to install Git-Pilot globally from npm:
        </p>
        <DocsCodeBlock copyable>npm install -g @abhaydesu/git-pilot</DocsCodeBlock>
      </section>

      <section id="commands" className="mt-20">
        <h2 className="text-3xl font-semibold text-neutral-100 border-b border-neutral-800 pb-3">
          Commands
        </h2>
        <div className="mt-12 space-y-16">
          <div id="usage-commit" className="scroll-mt-48">
            <h3 className="text-2xl font-semibold text-lime-200">git pilot commit</h3>
            <p className="mt-4 text-base leading-7">
              Analyzes your staged changes (<Code>git diff</Code>) to generate a clear and descriptive commit message that follows the Conventional Commits specification. This is perfect for maintaining a clean history and auto-generating changelogs.
            </p>
            <DocsCodeBlock copyable>git pilot commit &quot;your intent here&quot;</DocsCodeBlock>
            <p className="mt-4 text-neutral-400">Example:</p>
            <DocsCodeBlock>git pilot commit &quot;add user authentication&quot;</DocsCodeBlock>
          </div>

          <div id="usage-run" className="scroll-mt-48">
            <h3 className="text-2xl font-semibold text-lime-200">git pilot run</h3>
            <p className="mt-4 text-base leading-7">
              Translates a plain English request into the precise Git command. Stop searching Stack Overflow and just ask the AI. The suggested command is always displayed for confirmation before execution.
            </p>
            <DocsCodeBlock copyable>git pilot run &quot;your request in plain english&quot;</DocsCodeBlock>
            <p className="mt-4 text-neutral-400">Examples:</p>
            <DocsCodeBlock>
              git pilot run &quot;squash the last 3 commits into one&quot;
              {'\n'}
              {'\n'}
              ------- Suggested Command -------
                {'\n'}
                git rebase -i HEAD~3
                {'\n'}
              ---------------------------------
            </DocsCodeBlock>
          </div>

          <div id="usage-branch" className="scroll-mt-48">
            <h3 className="text-2xl font-semibold text-lime-200">git pilot branch</h3>
            <p className="mt-4 text-base leading-7">
              Generates a clean, conventional branch name from a description of your work. This helps keep your repository organized and easy to navigate. Branch names are typically formatted as <Code>type/description</Code>.
            </p>
            <DocsCodeBlock copyable>git pilot branch &quot;a description of your new feature or fix&quot;</DocsCodeBlock>
            <p className="mt-4 text-neutral-400">Examples:</p>
            <DocsCodeBlock>
              git pilot branch &quot;add oauth login&quot;
              {'\n'}
              {'\n'}
             ✔ Generating a conventional branch name...
                {'\n'}
                --- Suggested Branch Name ---
                {'\n'}
                feature/add-oauth-login
                {'\n'}
                -----------------------------
                {'\n'}
                ✔ What would you like to do? Accept
                {'\n'}
                ✔ Switched to new branch &quot;feature/add-oauth-login&quot;
            </DocsCodeBlock>
          </div>

          <div id="usage-undo" className="scroll-mt-48">
            <h3 className="text-2xl font-semibold text-lime-200">git pilot undo</h3>
            <p className="mt-4 text-base leading-7">
              The ultimate safety net. It analyzes your recent Git history (<Code>reflog</Code>) to suggest the safest command to reverse your last significant action, whether it was a bad commit, a merge, or a rebase.
            </p>
            <DocsCodeBlock copyable>git pilot undo</DocsCodeBlock>
          </div>
        </div>
      </section>
      
    </article>
  );
}