"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

        {/* Mobile menu drawer */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <Link href="/demo" onClick={() => setMenuOpen(false)}>
                <ShimmerButton className="w-full py-3 text-sm font-semibold">
                  Demander une démo
                </ShimmerButton>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
