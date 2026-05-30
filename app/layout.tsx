import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pharveo.com"),
  title: {
    default: "Pharveo | CRM Visite Médicale pour l'Afrique de l'Ouest Francophone",
    template: "%s | Pharveo",
  },
  description:
    "Votre force de vente tourne encore sur Excel et WhatsApp ? Pharveo digitalise tout - visites, rapports, tournées - conforme ARP Sénégal. Découvrez-le.",
  keywords: [
    "CRM pharmaceutique",
    "logiciel délégué médical",
    "CRM pharma Sénégal",
    "CRM pharma Afrique",
    "ARP Sénégal",
    "promotion pharmaceutique",
    "Pharveo",
    "Xakili",
  ],
  authors: [{ name: "Xakili", url: "https://xakili.ca" }],
  openGraph: {
    title: "Pharveo - Le CRM pharmaceutique pour l'Afrique de l'Ouest francophone",
    description:
      "Souverain. Hors-ligne. En XOF. Conçu pour vos délégués médicaux et grossistes locaux.",
    url: "https://pharveo.com",
    siteName: "Pharveo",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharveo - CRM pharmaceutique pour l'Afrique de l'Ouest",
    description:
      "Souverain. Hors-ligne. En XOF. Conçu pour vos délégués médicaux.",
  },
  icons: {
    icon: "/logo-pharveo.png",
    shortcut: "/logo-pharveo.png",
    apple: "/logo-pharveo.png",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "8CdttnPVEuHpf40Cl_SOuzhrMAD5US8Gr3jtgQ1ME_w",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${interTight.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
