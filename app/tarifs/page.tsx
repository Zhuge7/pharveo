import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/ui/page-hero";

const PricingSection = dynamic(() => import("@/components/sections/pricing").then(m => ({ default: m.PricingSection })));
const ComparisonSection = dynamic(() => import("@/components/sections/comparison").then(m => ({ default: m.ComparisonSection })));
const FaqSection = dynamic(() => import("@/components/sections/faq").then(m => ({ default: m.FaqSection })));
const FinalCtaSection = dynamic(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCtaSection })));
const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export const metadata = {
  title: "Tarifs",
  description:
    "Tarification transparente en XOF, tous modules inclus, sans add-on caché. Starter, Croissance ou Enterprise : choisissez selon la taille de votre équipe terrain.",
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Tarifs"
          title={
            <>
              Une tarification{" "}
              <span className="text-gradient-pharveo">transparente, en XOF</span>
            </>
          }
          subtitle="Tous les modules inclus dans chaque licence, sans add-on caché. Migration et onboarding compris dans toutes les offres."
        />
        <PricingSection />
        <ComparisonSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
