type ArtProps = { tone?: "dark" | "brass"; tall?: boolean };

export function ScopeArt({ tone = "dark" }: ArtProps) {
  const body = tone === "brass" ? "#3d3423" : "#1b1f17";
  const detail = tone === "brass" ? "#a8863f" : "#2a3024";
  const stroke = tone === "brass" ? "#2a2316" : "#0c0e0a";

  return (
    <svg viewBox="0 0 320 140" role="img" aria-label="Kikkert set fra siden">
      <ellipse cx="162" cy="119" rx="92" ry="6" fill="#191c14" opacity=".1" />
      <rect x="62" y="56" width="196" height="30" rx="15" fill={body} stroke={stroke} />
      <rect x="40" y="45" width="36" height="52" rx="13" fill={body} stroke={stroke} />
      <rect x="39" y="52" width="11" height="38" rx="5" fill="#0d100a" />
      <ellipse cx="43" cy="71" rx="3" ry="15" fill="#7d9aa1" opacity=".45" />
      <rect x="240" y="35" width="46" height="72" rx="17" fill={body} stroke={stroke} />
      <rect x="273" y="31" width="13" height="80" rx="6" fill="#0d100a" />
      <ellipse cx="281" cy="71" rx="4.5" ry="25" fill="#7d9aa1" opacity=".85" />
      <rect x="137" y="29" width="28" height="28" rx="4" fill={detail} stroke={stroke} />
      <rect x="144" y="19" width="14" height="12" rx="3" fill={detail} stroke={stroke} />
      <rect x="166" y="40" width="9" height="15" rx="2" fill={detail} stroke={stroke} />
      <rect x="80" y="52" width="12" height="38" rx="4" fill={detail} stroke={stroke} />
      <line x1="72" y1="62" x2="230" y2="62" stroke="#fff" strokeOpacity=".13" strokeWidth="1.4" />
      <text
        x="164"
        y="76"
        textAnchor="middle"
        fill={tone === "brass" ? "#d8c9a2" : "#8b957c"}
        fontSize="7"
        letterSpacing="2.4"
        fontFamily="Segoe UI, system-ui, sans-serif"
      >
        NORDLYS
      </text>
    </svg>
  );
}

export function MountArt({ tall = false }: ArtProps) {
  const ringY = tall ? 62 : 70;
  const ringTop = tall ? 24 : 32;

  return (
    <svg viewBox="0 0 320 140" role="img" aria-label="Montage med to ringe set fra siden">
      <ellipse cx="160" cy="121" rx="96" ry="6" fill="#191c14" opacity=".1" />
      <rect x="56" y="100" width="208" height="15" rx="3" fill="#3a4034" stroke="#20251a" />
      <rect x="64" y="95" width="192" height="8" rx="2" fill="#4a5244" stroke="#232819" />
      {[92, 132, 172, 212].map((x) => (
        <line key={x} x1={x} y1="101" x2={x} y2="114" stroke="#20251a" strokeWidth="2" opacity=".7" />
      ))}

      {[104, 216].map((cx) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={ringY}
            r={tall ? 37 : 33}
            fill="none"
            stroke="#2a3024"
            strokeWidth="13"
          />
          <circle
            cx={cx}
            cy={ringY}
            r={tall ? 37 : 33}
            fill="none"
            stroke="#8b957c"
            strokeWidth="1.4"
            opacity=".35"
          />
          <path
            d={`M${cx - 26} ${ringY - 18} a 30 30 0 0 1 34 -11`}
            fill="none"
            stroke="#9aa58a"
            strokeWidth="3"
            opacity=".45"
            strokeLinecap="round"
          />
          <rect x={cx - 13} y={ringTop} width="26" height="9" rx="2" fill="#4a5244" stroke="#232819" />
          <circle cx={cx - 7} cy={ringTop + 4.5} r="1.8" fill="#1b1f17" />
          <circle cx={cx + 7} cy={ringTop + 4.5} r="1.8" fill="#1b1f17" />
          <rect x={cx - 9} y={ringY + 28} width="18" height="10" rx="2" fill="#3a4034" stroke="#20251a" />
        </g>
      ))}
    </svg>
  );
}

export function ProductArt({ art }: { art: "scope" | "scope-brass" | "mount" | "mount-tall" }) {
  if (art === "scope") return <ScopeArt />;
  if (art === "scope-brass") return <ScopeArt tone="brass" />;
  if (art === "mount-tall") return <MountArt tall />;
  return <MountArt />;
}
