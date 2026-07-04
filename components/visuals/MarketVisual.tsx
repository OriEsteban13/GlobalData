"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ONLINE  = ["Panel Digital", "Xarxes Socials", "Enquesta Web"];
const OFFLINE = ["Presencial", "Focus Group", "Entrevistes"];

function GaugeArc({ inView }: { inView: boolean }) {
  const [pct, setPct] = useState(0);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(72);
  }, [inView, mv]);

  useEffect(() => {
    return spring.on("change", (v) => setPct(Math.round(v)));
  }, [spring]);

  const r = 38;
  const cx = 150;
  const cy = 110;
  const circ = Math.PI * r; // half circle
  const dash = (pct / 100) * circ;

  return (
    <g>
      {/* background arc */}
      <path
        d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`}
        fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={8} strokeLinecap="round"
      />
      {/* filled arc */}
      <motion.path
        d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`}
        fill="none"
        stroke="#00C9C8"
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        initial={{ strokeDasharray: `0 ${circ}` }}
        animate={inView ? { strokeDasharray: `${(72 / 100) * circ} ${circ}` } : {}}
        transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
      />
      {/* percentage label */}
      <motion.text
        x={cx} y={cy - 8}
        textAnchor="middle"
        fill="#00C9C8"
        fontSize={18}
        fontWeight={700}
        fontFamily="var(--font-space-grotesk), sans-serif"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        {pct}%
      </motion.text>
      <motion.text
        x={cx} y={cy + 6}
        textAnchor="middle"
        fill="rgba(255,255,255,0.4)"
        fontSize={6}
        fontFamily="var(--font-space-grotesk), sans-serif"
        letterSpacing={0.8}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        RECORD DE MARCA
      </motion.text>
      {/* min / max labels */}
      <text x={cx - r - 4} y={cy + 14} fill="rgba(255,255,255,0.25)" fontSize={6} textAnchor="middle">0%</text>
      <text x={cx + r + 4} y={cy + 14} fill="rgba(255,255,255,0.25)" fontSize={6} textAnchor="middle">100%</text>
    </g>
  );
}

export default function MarketVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary"
    >
      <svg viewBox="0 0 300 160" className="h-full w-full px-3 py-3">

        {/* ONLINE column */}
        <motion.text x={52} y={18} textAnchor="middle"
          fill="#00C9C8" fontSize={7} fontWeight={700} letterSpacing={1}
          fontFamily="var(--font-space-grotesk), sans-serif"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}
        >ONLINE</motion.text>

        {ONLINE.map((label, i) => (
          <motion.g key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.1 }}
          >
            <rect x={10} y={28 + i * 28} width={84} height={20} rx={5}
              fill="#0D1B2A" stroke="rgba(0,201,200,0.35)" strokeWidth={1} />
            <text x={52} y={41 + i * 28} textAnchor="middle"
              fill="rgba(255,255,255,0.7)" fontSize={7}
              fontFamily="var(--font-inter), sans-serif">
              {label}
            </text>
          </motion.g>
        ))}

        {/* Arrows ONLINE → center */}
        {ONLINE.map((_, i) => (
          <motion.line key={`ol-${i}`}
            x1={94} y1={38 + i * 28} x2={112} y2={95}
            stroke="#00C9C8" strokeWidth={1} strokeOpacity={0.25} strokeDasharray="3 2"
            initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
          />
        ))}

        {/* OFFLINE column */}
        <motion.text x={248} y={18} textAnchor="middle"
          fill="#00C9C8" fontSize={7} fontWeight={700} letterSpacing={1}
          fontFamily="var(--font-space-grotesk), sans-serif"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}
        >OFFLINE</motion.text>

        {OFFLINE.map((label, i) => (
          <motion.g key={label}
            initial={{ opacity: 0, x: 8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.1 }}
          >
            <rect x={206} y={28 + i * 28} width={84} height={20} rx={5}
              fill="#0D1B2A" stroke="rgba(0,201,200,0.35)" strokeWidth={1} />
            <text x={248} y={41 + i * 28} textAnchor="middle"
              fill="rgba(255,255,255,0.7)" fontSize={7}
              fontFamily="var(--font-inter), sans-serif">
              {label}
            </text>
          </motion.g>
        ))}

        {/* Arrows OFFLINE → center */}
        {OFFLINE.map((_, i) => (
          <motion.line key={`ofl-${i}`}
            x1={206} y1={38 + i * 28} x2={188} y2={95}
            stroke="#00C9C8" strokeWidth={1} strokeOpacity={0.25} strokeDasharray="3 2"
            initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
          />
        ))}

        {/* Gauge */}
        <GaugeArc inView={inView} />
      </svg>
    </div>
  );
}
