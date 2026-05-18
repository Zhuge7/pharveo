import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero";

// Sections below the fold - split into separate JS chunks
const LogosSection        = dynamic(() => import("@/components/sections/logos").then(m => ({ default: m.LogosSection })));
const PillarsSection      = dynamic(() => import("@/components/sections/pillars").then(m => ({ default: m.PillarsSection })));
const ModulesSection      = dynamic(() => import("@/components/sections/modules").then(m => ({ default: m.ModulesSection })));
const FeaturesShowcaseSection = dynamic(() => import("@/components/sections/features-showcase").then(m => ({ default: m.FeaturesShowcaseSection })));
const HowItWorksSection   = dynamic(() => import("@/components/sections/how-it-works").then(m => ({ default: m.HowItWorksSection })));
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials").then(m => ({ default: m.TestimonialsSection })));
const ConnectorsSection   = dynamic(() => import("@/components/sections/connectors").then(m => ({ default: m.ConnectorsSection })));
const CaseStudySection    = dynamic(() => import("@/components/sections/case-study").then(m => ({ default: m.CaseStudySection })));
const FaqSection          = dynamic(() => import("@/components/sections/faq").then(m => ({ default: m.FaqSection })));
const ComparisonSection   = dynamic(() => import("@/components/sections/comparison").then(m => ({ default: m.ComparisonSection })));
const FinalCtaSection     = dynamic(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCtaSection })));
const Footer              = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogosSection />
        <PillarsSection />
        <ModulesSection />
        <FeaturesShowcaseSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ConnectorsSection />
        <CaseStudySection />
        <FaqSection />
        <ComparisonSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
