"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import MountainLogo from "@/components/icons/MountainLogo";

export default function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section className="relative overflow-hidden bg-bg-primary py-28">
      <div className="absolute inset-x-0 bottom-0 opacity-20 blur-sm">
        <MountainLogo className="h-[30vh] w-full" animate={false} />
      </div>

      <div className="container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-text-muted"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/contacto"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 font-heading text-sm font-semibold uppercase tracking-wide text-bg-primary transition-transform hover:scale-[1.03]"
          >
            {t("button")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
