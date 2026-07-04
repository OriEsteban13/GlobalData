"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BARS = [
  { height: 55, delay: 0 },
  { height: 80, delay: 0.08 },
  { height: 40, delay: 0.16 },
  { height: 95, delay: 0.24 },
  { height: 65, delay: 0.32 },
  { height: 75, delay: 0.40 },
  { height: 50, delay: 0.48 },
  { height: 88, delay: 0.56 },
];

const LINE_POINTS = "20,72 62,48 104,62 146,28 188,38 230,15 272,32";

export default function AnalyticsVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary"
    >
      <svg viewBox="0 0 300 160" className="h-full w-full px-6 py-6">
        {/* grid lines */}
        {[40, 80, 120].map((y) => (
          <line key={y} x1="12" y1={y} x2="288" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
        ))}

        {/* bars */}
        {BARS.map((b, i) => {
          const x = 18 + i * 34;
          const maxH = 100;
          const barH = inView ? (b.height / 100) * maxH : 0;
          return (
            <motion.rect
              key={i}
              x={x}
              y={130 - (b.height / 100) * maxH}
              width={20}
              height={inView ? (b.height / 100) * maxH : 0}
              rx={3}
              fill="url(#barGrad)"
              initial={{ height: 0, y: 130 }}
              animate={inView ? { height: (b.height / 100) * maxH, y: 130 - (b.height / 100) * maxH } : {}}
              transition={{ duration: 0.7, delay: b.delay, ease: "easeOut" }}
            />
          );
        })}

        {/* trend line */}
        <motion.polyline
          points={LINE_POINTS}
          fill="none"
          stroke="#00C9C8"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />
        {/* dots on trend line */}
        {[[20,72],[62,48],[104,62],[146,28],[188,38],[230,15],[272,32]].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={3.5}
            fill="#00C9C8"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.12 }}
          />
        ))}

        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C9C8" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#00C9C8" stopOpacity={0.15} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
