"use client";

import { motion } from "framer-motion";
import { BarChart3, Handshake, Cpu, TrendingUp } from "lucide-react";

const EXPERTISE = [
  {
    icon: Handshake,
    area: "Patrocini Esportiu",
    years: "+8 anys",
    description:
      "Equip especialitzat en l'estructuració, valoració i activació de patrocinis esportius a escala nacional i internacional. Hem treballat amb federacions, clubs i propietats de primer nivell a Espanya i Europa.",
  },
  {
    icon: BarChart3,
    area: "Business Intelligence",
    years: "+8 anys",
    description:
      "Domini avançat de plataformes de BI, disseny de quadres de comandament executius i models de dades aplicats a la presa de decisions estratègiques en entorns esportius, culturals i corporatius.",
  },
  {
    icon: TrendingUp,
    area: "Estudis de Mercat",
    years: "+8 anys",
    description:
      "Disseny i execució d'estudis de record de marca, opinió i notorietat. Experiència en recerques quantitatives i qualitatives per a marques, institucions públiques i propietats culturals i esportives.",
  },
  {
    icon: Cpu,
    area: "Innovació en Processos",
    years: "+8 anys",
    description:
      "Implementació de pipelines de dades automatitzats, integració d'APIs i digitalització de processos de reporting. Transformem operatives manuals en fluxos eficients i escalables.",
  },
] as const;

export default function Team({ title }: { title: string }) {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="container">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="max-w-md text-sm text-text-muted">
            Un equip multidisciplinari amb més de 8 anys d&apos;experiència en patrocini esportiu, business intelligence i innovació en processos de dades.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {EXPERTISE.map(({ icon: Icon, area, years, description }, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-xl border border-white/5 bg-bg-primary p-7 transition-shadow hover:border-accent/30 hover:shadow-[0_0_40px_-12px_rgba(0,201,200,0.3)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
                  {years}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-wide">
                {area}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
