"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Landmark, Globe2 } from "lucide-react";

const ITEMS = [
  { key: "hub", icon: MapPin },
  { key: "taxation", icon: Landmark },
  { key: "eu", icon: Globe2 },
] as const;

export default function WhyAndorra() {
  const t = useTranslations("whyAndorra");

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-24">
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

        <div className="grid gap-8 md:grid-cols-3">
          {ITEMS.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-xl border border-white/5 bg-bg-primary/60 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{t(`${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
