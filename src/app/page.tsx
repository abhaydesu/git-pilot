import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Landing } from "./components/Landing";
import { Features } from "./components/Features";
import FaqSection from "./components/FaqSection";

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
