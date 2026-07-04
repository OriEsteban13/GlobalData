"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STAGES = [
  { label: "Diagnòstic", icon: "◎", x: 36 },
  { label: "Estratègia", icon: "◈", x: 116 },
  { label: "Digital",    icon: "⬡", x: 196 },
  { label: "Creixement", icon: "↑",  x: 276 },
] as const;

const PILLARS = [
  { label: "Model de negoci",      y: 92 },
  { label: "Digitalització",       y: 116 },
  { label: "Diversificació",       y: 140 },
  { label: "Acompanyament exec.",  y: 164 },
] as const;

export default function StrategyVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary"
    >
      <svg viewBox="0 0 312 190" className="h-full w-full px-4 py-5">

        {/* ── roadmap track ── */}
        <motion.line
          x1={36} y1={32} x2={276} y2={32}
          stroke="rgba(0,201,200,0.2)" strokeWidth={2}
          strokeDasharray="4 3"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
        />
        {/* filled progress */}
        <motion.line
          x1={36} y1={32} x2={276} y2={32}
          stroke="#00C9C8" strokeWidth={2} strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        />

        {/* ── stage nodes ── */}
        {STAGES.map((s, i) => (
          <motion.g key={s.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.3 + i * 0.18 }}
            style={{ transformOrigin: `${s.x}px 32px` }}
          >
            <circle cx={s.x} cy={32} r={14}
              fill="#0D1B2A" stroke="#00C9C8" strokeWidth={1.5} />
            <text x={s.x} y={36} textAnchor="middle"
              fill="#00C9C8" fontSize={10}
              fontFamily="var(--font-space-grotesk), sans-serif">
              {s.icon}
            </text>
            <text x={s.x} y={56} textAnchor="middle"
              fill="rgba(255,255,255,0.6)" fontSize={6.5}
              fontFamily="var(--font-inter), sans-serif">
              {s.label}
            </text>
          </motion.g>
        ))}

        {/* ── divider ── */}
        <motion.line x1={16} y1={72} x2={296} y2={72}
          stroke="rgba(255,255,255,0.05)" strokeWidth={1}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        />

        {/* ── pillar rows ── */}
        {PILLARS.map((p, i) => (
          <motion.g key={p.label}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
          >
            {/* progress bar track */}
            <rect x={110} y={p.y - 5} width={174} height={8} rx={4}
              fill="rgba(255,255,255,0.05)" />
            {/* animated fill */}
            <motion.rect x={110} y={p.y - 5}
              height={8} rx={4} fill="url(#barG)"
              initial={{ width: 0 }}
              animate={inView ? { width: [40, 80, 100, 130, 160][i % 5] + 14 } : {}}
              transition={{ duration: 1, delay: 1.1 + i * 0.15, ease: "easeOut" }}
            />
            {/* label */}
            <text x={104} y={p.y + 2} textAnchor="end"
              fill="rgba(255,255,255,0.55)" fontSize={7}
              fontFamily="var(--font-inter), sans-serif">
              {p.label}
            </text>
          </motion.g>
        ))}

        {/* ── digital transformation arrow (big) ── */}
        <motion.text x={156} y={185} textAnchor="middle"
          fill="rgba(0,201,200,0.08)"
          fontSize={52} fontWeight={700}
          fontFamily="var(--font-space-grotesk), sans-serif"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >→</motion.text>

        <defs>
          <linearGradient id="barG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C9C8" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#00C9C8" stopOpacity={0.2} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
