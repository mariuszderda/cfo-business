import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Hero from "@/components/sections/Hero";
import Diagnostic from "@/components/sections/Diagnostic";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import StickySection from "@/components/ui/StickySection";

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      {/* Header: fixed z-50 — always floats above every sticky card */}
      <Header />

      <main>
        {/*
         * Sticky stacking cards (desktop only).
         * Sections are wrapped in StickySection with ascending z-index so
         * each one slides on top of the previous. On mobile the wrapper is
         * a plain block element — no sticky, no scale/fade.
         *
         * Background colours come from the sections themselves; the wrapper
         * is transparent, so each section's own bg covers the one below.
         *
         * z-index ladder: 10 → 16  (all below Header's z-50)
         */}
        <StickySection zIndex={10}>
          <Hero />
        </StickySection>

        <StickySection zIndex={11}>
          <Diagnostic />
        </StickySection>

        <StickySection zIndex={12}>
          <About />
        </StickySection>

        <StickySection zIndex={13}>
          <Process />
        </StickySection>

        <StickySection zIndex={14}>
          <Features />
        </StickySection>

        <StickySection zIndex={15}>
          <Pricing />
        </StickySection>

        {/*
         * CTA is the last sticky card — isLast disables the scale/fade so it
         * stays crisp. Footer (also navy) slides in underneath it seamlessly.
         */}
        <StickySection zIndex={16} isLast>
          <CTA />
        </StickySection>
      </main>

      {/* Footer is NOT sticky — scrolls in naturally after all cards have been seen */}
      <Footer />
    </>
  );
}
