"use client";

import { motion } from "framer-motion";

const LINES: string[] = [
  // base
  "M40,180 L560,180",
  // central peak
  "M300,20 L40,180",
  "M300,20 L560,180",
  // left peak
  "M150,70 L40,180",
  "M150,70 L300,20",
  "M150,70 L230,180",
  // right peak
  "M460,60 L300,20",
  "M460,60 L560,180",
  "M460,60 L380,180",
  // internal triangulation - left side
  "M150,70 L100,140",
  "M100,140 L40,180",
  "M100,140 L230,180",
  "M150,70 L180,180",
  // internal triangulation - center
  "M300,20 L230,180",
  "M300,20 L380,180",
  "M300,20 L300,180",
  "M230,180 L300,180",
  "M300,180 L380,180",
  // internal triangulation - right side
  "M460,60 L420,150",
  "M420,150 L380,180",
  "M420,150 L500,180",
  "M460,60 L500,180",
  // small extra facets
  "M180,180 L150,70",
  "M500,180 L560,180",
  "M40,180 L100,140",
];

export default function MountainLogo({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {LINES.map((d, i) =>
        animate ? (
          <motion.path
            key={d + i}
            d={d}
            stroke="#00C9C8"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: i * 0.035,
              ease: "easeInOut",
            }}
          />
        ) : (
          <path
            key={d + i}
            d={d}
            stroke="#00C9C8"
            strokeWidth={2}
            strokeLinecap="round"
          />
        )
      )}
    </svg>
  );
}
