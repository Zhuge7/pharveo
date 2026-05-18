import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-pharveo-slate/10 bg-pharveo-white">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pharveo-teal to-pharveo-cyan">
                <span className="font-display text-sm font-bold text-white">
                  P
                </span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-pharveo-slate">
                pharveo
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-pharveo-slate/60">
              Le CRM pharmaceutique pour l'Afrique de l'Ouest francophone.
              Souverain. Hors-ligne. En XOF.
            </p>
            <p className="mt-6 text-xs text-pharveo-slate/40">
              by Xakili - Sudbury, Ontario, Canada
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-pharveo-slate">
              Produit
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/produit"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  Démo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-pharveo-slate">
              Société
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-pharveo-slate">Légal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/confidentialite"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions"
                  className="text-pharveo-slate/60 hover:text-pharveo-slate"
                >
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-pharveo-slate/10 pt-8">
          <p className="text-xs text-pharveo-slate/40">
            © 2026 Pharveo by Xakili. Tous droits réservés.
          </p>
          <p className="text-xs text-pharveo-slate/40">
            Données hébergées en Suisse 🇨🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
