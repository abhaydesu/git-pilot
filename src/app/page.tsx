// app/page.tsx
import CodeBlock from "./components/code-block";
import { GlowingEffectDemoSecond } from "./components/DemoSection";
import Heading from "./components/Heading";
import { Navbar } from "./components/navbar";
import { Subheading } from "./components/subheading";
import { Footer } from "./components/footer";
import Link from "next/link";
import { Landing } from "./components/Landing";
import { Features } from "./components/Features";
import FaqSection from "./components/FaqSection";
import { Scales } from "./components/Scales";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <FaqSection />
      <Footer />

    </>
  );
}
