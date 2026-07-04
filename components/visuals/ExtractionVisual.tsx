"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const NODES = [
  { cx: 40,  cy: 40,  label: "API" },
  { cx: 40,  cy: 90,  label: "WEB" },
  { cx: 40,  cy: 140, label: "DB"  },
  { cx: 150, cy: 90,  label: "ETL" },
  { cx: 260, cy: 55,  label: "BI"  },
  { cx: 260, cy: 90,  label: "ML"  },
  { cx: 260, cy: 125, label: "VIZ" },
];

const EDGES = [
  { x1: 40, y1: 40,  x2: 150, y2: 90 },
  { x1: 40, y1: 90,  x2: 150, y2: 90 },
  { x1: 40, y1: 140, x2: 150, y2: 90 },
  { x1: 150, y1: 90, x2: 260, y2: 55  },
  { x1: 150, y1: 90, x2: 260, y2: 90  },
  { x1: 150, y1: 90, x2: 260, y2: 125 },
];

export default function ExtractionVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary"
    >
      <svg viewBox="0 0 300 180" className="h-full w-full px-4 py-4">
        {/* edges */}
        {EDGES.map((e, i) => (
          <motion.line
            key={i}
            x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="#00C9C8"
            strokeWidth={1.5}
            strokeOpacity={0.35}
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
          />
        ))}

        {/* animated data packets */}
        {inView && EDGES.map((e, i) => (
          <motion.circle
            key={`pkt-${i}`}
            r={3}
            fill="#00C9C8"
            initial={{ cx: e.x1, cy: e.y1, opacity: 0 }}
            animate={{ cx: [e.x1, e.x2], cy: [e.y1, e.y2], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.4,
              delay: 0.8 + i * 0.25,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "linear",
            }}
          />
        ))}

        {/* nodes */}
        {NODES.map((n, i) => (
          <motion.g key={n.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
          >
            <circle cx={n.cx} cy={n.cy} r={18} fill="#0D1B2A" stroke="#00C9C8" strokeWidth={1.5} />
            <text
              x={n.cx} y={n.cy + 4}
              textAnchor="middle"
              fill="#00C9C8"
              fontSize={8}
              fontFamily="var(--font-space-grotesk), sans-serif"
              fontWeight={600}
              letterSpacing={0.5}
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
