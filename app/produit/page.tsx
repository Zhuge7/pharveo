import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/ui/page-hero";

const ModulesSection = dynamic(() => import("@/components/sections/modules").then(m => ({ default: m.ModulesSection })));
const FeaturesShowcaseSection = dynamic(() => import("@/components/sections/features-showcase").then(m => ({ default: m.FeaturesShowcaseSection })));
const ConnectorsSection = dynamic(() => import("@/components/sections/connectors").then(m => ({ default: m.ConnectorsSection })));
const HowItWorksSection = dynamic(() => import("@/components/sections/how-it-works").then(m => ({ default: m.HowItWorksSection })));
const FinalCtaSection = dynamic(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCtaSection })));
const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export const metadata = {
  title: "Produit",
  description:
    "9 modules couvrant tout le cycle de la visite médicale : planification des tournées, visite hors-ligne, échantillons, analytics terrain et reporting laboratoire.",
};

export default function ProduitPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Produit"
          title={
            <>
              Un CRM complet,{" "}
              <span className="text-gradient-pharveo">pensé pour le terrain</span>
            </>
          }
          subtitle="De la planification de tournée au reporting laboratoire : 9 modules par rôle, un mode hors-ligne complet et des connecteurs grossistes natifs."
        />
        <ModulesSection />
        <FeaturesShowcaseSection />
        <ConnectorsSection />
        <HowItWorksSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
