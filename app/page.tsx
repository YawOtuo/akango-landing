import { Audience } from "@/components/Audience";
import { Culture } from "@/components/Culture";
import { Curriculum } from "@/components/Curriculum";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PathSection } from "@/components/PathSection";
import { StatsBar } from "@/components/StatsBar";
import { Translate } from "@/components/Translate";
import { Waitlist } from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <PathSection />
        <Culture />
        <Translate />
        <Curriculum />
        <Audience />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
