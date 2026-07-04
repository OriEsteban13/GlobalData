"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Lock, Target } from "lucide-react";

const VALUE_KEYS = [
  { key: "rigor", icon: Target },
  { key: "innovation", icon: Lightbulb },
  { key: "confidentiality", icon: Lock },
  { key: "results", icon: ShieldCheck },
] as const;

export default function Values() {
  const t = useTranslations("aboutPage.values");

  return (
    <section className="bg-bg-primary py-20">
      <div className="container">
        <h2 className="mb-12 font-heading text-2xl font-bold uppercase tracking-tight md:text-3xl">
          {t("title")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_KEYS.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/5 bg-bg-secondary p-6"
            >
              <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <p className="mt-4 font-heading text-base font-semibold uppercase tracking-wide">
                {t(`${key}.title`)}
              </p>
              <p className="mt-2 text-sm text-text-muted">{t(`${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
