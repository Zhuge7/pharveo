"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowLeft, CheckCircle } from "lucide-react";

// 🔧 Remplace par ton endpoint Formspree : https://formspree.io (gratuit)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdwdoby";

const delegueOptions = ["1-5", "6-15", "16-30", "30+"];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-pharveo-slate pt-24 pb-20">
        <div className="container mx-auto max-w-2xl px-6">

          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Link>

          {submitted ? (
            <div className="flex flex-col items-center gap-6 py-20 text-center">
              <CheckCircle className="h-16 w-16 text-pharveo-teal" />
              <h1 className="text-3xl font-bold text-white">
                Demande reçue !
              </h1>
              <p className="max-w-md text-white/60">
                On vous contacte sous 24h pour planifier votre démo personnalisée.
                À très vite.
              </p>
              <Link href="/">
                <ShimmerButton className="px-6 py-2.5 text-sm font-semibold">
                  Retour à l'accueil
                </ShimmerButton>
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pharveo-teal/20 bg-pharveo-teal/10 px-3 py-1 text-xs font-medium text-pharveo-teal">
                  Démo personnalisée · Gratuit · 30 min
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Demander une démo
                </h1>
                <p className="mt-3 text-white/50">
                  On vous montre Pharveo en action sur votre contexte terrain - délégués, HCP, tournées.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/70">
                      Prénom & Nom *
                    </label>
                    <input
                      name="nom"
                      required
                      placeholder="Dr. Moussa Diallo"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-pharveo-teal/50 focus:bg-white/[0.08]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/70">
                      Email professionnel *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="m.diallo@labo.sn"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-pharveo-teal/50 focus:bg-white/[0.08]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
                    Société / Laboratoire *
                  </label>
                  <input
                    name="societe"
                    required
                    placeholder="IMS-Pharma Sénégal"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-pharveo-teal/50 focus:bg-white/[0.08]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
                    Nombre de délégués médicaux *
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {delegueOptions.map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input
                          type="radio"
                          name="delegues"
                          value={opt}
                          required
                          className="peer sr-only"
                        />
                        <div className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-center text-sm font-medium text-white/50 transition peer-checked:border-pharveo-teal/60 peer-checked:bg-pharveo-teal/10 peer-checked:text-pharveo-teal">
                          {opt}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
                    Votre besoin principal
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Ex : on gère encore nos rapports sur WhatsApp, on veut digitaliser les visites..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-pharveo-teal/50 focus:bg-white/[0.08]"
                  />
                </div>

                <ShimmerButton
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-sm font-semibold"
                >
                  {loading ? "Envoi en cours..." : "Réserver ma démo gratuite →"}
                </ShimmerButton>

                <p className="text-center text-xs text-white/25">
                  Réponse sous 24h · Aucun engagement · 100% gratuit
                </p>
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
}
