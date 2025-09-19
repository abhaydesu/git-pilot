// app/page.tsx
import CodeBlock from "./components/code-block";
import { GlowingEffectDemoSecond } from "./components/DemoSection";
import Heading from "./components/Heading";
import { Navbar } from "./components/navbar";
import { Subheading } from "./components/subheading";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heading>
        {/* Updated classes below for responsiveness */}
        <h1 className="mx-auto max-w-2xl mt-28 md:mt-40 text-center">
          Your AI git co-pilot for the command line.
        </h1>
      </Heading>
      <Subheading />
      <div className="flex justify-center">
        <CodeBlock className="mx-auto mt-10 text-center">
          npm install -g @abhaydesu/git-pilot
        </CodeBlock>
      </div>
      <GlowingEffectDemoSecond />
    </>
  );
}