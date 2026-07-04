"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { Menu, X } from "lucide-react";
import MountainLogo from "@/components/icons/MountainLogo";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/servicios", key: "services" },
  { href: "/nosotros", key: "about" },
  { href: "/casos", key: "cases" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const header = useTranslations("header");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-bg-primary/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <MountainLogo className="h-9 w-16" animate={false} />
          <span className="font-heading text-lg font-bold uppercase tracking-wide">
            Global Data <span className="text-accent">468</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`group relative font-heading text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent ${
                  isActive ? "text-accent" : "text-text-primary"
                }`}
              >
                {t(item.key)}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitcher />
          <Link
            href="/contacto"
            className="shimmer-border relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border border-accent px-5 font-heading text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent/10"
          >
            {header("cta")}
          </Link>
        </div>

        <button
          className="text-text-primary lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-bg-primary/95 backdrop-blur-xl lg:hidden">
          <nav className="container flex flex-col gap-1 py-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-md px-3 py-3 font-heading text-base uppercase tracking-wide text-text-primary transition-colors hover:bg-white/5 hover:text-accent"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-3 inline-flex h-12 items-center justify-center rounded-md border border-accent font-heading text-sm font-semibold uppercase tracking-wide text-accent"
            >
              {header("cta")}
            </Link>
            <div className="mt-4 flex justify-center">
              <LocaleSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
