import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-pharveo-slate">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-12">

          {/* Brand col - full width on mobile */}
          <div className="col-span-3 md:col-span-2">
            <Link href="/">
              <Image
                src="/logo-pharveo.png"
                alt="Pharveo"
                width={160}
                height={48}
                className="w-36 h-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Le CRM pharmaceutique pour l'Afrique de l'Ouest francophone.
              Souverain. Hors-ligne. En XOF.
            </p>
            <p className="mt-6 text-xs text-white/25">
              by Xakili - Ottawa, Ontario, Canada
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Produit</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/produit" className="text-white/45 transition-colors hover:text-white">
                  Modules
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-white/45 transition-colors hover:text-white">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-white/45 transition-colors hover:text-white">
                  Démo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Société</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/pourquoi-pharveo" className="text-white/45 transition-colors hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-white/45 transition-colors hover:text-white">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-white/45 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Légal</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/confidentialite" className="text-white/45 transition-colors hover:text-white">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-white/45 transition-colors hover:text-white">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-xs text-white/25">
            © 2026 Pharveo by Xakili. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
