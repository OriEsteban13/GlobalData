"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import MountainLogo from "@/components/icons/MountainLogo";
import ParticlesCanvas from "@/components/ParticlesCanvas";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-bg-primary pt-20">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <ParticlesCanvas className="absolute inset-0 h-full w-full" />

      {/* content — upper ~60% */}
      <div className="container relative z-10 flex flex-1 flex-col items-center justify-center py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent"
        >
          Global Data 468 · Andorra
        </motion.span>

        <h1 className="font-heading text-5xl font-bold uppercase tracking-tight md:text-7xl">
          <Typewriter text={t("tagline")} className="text-gradient-accent" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-text-muted"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/servicios"
            className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-8 font-heading text-sm font-semibold uppercase tracking-wide text-bg-primary transition-transform hover:scale-[1.03]"
          >
            {t("ctaPrimary")}
          </Link>
          <Link
            href="/contacto"
            className="inline-flex h-14 items-center justify-center rounded-md border border-accent px-8 font-heading text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent/10"
          >
            {t("ctaSecondary")}
          </Link>
        </motion.div>
      </div>

      {/* mountain — anchored at bottom, never overlaps content */}
      <div className="relative z-0 w-full flex-shrink-0 opacity-70">
        <MountainLogo className="h-[36vh] w-full" />
      </div>
    </section>
  );
}
