import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/ui/page-hero";

const HowItWorksSection = dynamic(() => import("@/components/sections/how-it-works").then(m => ({ default: m.HowItWorksSection })));
const FaqSection = dynamic(() => import("@/components/sections/faq").then(m => ({ default: m.FaqSection })));
const FinalCtaSection = dynamic(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCtaSection })));
const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export const metadata = {
  title: "Ressources",
  description:
    "Questions fréquentes, méthode de déploiement en 3 étapes et bonnes pratiques de la visite médicale conforme ARP en Afrique de l'Ouest.",
};

export default function RessourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Ressources"
          title={
            <>
              Tout pour préparer{" "}
              <span className="text-gradient-pharveo">votre déploiement</span>
            </>
          }
          subtitle="Réponses aux questions fréquentes et méthode de mise en route. Guides terrain et templates de reporting ARP en préparation."
        />
        <HowItWorksSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
