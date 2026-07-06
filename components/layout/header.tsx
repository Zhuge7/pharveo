"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/produit", label: "Produit" },
  { href: "/pourquoi-pharveo", label: "Pourquoi Pharveo" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/clients", label: "Clients" },
  { href: "/ressources", label: "Ressources" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled || menuOpen
            ? "border-b border-white/[0.06] bg-pharveo-deep/90 backdrop-blur-2xl"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo-pharveo.png"
              alt="Pharveo"
              width={280}
              height={80}
              className="w-36 md:w-52 h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/45 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/demo" className="hidden md:block">
              <ShimmerButton className="px-5 py-2 text-[13px] font-semibold">
                Demander une démo
              </ShimmerButton>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/70 transition-colors hover:bg-white/[0.10] md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer — style HUD */}
        <div
          className={cn(
            "relative overflow-hidden transition-all duration-300 md:hidden",
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          {/* Liseré + grille technique en fond */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pharveo-cyan/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:22px_22px]" />

          <nav className="relative flex flex-col px-6 pb-6 pt-3">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "group flex items-center justify-between border-b border-white/[0.06] px-1 py-3.5 transition-all duration-300",
                  menuOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
                )}
                style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-semibold text-pharveo-cyan/50">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                    {link.label}
                  </span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-pharveo-cyan" />
              </Link>
            ))}
            <div
              className={cn(
                "mt-5 transition-all duration-300",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
              style={{ transitionDelay: menuOpen ? `${80 + navLinks.length * 50}ms` : "0ms" }}
            >
              <Link href="/demo" onClick={() => setMenuOpen(false)}>
                <ShimmerButton className="w-full py-3 text-sm font-semibold">
                  Demander une démo
                </ShimmerButton>
              </Link>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-pharveo-cyan/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pharveo-cyan" />
                </span>
                Réponse sous 24 h · Démo en français
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
