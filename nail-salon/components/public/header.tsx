"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ── Scroll listener for transparent-to-solid nav ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── IntersectionObserver for scroll-spy ── */
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    },
    [],
  );

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [handleIntersect]);

  /* ── Lock body scroll when mobile drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#FAFAF7]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* ── Logo ── */}
        <a
          href="#"
          className="font-heading text-2xl font-bold tracking-wide text-[#B88686]"
        >
          LUXE NAILS
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm font-medium transition-colors duration-200",
                activeSection === link.href.replace("#", "")
                  ? "text-[#B88686]"
                  : "text-[#3D3D3D] hover:text-[#1A1A1A]",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <a
          href="#book"
          className="hidden rounded-md bg-[#D4A5A5] px-6 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#B88686] md:inline-block"
        >
          Book Now
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-[#1A1A1A]" />
        </button>
      </div>

      {/* ── Mobile Slide-Out Drawer ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-[#FAFAF7] shadow-xl transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Close button */}
        <div className="flex justify-end px-6 pt-5">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-[#1A1A1A]" />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="mt-8 flex flex-col gap-6 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-body text-lg font-medium transition-colors",
                activeSection === link.href.replace("#", "")
                  ? "text-[#B88686]"
                  : "text-[#3D3D3D] hover:text-[#1A1A1A]",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-block rounded-md bg-[#D4A5A5] px-6 py-3 text-center font-body text-base font-semibold text-white transition-colors hover:bg-[#B88686]"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
