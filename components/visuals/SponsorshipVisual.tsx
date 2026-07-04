"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BRAND_ITEMS  = ["Brand Strategy", "Values", "Audience", "Budget"];
const PROP_ITEMS   = ["Reach", "Rights", "Activation", "ROI"];
const MATCH_LABELS = ["Data Match", "Analytics", "Valuation"];

export default function SponsorshipVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary"
    >
      <svg viewBox="0 0 340 210" className="h-full w-full px-2 py-4">
        {/* Left circle – Brand */}
        <motion.circle
          cx={78} cy={90} r={58}
          fill="rgba(0,201,200,0.07)"
          stroke="#00C9C8"
          strokeWidth={1.5}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0 }}
          style={{ transformOrigin: "78px 90px" }}
        />
        {/* Right circle – Property */}
        <motion.circle
          cx={262} cy={90} r={58}
          fill="rgba(0,201,200,0.07)"
          stroke="#00C9C8"
          strokeWidth={1.5}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ transformOrigin: "262px 90px" }}
        />

        {/* Center overlap – connector */}
        <motion.path
          d="M136,90 C160,55 180,55 204,90 C180,125 160,125 136,90 Z"
          fill="rgba(0,201,200,0.15)"
          stroke="#00C9C8"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Animated pulse ring in center */}
        {inView && (
          <motion.circle
            cx={170} cy={90} r={10}
            fill="none"
            stroke="#00C9C8"
            strokeWidth={1.5}
            initial={{ r: 8, opacity: 0.8 }}
            animate={{ r: [8, 22], opacity: [0.8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <circle cx={170} cy={90} r={6} fill="#00C9C8" />

        {/* Labels */}
        <text x={78} y={24} textAnchor="middle" fill="#FFFFFF" fontSize={9}
          fontFamily="var(--font-space-grotesk), sans-serif" fontWeight={700} letterSpacing={1}>
          MARCA
        </text>
        <text x={262} y={24} textAnchor="middle" fill="#FFFFFF" fontSize={9}
          fontFamily="var(--font-space-grotesk), sans-serif" fontWeight={700} letterSpacing={1}>
          PROPIETAT
        </text>

        {/* Brand items */}
        {BRAND_ITEMS.map((label, i) => (
          <motion.text
            key={label}
            x={78} y={60 + i * 16}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize={7.5}
            fontFamily="var(--font-inter), sans-serif"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            {label}
          </motion.text>
        ))}

        {/* Property items */}
        {PROP_ITEMS.map((label, i) => (
          <motion.text
            key={label}
            x={262} y={60 + i * 16}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize={7.5}
            fontFamily="var(--font-inter), sans-serif"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            {label}
          </motion.text>
        ))}

        {/* Center match labels — below the circles */}
        {MATCH_LABELS.map((label, i) => (
          <motion.text
            key={label}
            x={170} y={162 + i * 14}
            textAnchor="middle"
            fill="#00C9C8"
            fontSize={7}
            fontFamily="var(--font-space-grotesk), sans-serif"
            fontWeight={600}
            letterSpacing={0.5}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 + i * 0.12 }}
          >
            {label}
          </motion.text>
        ))}

        {/* Connecting arrows */}
        {inView && (
          <>
            <motion.line x1={136} y1={90} x2={204} y2={90}
              stroke="#00C9C8" strokeWidth={1} strokeDasharray="3 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
