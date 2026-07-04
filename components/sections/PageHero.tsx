"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-bg-primary pb-16 pt-36">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-bold uppercase tracking-tight md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-xl text-text-muted"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
