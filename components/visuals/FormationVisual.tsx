"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROFILES = [
  { label: "Marca",    x: 80,  y: 48  },
  { label: "Propietat", x: 220, y: 48  },
  { label: "Club",     x: 80,  y: 130 },
  { label: "Adm. Pública", x: 220, y: 130 },
] as const;

const ROI_STEPS = [
  { label: "Inversió",   value: "€100K", x: 46 },
  { label: "Impacte",    value: "×3.4",  x: 150 },
  { label: "ROI",        value: "+240%", x: 254 },
] as const;

export default function FormationVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary"
    >
      <svg viewBox="0 0 300 180" className="h-full w-full px-4 py-4">

        {/* Central hub */}
        <motion.circle
          cx={150} cy={89} r={26}
          fill="#0D1B2A"
          stroke="#00C9C8"
          strokeWidth={2}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ transformOrigin: "150px 89px" }}
        />
        <motion.text
          x={150} y={85} textAnchor="middle"
          fill="#00C9C8" fontSize={7} fontWeight={700}
          fontFamily="var(--font-space-grotesk), sans-serif"
          letterSpacing={0.5}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >FORMACIÓ</motion.text>
        <motion.text
          x={150} y={96} textAnchor="middle"
          fill="#00C9C8" fontSize={6.5} fontWeight={600}
          fontFamily="var(--font-space-grotesk), sans-serif"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
        >& ROI</motion.text>

        {/* Lines from profiles to center */}
        {PROFILES.map((p, i) => (
          <motion.line
            key={p.label}
            x1={p.x} y1={p.y} x2={150} y2={89}
            stroke="#00C9C8" strokeWidth={1.2} strokeOpacity={0.3}
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          />
        ))}

        {/* Animated packets from hub to profiles */}
        {inView && PROFILES.map((p, i) => (
          <motion.circle
            key={`pkt-${p.label}`}
            r={2.5} fill="#00C9C8"
            initial={{ cx: 150, cy: 89, opacity: 0 }}
            animate={{ cx: [150, p.x], cy: [89, p.y], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.2, delay: 0.8 + i * 0.3,
              repeat: Infinity, repeatDelay: 2, ease: "easeInOut",
            }}
          />
        ))}

        {/* Profile nodes */}
        {PROFILES.map((p, i) => (
          <motion.g key={p.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <rect x={p.x - 34} y={p.y - 14} width={68} height={28}
              rx={6} fill="#0D1B2A" stroke="#00C9C8" strokeWidth={1.2} strokeOpacity={0.5} />
            <text x={p.x} y={p.y + 4} textAnchor="middle"
              fill="#FFFFFF" fontSize={7.5}
              fontFamily="var(--font-space-grotesk), sans-serif" fontWeight={600}>
              {p.label}
            </text>
          </motion.g>
        ))}

        {/* ROI formula bar at bottom */}
        <motion.rect x={18} y={155} width={264} height={18} rx={4}
          fill="rgba(0,201,200,0.06)" stroke="rgba(0,201,200,0.2)" strokeWidth={1}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        />
        {ROI_STEPS.map((s, i) => (
          <motion.g key={s.label}
            initial={{ opacity: 0, y: 4 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0 + i * 0.15 }}
          >
            <text x={s.x} y={161} textAnchor="middle"
              fill="rgba(255,255,255,0.4)" fontSize={5.5}
              fontFamily="var(--font-inter), sans-serif">
              {s.label}
            </text>
            <text x={s.x} y={169} textAnchor="middle"
              fill="#00C9C8" fontSize={7} fontWeight={700}
              fontFamily="var(--font-space-grotesk), sans-serif">
              {s.value}
            </text>
          </motion.g>
        ))}
        {/* arrows between ROI steps */}
        {[[96, 150], [204, 254]].map(([x1, x2], i) => (
          <motion.text key={i} x={(x1 + x2) / 2} y={165} textAnchor="middle"
            fill="rgba(0,201,200,0.5)" fontSize={8}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 + i * 0.1 }}
          >→</motion.text>
        ))}
      </svg>
    </div>
  );
}
