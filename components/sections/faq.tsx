"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { CornerBrackets } from "@/components/ui/hud-accents";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Qu'est-ce que Pharveo ?",
    answer:
      "Pharveo est un CRM pharmaceutique conçu spécifiquement pour les équipes terrain d'Afrique de l'Ouest francophone. Il couvre la gestion des HCP (médecins, pharmaciens, hôpitaux), la planification des visites, le reporting terrain, la distribution d'échantillons, les connecteurs grossistes et les analytics. Tout en un, sans tableur, sans messagerie artisanale.",
  },
  {
    question: "Le mode hors-ligne fonctionne-t-il vraiment sans connexion ?",
    answer:
      "Oui - c'est l'une de nos priorités techniques fondamentales. L'application fonctionne intégralement offline : création de visites, saisie de comptes-rendus, gestion d'échantillons, consultation des fiches HCP. Dès qu'une connexion est disponible (3G, WiFi), la synchronisation se déclenche automatiquement en arrière-plan.",
  },
  {
    question: "Combien de temps pour déployer Pharveo dans mon équipe ?",
    answer:
      "Entre 4 et 8 semaines du premier appel au go-live. La semaine 1-2 sert à la configuration et l'import de vos données (HCP, délégués, zones). La semaine 3-4 couvre la formation de vos équipes. La semaine 5-8 est une phase de rodage accompagnée par notre équipe. Pas de projet IT à 6 mois.",
  },
  {
    question: "Quelle est la différence avec mes outils actuels ?",
    answer:
      "Les outils non dédiés ne tracent pas les visites HCP, ne gèrent pas les cycles promotionnels, ne produisent pas d'audit trail pour l'ARP, et ne synchronisent pas les stocks grossistes. Pharveo fait tout ça nativement, en temps réel, avec les données structurées que vos laboratoires partenaires attendent. Le passage à Pharveo représente en moyenne 3h de gain par délégué par semaine.",
  },
  {
    question: "Pharveo est-il conforme à la réglementation pharmaceutique locale ?",
    answer:
      "Oui. Pharveo intègre nativement les exigences de la Direction de la Pharmacie et du Médicament du Sénégal (DPM/ARP) : audit trail complet de chaque interaction HCP, traçabilité des échantillons, journalisation des accès. Le module de conformité est inclus dans toutes les licences, sans surcoût.",
  },
  {
    question: "Où sont hébergées mes données ?",
    answer:
      "Vos données sont hébergées sur une infrastructure sécurisée, chiffrées de bout en bout (AES-256) et sauvegardées régulièrement. Vous restez propriétaire de vos données et pouvez en demander l'export à tout moment. C'est notre engagement souveraineté.",
  },
  {
    question: "Puis-je migrer mes données existantes ?",
    answer:
      "Oui. Nos équipes assurent la migration de vos listes HCP, de votre base délégués et de vos historiques de visites depuis vos fichiers existants ou tout format CSV. La migration est incluse dans toutes les offres - pas de frais supplémentaires. Nous avons des scripts éprouvés pour les formats les plus courants.",
  },
  {
    question: "Proposez-vous une démo personnalisée ?",
    answer:
      "Bien sûr. Chaque démonstration dure environ 30 minutes et est adaptée à votre contexte : nombre de délégués, pays couverts, laboratoires représentés. Nos équipes parlent français et connaissent les contraintes du marché pharma ouest-africain. Réservez via le bouton ci-dessous.",
  },
];

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-pharveo-slate py-20 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Grille technique très subtile en fond */}
      <GridPattern
        width={32}
        height={32}
        className="opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,white,transparent)]"
      />

      <div className="container relative z-10 mx-auto max-w-3xl px-6">
        <BlurFade delay={0} inViewMargin="60px">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full border border-pharveo-teal/25 bg-pharveo-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-pharveo-cyan">
              FAQ
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Questions{" "}
              <span className="text-gradient-pharveo">fréquentes</span>
            </h2>
            <p className="mt-5 text-pretty text-lg text-white/50">
              Tout ce que vous devez savoir avant de vous lancer.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={80} inViewMargin="60px">
          <div className="group relative rounded-2xl">
            <CornerBrackets className="-inset-3 md:-inset-4" color="border-pharveo-teal/50" />
            <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className={cn(
                  "group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]",
                  "transition-all duration-300 hover:border-white/20 data-[state=open]:border-pharveo-teal/30 data-[state=open]:bg-pharveo-teal/5",
                  "data-[state=open]:shadow-[0_0_45px_-15px_rgba(20,184,184,0.35)]",
                )}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white/80 transition-colors hover:text-white data-[state=open]:text-white">
                    {faq.question}
                    <Plus className="h-4 w-4 flex-shrink-0 text-white/40 transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-pharveo-cyan" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-6 pb-5 leading-relaxed text-white/55">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
            </Accordion.Root>
          </div>
        </BlurFade>

        <BlurFade delay={160} inViewMargin="60px">
          <p className="mt-10 text-center text-sm text-white/40">
            Vous avez d'autres questions ?{" "}
            <Link
              href="/demo"
              className="text-pharveo-cyan transition-colors hover:text-pharveo-teal"
            >
              Écrivez-nous
            </Link>{" "}
            - on répond en 24h.
          </p>
        </BlurFade>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
