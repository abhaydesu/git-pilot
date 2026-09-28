import Reveal from "./ui/Reveal";

/*
 * Flat colour tiles, one per command, each with an ASCII graphic mark:
 * the original ASCII theme, used as illustration rather than wallpaper.
 */

const commits = `*  -------------
|
*  --------
|
*  ----------------
|
*  ----------`;

const run = `>  >  >  >  >  >
  >  >  >  >  >
>  >  >  >  >  >
  >  >  >  >  >

$ _`;

const branch = `*
|
*
|\\
| *
| |
| *
|/
*
|
*`;

const undo = `   .-----------.
   |           |
<--'           |
               |
   .-----------'
   |
   o`;

const tiles = [
  {
    n: "01",
    cmd: "commit",
    title: "Commits that write themselves.",
    body: "Conventional messages drafted from your staged diff.",
    art: commits,
    className: "bg-commit text-[#3d1406]",
  },
  {
    n: "02",
    cmd: "run",
    title: "Plain English in, git out.",
    body: "Describe it. Get the exact command, shown before it runs.",
    art: run,
    className: "bg-run text-snow",
  },
  {
    n: "03",
    cmd: "branch",
    title: "Branch names, handled.",
    body: "A tidy type/description name from a short description.",
    art: branch,
    className: "bg-branch text-[#1f3a14]",
  },
  {
    n: "04",
    cmd: "undo",
    title: "A way back from anything.",
    body: "Reads your reflog and suggests the safest reversal.",
    art: undo,
    className: "bg-undo text-[#3f3100]",
  },
];

export const Commands = () => (
  <section id="commands" className="px-5 py-28 md:py-36">
    <div className="mx-auto max-w-[1120px]">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="t-section text-[clamp(2.4rem,5vw,3.5rem)] text-ink">
          Four commands. Most of git.
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-ink/60">
          The moments git slows you down, each one covered.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
        {tiles.map((t, i) => (
          <Reveal key={t.cmd} delay={i * 0.05}>
            <article
              className={`group flex h-full min-h-[25rem] flex-col rounded-2xl p-5 ${t.className}`}
            >
              <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">
                <span>{t.n}</span>
                <span>git pilot {t.cmd}</span>
              </div>
              <pre
                aria-hidden
                className="my-6 grid flex-1 place-items-center font-mono text-[14px] leading-[1.3] opacity-75 transition-transform duration-300 ease-out-strong group-hover:-translate-y-1"
              >
                {t.art}
              </pre>
              <h3 className="t-serif text-[27px]">{t.title}</h3>
              <p className="mt-2 text-[14px] leading-snug opacity-75">{t.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
