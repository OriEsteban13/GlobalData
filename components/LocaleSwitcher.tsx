"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { locales, type Locale } from "@/i18n";
import { ChevronDown } from "lucide-react";

const LOCALE_LABELS: Record<Locale, { label: string; flag: string }> = {
  ca: { label: "CA", flag: "🇦🇩" },
  es: { label: "ES", flag: "🇪🇸" },
  en: { label: "EN", flag: "🇬🇧" },
  fr: { label: "FR", flag: "🇫🇷" },
};

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-text-muted transition-colors hover:text-accent"
        aria-label="Select language"
      >
        <span>{LOCALE_LABELS[locale].flag}</span>
        <span className="font-heading">{LOCALE_LABELS[locale].label}</span>
        <ChevronDown size={14} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-md border border-white/10 bg-bg-secondary shadow-xl">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => {
                router.replace(pathname, { locale: l });
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-white/5 hover:text-accent ${
                l === locale ? "text-accent" : "text-text-muted"
              }`}
            >
              <span>{LOCALE_LABELS[l].flag}</span>
              <span>{LOCALE_LABELS[l].label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
