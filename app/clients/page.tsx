import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/ui/page-hero";

const LogosSection = dynamic(() => import("@/components/sections/logos").then(m => ({ default: m.LogosSection })));
const CaseStudySection = dynamic(() => import("@/components/sections/case-study").then(m => ({ default: m.CaseStudySection })));
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials").then(m => ({ default: m.TestimonialsSection })));
const FinalCtaSection = dynamic(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCtaSection })));
const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export const metadata = {
  title: "Clients",
  description:
    "Sociétés de promotion médicale, laboratoires et grossistes-répartiteurs digitalisent leur force de vente avec Pharveo en Afrique de l'Ouest.",
};

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Clients"
          title={
            <>
              Ils digitalisent leur force de vente{" "}
              <span className="text-gradient-pharveo">avec Pharveo</span>
            </>
          }
          subtitle="Sociétés de promotion médicale, laboratoires et grossistes-répartiteurs : découvrez comment les équipes terrain travaillent avec Pharveo au quotidien."
        />
        <LogosSection />
        <CaseStudySection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
