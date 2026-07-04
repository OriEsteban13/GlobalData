"use client";

export default function AndorraMap({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <style>{`
            @keyframes spin-slow   { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
            @keyframes spin-medium { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
            @keyframes spin-rev    { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
            @keyframes pulse-ring  { 0%,100% { r: 6; opacity:.9; } 50% { r: 14; opacity:0; } }
            .g-slow   { animation: spin-slow   12s linear infinite; transform-origin: 100px 100px; }
            .g-medium { animation: spin-medium  8s linear infinite; transform-origin: 100px 100px; }
            .g-rev    { animation: spin-rev    10s linear infinite; transform-origin: 100px 100px; }
          `}</style>
        </defs>

        {/* outer static circle */}
        <circle cx="100" cy="100" r="72" stroke="rgba(0,201,200,0.15)" strokeWidth="1" />
        <circle cx="100" cy="100" r="72" stroke="rgba(0,201,200,0.08)" strokeWidth="6" />

        {/* equator (static) */}
        <ellipse cx="100" cy="100" rx="72" ry="10" stroke="rgba(0,201,200,0.2)" strokeWidth="1" />

        {/* rotating longitude ring 1 */}
        <g className="g-slow">
          <ellipse cx="100" cy="100" rx="40" ry="72" stroke="rgba(0,201,200,0.25)" strokeWidth="1" />
        </g>

        {/* rotating longitude ring 2 */}
        <g className="g-medium">
          <ellipse cx="100" cy="100" rx="62" ry="72" stroke="rgba(0,201,200,0.18)" strokeWidth="1" />
        </g>

        {/* rotating longitude ring 3 (reverse) */}
        <g className="g-rev">
          <ellipse cx="100" cy="100" rx="72" ry="28" stroke="rgba(0,201,200,0.15)" strokeWidth="1" />
        </g>

        {/* Andorra pin — slightly above center (42°N ~= upper half) */}
        {/* pulsing halo */}
        <circle cx="100" cy="82" r="14" fill="none" stroke="#00C9C8" strokeWidth="1" opacity="0">
          <animate attributeName="r" values="6;18;6" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
        </circle>

        {/* dot */}
        <circle cx="100" cy="82" r="5" fill="#00C9C8" />
        <circle cx="100" cy="82" r="2.5" fill="#0D1B2A" />

        {/* label */}
        <text
          x="100" y="66"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontWeight="600"
          letterSpacing="1.5"
        >ANDORRA</text>

        {/* coordinates */}
        <text
          x="100" y="57"
          textAnchor="middle"
          fill="rgba(0,201,200,0.6)"
          fontSize="6"
          fontFamily="var(--font-inter), sans-serif"
        >42°N · 1°E</text>
      </svg>
    </div>
  );
}
