"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MILESTONES = [
  {
    year: "Fundació",
    headline: "Neix Global Data 468",
    detail:
      "L'empresa s'estableix a Andorra amb una visió clara: aplicar la intel·ligència de dades al món del patrocini i la comunicació corporativa. Des del primer dia, el focus és combinar rigor analític amb coneixement de mercat.",
  },
  {
    year: "Primers passos",
    headline: "Els primers projectes internacionals",
    detail:
      "Comencem a treballar amb clients espanyols i europeus en estudis de mercat i valoració d'actius de patrocini. S'estableixen les primeres metodologies pròpies de mesura de ROI en patrocini esportiu.",
  },
  {
    year: "Expansió",
    headline: "Consultoria de patrocini cultural i musical",
    detail:
      "Ampliem la nostra oferta al sector cultural i musical. Participem en l'estructura de patrocini de festivals i gires nacionals, aplicant les mateixes eines de dades que al sector esportiu.",
  },
  {
    year: "Consolidació",
    headline: "Sector públic i estudis d'opinió",
    detail:
      "Incorporem administracions públiques com a clients. Dissenyem estudis de notorietat, record de marca i opinió per a institucions, conselleries i ajuntaments que busquen mesurar l'impacte de les seves iniciatives.",
  },
  {
    year: "Avui",
    headline: "Referents en dades i patrocini",
    detail:
      "Més de 500 marques assessorades, presència en més de 40 països i un equip consolidat amb més de 8 anys d'experiència. Continuem creixent des d'Andorra cap al món.",
  },
] as const;

export default function Timeline({ title }: { title: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-primary py-20">
      <div className="container">
        <h2 className="mb-12 font-heading text-2xl font-bold uppercase tracking-tight md:text-3xl">
          {title}
        </h2>

        <div className="relative">
          {/* vertical track */}
          <div className="absolute left-[5.5rem] top-0 hidden h-full w-px bg-white/8 md:block" />

          <div className="flex flex-col gap-3">
            {MILESTONES.map((m, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center gap-6 text-left"
                  >
                    {/* year badge */}
                    <span
                      className={`relative z-10 hidden w-20 shrink-0 font-heading text-xs font-bold uppercase tracking-wider transition-colors md:block ${
                        isOpen ? "text-accent" : "text-text-muted group-hover:text-accent"
                      }`}
                    >
                      {m.year}
                      {/* dot on track */}
                      <span
                        className={`absolute -right-[0.6rem] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                          isOpen
                            ? "border-accent bg-accent"
                            : "border-white/20 bg-bg-primary group-hover:border-accent"
                        }`}
                      />
                    </span>

                    <div
                      className={`flex-1 rounded-xl border px-5 py-4 transition-all ${
                        isOpen
                          ? "border-accent/40 bg-bg-secondary shadow-[0_0_30px_-8px_rgba(0,201,200,0.25)]"
                          : "border-white/5 bg-bg-secondary hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="md:hidden font-heading text-xs font-bold uppercase tracking-wider text-accent mr-2">
                          {m.year}
                        </span>
                        <span
                          className={`font-heading text-base font-semibold uppercase tracking-wide transition-colors ${
                            isOpen ? "text-accent" : "text-text-primary group-hover:text-accent"
                          }`}
                        >
                          {m.headline}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 text-text-muted transition-transform ${
                            isOpen ? "rotate-180 text-accent" : ""
                          }`}
                        />
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-sm leading-relaxed text-text-muted">
                              {m.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
