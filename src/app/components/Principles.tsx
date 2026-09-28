import Reveal from "./ui/Reveal";

const facts = [
  { title: "Nothing runs without you", body: "Every suggestion waits for Accept, Edit or Abort." },
  { title: "Your code isn’t stored", body: "A diff is only used to generate the suggestion." },
  { title: "Free, on npm", body: "Install in one line. The API is public for everyone." },
];

/** The editorial moment: one serif statement, given the whole width. */
export const Principles = () => (
  <section className="px-5 py-32 md:py-44">
    <div className="mx-auto max-w-[1120px]">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="t-serif text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
          You describe. It suggests.
          <br />
          You decide.
        </h2>
      </Reveal>

      <div className="mx-auto mt-20 grid max-w-4xl gap-10 sm:grid-cols-3 sm:gap-8">
        {facts.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <div className="border-t border-ink/15 pt-5">
              <h3 className="text-[16px] font-medium tracking-tight text-ink">{f.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink/55">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
