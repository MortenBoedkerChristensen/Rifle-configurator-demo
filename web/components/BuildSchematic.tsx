export function BuildSchematic({ className }: { className?: string }) {
  return (
    <svg
      className={`schematic ${className ?? ""}`}
      viewBox="20 44 680 200"
      role="img"
      aria-labelledby="build-schematic-title build-schematic-desc"
    >
      <title id="build-schematic-title">
        Northwind Ridgeback med Nordlys V4 kikkert og Hald montage
      </title>
      <desc id="build-schematic-desc">
        Skitse i målestok: 30 mm rør, 31,6 mm frigang mellem objektiv og løb og 81 mm
        øjenafstand.
      </desc>

      <defs>
        <linearGradient id="stock-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7d5934" />
          <stop offset="1" stopColor="#5c3e22" />
        </linearGradient>
        <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#565e50" />
          <stop offset="1" stopColor="#333a2d" />
        </linearGradient>
      </defs>

      {/* eye position + eye relief */}
      <line className="measure-soft" x1="196" y1="104" x2="256" y2="104" />
      <line className="measure" x1="196" y1="92" x2="196" y2="116" />
      <text className="measure-text-muted" x="198" y="76">
        ØJENAFSTAND
      </text>
      <text className="measure-text" x="198" y="88">
        81 mm
      </text>

      {/* stock */}
      <path
        d="M36 198 L36 174 Q38 162 58 158 L204 153 L232 164 L236 184 L236 200 L206 204 L186 208 L176 232 L158 234 L150 214 L118 211 L74 211 L44 206 Z"
        fill="url(#stock-wood)"
        stroke="#2c1d10"
        strokeWidth="1"
      />
      <path
        d="M70 178 Q122 166 202 164"
        fill="none"
        stroke="#3f2a16"
        strokeWidth="1.4"
        opacity=".8"
      />
      <path
        d="M152 214 q14 6 34 5"
        fill="none"
        stroke="#3f2a16"
        strokeWidth="1.2"
        opacity=".7"
      />

      {/* trigger guard + trigger */}
      <path
        d="M262 199 q0 15 17 15 h18"
        fill="none"
        stroke="#2b3124"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M275 199 q2 9 5 11" fill="none" stroke="#20251a" strokeWidth="2" />

      {/* receiver + bolt */}
      <rect x="232" y="166" width="182" height="35" rx="5" fill="url(#steel)" stroke="#1b1f16" />
      <rect x="250" y="171" width="140" height="5" rx="2.5" fill="#1e2318" opacity=".7" />
      <circle cx="318" cy="200" r="6" fill="#242a1d" stroke="#12160e" />
      <path d="M318 200 L335 218" stroke="#2c3323" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="335" cy="218" r="3.4" fill="#3c4433" stroke="#12160e" />

      {/* forend + barrel */}
      <path
        d="M314 208 L468 199 L502 206 L502 216 L334 221 Z"
        fill="url(#stock-wood)"
        stroke="#2c1d10"
        strokeWidth="1"
      />
      <rect x="410" y="180" width="240" height="10" rx="4" fill="url(#steel)" stroke="#1b1f16" />
      <rect x="646" y="176" width="26" height="18" rx="3" fill="#2a3024" stroke="#12160e" />
      <line x1="652" y1="180" x2="652" y2="190" stroke="#4c5445" strokeWidth="1.6" />
      <line x1="658" y1="180" x2="658" y2="190" stroke="#4c5445" strokeWidth="1.6" />

      {/* rail + mount base */}
      <rect x="254" y="156" width="148" height="7" rx="2" fill="#242a1e" stroke="#12160e" />
      <rect x="286" y="148" width="94" height="9" rx="2.5" fill="#6c7365" stroke="#333a2d" />

      {/* ring towers */}
      <rect x="299" y="119" width="14" height="30" rx="2" fill="#6c7365" stroke="#333a2d" />
      <rect x="359" y="119" width="14" height="30" rx="2" fill="#6c7365" stroke="#333a2d" />

      {/* scope */}
      <rect x="278" y="89" width="172" height="30" rx="14" fill="#14180f" stroke="#9aa58a" strokeWidth="1.1" />
      <rect x="260" y="79" width="32" height="50" rx="12" fill="#14180f" stroke="#9aa58a" strokeWidth="1.1" />
      <rect x="252" y="85" width="11" height="38" rx="5" fill="#0d100a" stroke="#78826c" />
      <rect x="440" y="66" width="58" height="76" rx="16" fill="#14180f" stroke="#9aa58a" strokeWidth="1.1" />
      <rect x="486" y="62" width="13" height="84" rx="6" fill="#0d100a" stroke="#78826c" />
      <ellipse className="scope-glass" cx="493" cy="104" rx="4.5" ry="23" />
      <ellipse className="scope-glass" cx="253" cy="104" rx="3" ry="15" opacity=".55" />
      <rect x="306" y="86" width="10" height="36" rx="4" fill="#242a1d" stroke="#78826c" />
      <rect x="350" y="64" width="26" height="27" rx="4" fill="#1a1f14" stroke="#9aa58a" strokeWidth="1.1" />
      <rect x="356" y="54" width="14" height="12" rx="3" fill="#2a3022" stroke="#78826c" />
      <line x1="284" y1="94" x2="432" y2="94" stroke="#b9c2a9" strokeWidth="1" opacity=".22" />

      {/* scope rings */}
      <rect className="ring" x="298" y="86" width="16" height="38" rx="4" />
      <rect className="ring" x="358" y="86" width="16" height="38" rx="4" />

      {/* clearance dimension */}
      <line className="measure-soft" x1="498" y1="142" x2="530" y2="142" />
      <line className="measure-soft" x1="512" y1="180" x2="530" y2="180" />
      <line className="measure" x1="524" y1="142" x2="524" y2="180" />
      <line className="measure" x1="519" y1="142" x2="529" y2="142" />
      <line className="measure" x1="519" y1="180" x2="529" y2="180" />
      <text className="measure-text" x="536" y="158">
        31,6 mm
      </text>
      <text className="measure-text-muted" x="536" y="170">
        FRIGANG
      </text>

      {/* tube diameter leader */}
      <line className="measure-soft" x1="500" y1="104" x2="532" y2="104" />
      <text className="measure-text" x="538" y="101">
        ⌀ 30 mm
      </text>
      <text className="measure-text-muted" x="538" y="113">
        RØR
      </text>
    </svg>
  );
}
