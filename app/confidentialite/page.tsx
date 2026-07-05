import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";

const Footer = dynamic(() => import("@/components/layout/footer").then(m => ({ default: m.Footer })));

export const metadata = {
  title: "Politique de confidentialité",
  description: "Comment Pharveo collecte, utilise et protège vos données personnelles.",
};

const sections = [
  {
    title: "1. Données collectées",
    body: "Lorsque vous demandez une démo ou nous contactez, nous collectons les informations que vous nous transmettez : nom, adresse email professionnelle, société et taille d'équipe. Aucune donnée n'est collectée à votre insu.",
  },
  {
    title: "2. Utilisation des données",
    body: "Ces informations servent uniquement à répondre à votre demande, organiser votre démonstration et vous transmettre une proposition commerciale. Elles ne sont ni revendues, ni partagées avec des tiers à des fins publicitaires.",
  },
  {
    title: "3. Conservation",
    body: "Vos données de contact sont conservées le temps de la relation commerciale, puis supprimées sur simple demande de votre part.",
  },
  {
    title: "4. Vos droits",
    body: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, écrivez-nous via la page de demande de démo en précisant votre demande — nous y répondons sous 30 jours.",
  },
  {
    title: "5. Données clients de la plateforme",
    body: "Les données métier gérées dans le CRM Pharveo (HCP, visites, échantillons) appartiennent intégralement au client. Elles sont chiffrées, exportables à tout moment et supprimées en fin de contrat conformément aux engagements contractuels.",
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-pharveo-slate pb-24 pt-36">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Politique de confidentialité
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
