import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";

const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export const metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation du site et du service Pharveo.",
};

const sections = [
  {
    title: "1. Objet",
    body: "Les présentes conditions encadrent l'utilisation du site pharveo.com et l'accès au service Pharveo, CRM destiné aux équipes de promotion médicale. L'utilisation du site vaut acceptation de ces conditions.",
  },
  {
    title: "2. Accès au service",
    body: "L'accès à la plateforme Pharveo fait l'objet d'un contrat de licence distinct, signé entre Pharveo et le client. Les tarifs affichés sur le site sont indicatifs et confirmés dans la proposition commerciale.",
  },
  {
    title: "3. Propriété intellectuelle",
    body: "Le site, la marque Pharveo, les interfaces et leurs contenus sont protégés. Toute reproduction sans autorisation écrite préalable est interdite. Les données saisies par les clients dans la plateforme restent leur propriété exclusive.",
  },
  {
    title: "4. Responsabilité",
    body: "Nous mettons tout en œuvre pour assurer l'exactitude des informations publiées sur ce site, sans pouvoir garantir l'absence d'erreur. Les engagements de service (disponibilité, support, sécurité) sont définis contractuellement avec chaque client.",
  },
  {
    title: "5. Contact",
    body: "Pour toute question relative à ces conditions, contactez-nous via la page de demande de démo.",
  },
];

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-pharveo-slate pb-24 pt-36">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Conditions d&apos;utilisation
          </h1>
          <p className="mt-3 text-sm text-white/40">Dernière mise à jour : juillet 2026</p>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-semibold text-white">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-white/60">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
