import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/ui/page-hero";

const PillarsSection = dynamic(() => import("@/components/sections/pillars").then(m => ({ default: m.PillarsSection })));
const ComparisonSection = dynamic(() => import("@/components/sections/comparison").then(m => ({ default: m.ComparisonSection })));
const CaseStudySection = dynamic(() => import("@/components/sections/case-study").then(m => ({ default: m.CaseStudySection })));
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials").then(m => ({ default: m.TestimonialsSection })));
const FinalCtaSection = dynamic(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCtaSection })));
const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export const metadata = {
  title: "Pourquoi Pharveo",
  description:
    "Conçu pour le terrain ouest-africain, pas adapté d'un outil occidental : hors-ligne réel, conformité ARP native, données dont vous restez propriétaire.",
};

export default function PourquoiPharveoPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Pourquoi Pharveo"
          title={
            <>
              Bâti pour l&apos;Afrique de l&apos;Ouest,{" "}
              <span className="text-gradient-pharveo">pas adapté pour elle</span>
            </>
          }
          subtitle="Les CRM globaux ignorent le terrain : réseau intermittent, conformité ARP, grossistes locaux, budgets PME. Pharveo part de ces contraintes, pas d'un modèle occidental."
        />
        <PillarsSection />
        <ComparisonSection />
        <CaseStudySection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
