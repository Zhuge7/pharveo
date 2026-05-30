import Link from "next/link";
import { Header } from "@/components/layout/header";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowLeft } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-pharveo-slate px-6 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #10C4C4 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-lg">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pharveo-teal/20 bg-pharveo-teal/10 px-3 py-1 text-xs font-medium text-pharveo-teal">
            Bientôt disponible
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
            {title}
          </h1>

          <p className="mb-10 text-white/50">{description}</p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/demo">
              <ShimmerButton className="px-6 py-2.5 text-sm font-semibold">
                Demander une démo →
              </ShimmerButton>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
