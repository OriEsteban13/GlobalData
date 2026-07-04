"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Globe2, Users, Layers, ShieldCheck } from "lucide-react";

const PILLARS = [
  { key: "global",  icon: Globe2 },
  { key: "senior",  icon: Users },
  { key: "method",  icon: Layers },
  { key: "trust",   icon: ShieldCheck },
] as const;

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="border-y border-white/5 bg-bg-secondary py-16">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
        {PILLARS.map(({ key, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-3 rounded-xl border border-white/5 bg-bg-primary/50 p-5"
          >
            <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <p className="font-heading text-base font-bold uppercase tracking-wide text-text-primary">
              {t(`${key}.label`)}
            </p>
            <p className="text-xs leading-relaxed text-text-muted">
              {t(`${key}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
