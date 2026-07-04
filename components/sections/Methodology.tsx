"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, TrendingUp } from "lucide-react";

const STEPS = [
  { key: "analyze",  icon: Search,              color: "from-accent/20 to-accent/5" },
  { key: "optimize", icon: SlidersHorizontal,   color: "from-accent/15 to-accent/5" },
  { key: "grow",     icon: TrendingUp,           color: "from-accent/10 to-accent/5" },
] as const;

export default function Methodology() {
  const t = useTranslations("methodology");

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-24">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-text-muted">{t("subtitle")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map(({ key, icon: Icon, color }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative overflow-hidden rounded-xl border border-white/5 bg-bg-primary p-7"
            >
              {/* decorative gradient blob */}
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${color} blur-2xl`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="font-heading text-5xl font-bold text-accent/10 select-none">
                    {t(`${key}.step`)}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-wide">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {t(`${key}.description`)}
                </p>
              </div>

              {/* connector arrow between steps */}
              {i < 2 && (
                <div className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 md:block">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-bg-secondary text-accent">
                    <svg viewBox="0 0 10 10" className="h-3 w-3 fill-current">
                      <path d="M3 2l4 3-4 3V2z" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
