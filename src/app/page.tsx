// app/page.tsx
import CodeBlock from "./components/code-block";
import { GlowingEffectDemoSecond } from "./components/DemoSection";
import Heading from "./components/Heading";
import { Navbar } from "./components/navbar";
import { Subheading } from "./components/subheading";
import { Footer } from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heading>
        <h1 className="mx-auto max-w-2xl mt-28 md:mt-60 text-center">
          Your AI git co-pilot for the command line.
        </h1>
      </Heading>
      <Subheading />
      <div className="flex justify-center">
        <CodeBlock className="mx-auto mt-20 text-center">
          npm install -g @abhaydesu/git-pilot
        </CodeBlock>
      </div>
        <div className="mx-auto text-center md:mt-60 mt-10">
          <div>
            refer <Link href="/docs" className="text-lime-100 hover:text-lime-200">docs</Link>
          </div> 
        </div>
      <GlowingEffectDemoSecond />
      <Footer />
    </>
  );
}