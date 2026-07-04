"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BarChart3, Database, Handshake, GraduationCap, SearchCheck, Rocket, ArrowUpRight } from "lucide-react";
import { Link } from "@/navigation";
import { Card } from "@/components/ui/card";

const SERVICES = [
  { key: "analytics",   icon: BarChart3 },
  { key: "extraction",  icon: Database },
  { key: "sponsorship", icon: Handshake },
  { key: "formation",   icon: GraduationCap },
  { key: "market",      icon: SearchCheck },
  { key: "strategy",    icon: Rocket },
] as const;

export default function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <section className="bg-bg-primary py-24">
      <div className="container">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ rotateX: -3, rotateY: 3, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="group h-full hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(0,201,200,0.35)]">
                <Icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-xl font-semibold uppercase tracking-wide">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 text-sm text-text-muted">
                  {t(`${key}.description`)}
                </p>
                <Link
                  href="/servicios"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                >
                  {t("cta")}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
