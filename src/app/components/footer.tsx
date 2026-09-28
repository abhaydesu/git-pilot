import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandXFilled } from "@tabler/icons-react";
import AsciiArtBackground from "./ui/AsciiiBackground";
import CodeBlock from "./code-block";
import Logo from "./ui/Logo";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhaydesu/", Icon: IconBrandLinkedin },
  { label: "GitHub", href: "https://github.com/abhaydesu/", Icon: IconBrandGithub },
  { label: "X / Twitter", href: "https://x.com/abhaydesu", Icon: IconBrandXFilled },
];

const links = [
  { label: "Docs", href: "/docs" },
  { label: "npm", href: "https://www.npmjs.com/package/@abhaydesu/git-pilot" },
  { label: "GitHub", href: "https://github.com/abhaydesu/git-pilot-cli" },
];

/** Closing statement and footer share one ink panel, with the ASCII field behind. */
export const Footer = ({ cta = true }: { cta?: boolean }) => (
  <footer className="p-3">
    <div className="relative isolate overflow-hidden rounded-[28px] bg-night text-snow">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]"
      >
        <AsciiArtBackground rowHeight={12} ramp=" ._:-~=+*#%@" speed={0.14} contrast={0.9} />
      </div>

      {cta && (
        <div className="px-5 pb-24 pt-28 text-center md:pb-32 md:pt-36">
          <h2 className="t-section mx-auto max-w-3xl text-[clamp(2.4rem,5.5vw,4rem)]">
            Your next commit starts
            <br />
            with a sentence.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[17px] text-snow/60">
            Free, open on npm, and ready in one line.
          </p>
          <div className="mt-10 flex justify-center">
            <CodeBlock tone="light">npm i -g @abhaydesu/git-pilot</CodeBlock>
          </div>
        </div>
      )}

      <div className="mx-5 flex flex-col items-center justify-between gap-6 border-t border-snow/10 py-8 md:mx-10 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-8">
          <Link href="/" aria-label="Git Pilot home" className="press focus-ring rounded">
            <Logo tone="paper" className="text-[19px]" />
          </Link>
          <nav aria-label="Footer" className="flex gap-5 text-[14px] text-snow/60">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="press focus-ring rounded hover:text-snow">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[14px] text-snow/50">
            made with &lt;3 by{" "}
            <a
              className="press focus-ring rounded text-snow/80 hover:text-snow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://abhaydesu.dev"
            >
              Abhay
            </a>
          </p>
          <ul className="flex items-center">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  className="press focus-ring grid size-9 place-items-center rounded-full text-snow/50 hover:bg-snow/10 hover:text-snow"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  aria-label={label}
                >
                  <Icon aria-hidden size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
