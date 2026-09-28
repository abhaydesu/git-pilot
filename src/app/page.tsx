import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Landing } from "./components/Landing";
import { Commands } from "./components/Commands";
import { FeatureRows } from "./components/FeatureRows";
import { Principles } from "./components/Principles";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Commands />
      <FeatureRows />
      <Principles />
      <FaqSection />
      <Footer />
    </>
  );
}
