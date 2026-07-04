"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";

const SECTORS = ["sport", "culture", "fashion", "public"] as const;
type Sector = (typeof SECTORS)[number];

const CASES: {
  sector: Sector;
  title: string;
  context: string;
  metric: string;
  metricLabel: string;
}[] = [
  {
    sector: "sport",
    title: "Anàlisi de patrocini lliga de futbol",
    context: "Club de Primera División española",
    metric: "+38%",
    metricLabel: "ROI del patrocini",
  },
  {
    sector: "sport",
    title: "Aixecament de patrocini principal",
    context: "Club de bàsquet professional, Espanya",
    metric: "€1.8M",
    metricLabel: "Patrocini captat",
  },
  {
    sector: "sport",
    title: "Estudi de record de marca esportiva",
    context: "Federació esportiva internacional",
    metric: "+22 pp",
    metricLabel: "Increment de notorietat",
  },
  {
    sector: "culture",
    title: "Captació de patrocini festival de música",
    context: "Festival musical, Espanya",
    metric: "€950K",
    metricLabel: "Patrocini captat",
  },
  {
    sector: "culture",
    title: "Aixecament de patrocini gira musical",
    context: "Artista nacional, gira estatal",
    metric: "12",
    metricLabel: "Patrocinadors incorporats",
  },
  {
    sector: "culture",
    title: "Anàlisi de patrocini exposició cultural",
    context: "Institució cultural europea",
    metric: "+31%",
    metricLabel: "ROI de visibilitat",
  },
  {
    sector: "culture",
    title: "Estudi d'impacte de patrocini musical",
    context: "Festival internacional de jazz",
    metric: "18",
    metricLabel: "Mercats analitzats",
  },
  {
    sector: "fashion",
    title: "Estudi de record i opinió de marca",
    context: "Firma de moda espanyola",
    metric: "+27 pp",
    metricLabel: "Reconeixement espontani",
  },
  {
    sector: "fashion",
    title: "Captació de patrocini desfilada",
    context: "Setmana de la Moda, Madrid",
    metric: "€620K",
    metricLabel: "Patrocini captat",
  },
  {
    sector: "public",
    title: "Estudi d'opinió per administració",
    context: "Administració pública autonòmica",
    metric: "4.200",
    metricLabel: "Enquestes vàlides",
  },
  {
    sector: "public",
    title: "Estratègia de patrocini esdeveniment institucional",
    context: "Ajuntament capital de província",
    metric: "€480K",
    metricLabel: "Patrocini privat captat",
  },
  {
    sector: "public",
    title: "Anàlisi de mercat i notorietat cultural",
    context: "Conselleria de Cultura, Espanya",
    metric: "+19 pp",
    metricLabel: "Increment de notorietat",
  },
];

export default function CasesGrid() {
  const t = useTranslations("casesPage.filters");
  const [filter, setFilter] = useState<"all" | Sector>("all");

  const filtered = filter === "all" ? CASES : CASES.filter((c) => c.sector === filter);

  return (
    <section className="bg-bg-primary py-20">
      <div className="container">
        <div className="mb-10 flex flex-wrap gap-3">
          {(["all", ...SECTORS] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full border px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide transition-colors ${
                filter === s
                  ? "border-accent bg-accent text-bg-primary"
                  : "border-white/10 text-text-muted hover:border-accent/50 hover:text-accent"
              }`}
            >
              {t(s)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.div
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-white/5 bg-bg-secondary p-6"
              >
                <span className="font-heading text-xs font-semibold uppercase tracking-widest text-accent">
                  {t(c.sector)}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold uppercase tracking-wide">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{c.context}</p>
                <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="font-heading text-2xl font-bold text-accent">{c.metric}</span>
                  <span className="text-xs text-text-muted">{c.metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
