# Pharvio Website Starter

Site marketing Next.js 15 + Tailwind + Magic UI pour Pharvio by Xakili — le CRM pharmaceutique pour l'Afrique de l'Ouest francophone.

## Stack technique

- **Next.js 15** (App Router, React 19)
- **TypeScript** strict
- **Tailwind CSS 3.4** + tailwindcss-animate
- **Magic UI** (composants animés inspirés de magicui.design)
- **shadcn/ui** patterns (Radix UI primitives)
- **Lucide Icons**
- **Motion** (framer-motion successor) pour animations custom
- **Inter + Inter Tight** (Google Fonts via next/font)

## Démarrage rapide

```bash
# 1. Cloner ce starter dans votre repo Pharvio
cd pharvio-website

# 2. Installer les dépendances
pnpm install
# ou: npm install / yarn install

# 3. Lancer en dev
pnpm dev
# ouvre http://localhost:3000

# 4. Build production
pnpm build
pnpm start
```

## Structure

```
pharvio-website/
├── app/
│   ├── layout.tsx              # Root layout, polices Inter
│   ├── page.tsx                # Home page (assemble toutes les sections)
│   └── globals.css             # CSS global + variables charte Pharvio
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Navigation principale
│   │   └── footer.tsx
│   ├── magicui/                # Composants Magic UI custom
│   │   ├── animated-beam.tsx
│   │   ├── bento-grid.tsx
│   │   ├── border-beam.tsx
│   │   ├── dot-pattern.tsx
│   │   ├── marquee.tsx
│   │   ├── number-ticker.tsx
│   │   └── shimmer-button.tsx
│   └── sections/               # Sections de la home
│       ├── hero.tsx
│       ├── logos.tsx
│       ├── pillars.tsx         # 3 piliers Bento Grid
│       ├── modules.tsx         # 9 modules Pharvio
│       ├── connectors.tsx      # Animated Beam grossistes
│       ├── case-study.tsx      # IMS-Pharma + Number Ticker
│       ├── comparison.tsx      # Tableau Pharvio vs concurrents
│       └── final-cta.tsx
├── lib/
│   └── utils.ts                # cn() helper
├── tailwind.config.ts          # Charte Pharvio + animations Magic UI
├── tsconfig.json
└── package.json
```

## Charte Pharvio

Couleurs principales (config Tailwind) :

| Token | Valeur | Usage |
|---|---|---|
| `pharvio-teal` | `#0E8A8A` | Couleur principale, hérité Xakili |
| `pharvio-cyan` | `#14B8B8` | Accents, hovers, gradient |
| `pharvio-slate` | `#0F2027` | Textes principaux, fonds dark |
| `pharvio-navy` | `#1A3A52` | Sections premium institutionnel |
| `pharvio-sand` | `#F4EFE6` | Fonds chaleureux |
| `pharvio-white` | `#FAFBFB` | Off-white pour fonds clairs |

Polices :
- `font-sans` → Inter (corps de texte)
- `font-display` → Inter Tight (titres)

Utilitaires custom :
- `text-gradient-pharvio` → texte avec gradient teal → cyan
- `gradient-pharvio` → background gradient

## Composants Magic UI utilisés

| Composant | Section | Effet |
|---|---|---|
| Shimmer Button | Hero, CTA finale | CTA premium animé |
| Marquee | Logos clients | Défilement infini |
| Bento Grid | 3 piliers | Grille moderne SaaS |
| Animated Beam | Connecteurs grossistes | Visualise les flux |
| Number Ticker | KPIs IMS-Pharma | Compteurs animés au scroll |
| Border Beam | CTA finale | Bordure lumineuse |
| Dot Pattern | Hero, sections | Texture subtile en fond |

## Étapes suivantes

1. **Acheter les domaines** : pharvio.com + pharvio.ca
2. **Initialiser le repo Next.js** :
   ```bash
   pnpm create next-app@latest pharvio-website --typescript --tailwind --app
   ```
   Puis copier ce starter par-dessus.
3. **Compléter les sections manquantes** :
   - Pages /produit, /tarifs, /clients/ims-pharma, /a-propos, /demo
   - Page contact avec formulaire (React Hook Form + Zod + Resend)
   - Blog MDX dans /content
4. **Remplacer les placeholders** :
   - Logos labos clients réels (avec accord)
   - Témoignage IMS-Pharma (citation officielle, signature, photo)
   - Captures produit réelles (pas de mockups génériques)
5. **Déployer sur Vercel** :
   ```bash
   vercel --prod
   ```
   Connecter les domaines pharvio.com et pharvio.ca.

## Performance & SEO

- Images : utiliser `next/image` avec WebP
- Polices : déjà optimisées via `next/font`
- Métadonnées : structurées dans `app/layout.tsx`
- À ajouter : `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`

## License

Code privé Xakili. Tous droits réservés.
