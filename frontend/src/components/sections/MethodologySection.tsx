import type { ReactNode } from "react";
import { Animation, AnimatedCard } from "../ui/Animation";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

export type IconName =
  | "search"
  | "network"
  | "lock"
  | "target"
  | "layers"
  | "report";

export type Step = {
  /** Optional. Auto-generated as 01, 02... if omitted */
  no?: string;
  title?: string;
  description: string;
  /** Either a built-in icon name, or your own <svg/> / React node */
  icon: IconName | ReactNode;
};

export type MethodologySectionProps = {
  embedded?: boolean;
  title?: string;
  /** Exactly 6 steps (the layout is designed for 6) */
  steps?: Step[];
  /** Centre heading, 1–2 lines, e.g. ["ICS SECURITY", "ASSESSMENT"] */
  centerTitle?: string[];
  /** Centre tagline, 1–2 lines, e.g. ["DISCOVER. TEST.", "VALIDATE."] */
  tagline?: string[];
  /** Accessible description of the diagram */
  ariaLabel?: string;
  /** Optional extra classes on the outer <section> */
  className?: string;
};

type DiagramProps = {
  steps: ResolvedStep[];
  centerTitle: string[];
  tagline: string[];
  ariaLabel: string;
};

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-full w-full",
  "aria-hidden": true,
};

const SearchIcon = (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ShareIcon = (
  <svg {...iconProps}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

const LockIcon = (
  <svg {...iconProps}>
    <rect width="18" height="11" x="3" y="11" rx="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const TargetIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="1.5" />
    <line x1="22" x2="19" y1="12" y2="12" />
    <line x1="5" x2="2" y1="12" y2="12" />
    <line x1="12" x2="12" y1="5" y2="2" />
    <line x1="12" x2="12" y1="22" y2="19" />
  </svg>
);

const LayersIcon = (
  <svg {...iconProps}>
    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

const ClipboardIcon = (
  <svg {...iconProps}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const icons: Record<IconName, ReactNode> = {
  search: SearchIcon,
  network: ShareIcon,
  lock: LockIcon,
  target: TargetIcon,
  layers: LayersIcon,
  report: ClipboardIcon,
};

type ResolvedStep = {
  no: string;
  title: string;
  description: string;
  icon: ReactNode;
};

function resolveSteps(steps: Step[]): ResolvedStep[] {
  return steps.slice(0, 6).map((s, i) => ({
    no: s.no ?? String(i + 1).padStart(2, "0"),
    title: s.title,
    description: s.description,
    icon: typeof s.icon === "string" ? icons[s.icon as IconName] : s.icon,
  }));
}

/** Default content (ICS Security Assessment) */
export const icsSteps: Step[] = [
  {
    no: "01",
    title: "Reconnaissance",
    description:
      "Identify remote and local entry points across the ICS/SCADA environment.",
    icon: SearchIcon,
  },
  {
    no: "02",
    title: "Network Mapping",
    description:
      "Map ICS networks, exposed services, protocols, communication paths, and connected systems.",
    icon: ShareIcon,
  },
  {
    no: "03",
    title: "System Enumeration",
    description:
      "Assess PLCs, RTUs, HMIs, historians, SCADA applications, databases, credentials, and wireless connections.",
    icon: LockIcon,
  },
  {
    no: "04",
    title: "Vulnerability Analysis",
    description:
      "Identify weaknesses across network protocols, systems, applications, configurations, and access mechanisms.",
    icon: TargetIcon,
  },
  {
    no: "05",
    title: "Controlled Exploitation",
    description:
      "Safely validate exploitable weaknesses, remote-access paths, and diagnostic mechanisms within agreed rules of engagement.",
    icon: LayersIcon,
  },
  {
    no: "06",
    title: "Reporting & Deliverables",
    description:
      "Correlate findings with potential operational impact, prioritize vulnerabilities, and deliver evidence-based recommendations & corrective actions.",
    icon: ClipboardIcon,
  },
];

/* -------------------------------------------------------------------------- */
/*  DESKTOP LAYOUT (lg and up)                                                */
/*  Everything is placed on a 1100 x 650 design canvas and converted to %,    */
/*  so it scales perfectly with the container width.                          */
/* -------------------------------------------------------------------------- */

const W = 1100;
const H = 650;
const CX = W / 2;
const CY = H / 2;

const R_OUTER = 234;
const R_DOTTED = 180;
const R_MAIN = 148;
const DOT_DX = 154;
const DOT_DY = 178;
const ICON_SIZE = 58;
const ICON_SCALE = 40;
const TEXT_GAP = 27; // gap between icon edge and text

// index -> position of icon centre on canvas
const desktopPos = [
  { x: CX - 235, y: CY - 203, side: "left" }, // 01
  { x: CX - 294, y: CY, side: "left" }, // 02
  { x: CX - 235, y: CY + 203, side: "left" }, // 03
  { x: CX + 235, y: CY - 203, side: "right" }, // 04
  { x: CX + 294, y: CY, side: "right" }, // 05
  { x: CX + 235, y: CY + 203, side: "right" }, // 06
] as const;

const dots = [
  { x: CX - DOT_DX, y: CY - DOT_DY },
  { x: CX - R_OUTER, y: CY },
  { x: CX - DOT_DX, y: CY + DOT_DY },
  { x: CX + DOT_DX, y: CY - DOT_DY },
  { x: CX + R_OUTER, y: CY },
  { x: CX + DOT_DX, y: CY + DOT_DY },
];

const pctX = (x: number) => `${(x / W) * 100}%`;
const pctY = (y: number) => `${(y / H) * 100}%`;
// 1 design px -> container-query width unit (container is W design px wide)
const cq = (px: number) => `${((px / W) * 100).toFixed(3)}cqw`;

function DesktopDiagram({
  steps,
  centerTitle,
  tagline,
  ariaLabel,
}: DiagramProps) {
  return (
    <div
      className="relative mx-auto hidden w-full max-w-[1100px] lg:block"
      style={{ aspectRatio: `${W} / ${H}`, containerType: "inline-size" }}
    >
      {/* Rings, dots and centre text */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <linearGradient id="d-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8EEF5" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#6B7C8F" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#2A3A4C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D6DEE8" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="d-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#16283A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0E1D2D" stopOpacity="0.95" />
          </radialGradient>
          <filter id="d-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* outer thin ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R_OUTER}
          fill="none"
          stroke="#1E3F8A"
          strokeOpacity="0.75"
          strokeWidth="1.2"
        />
        {/* dotted ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R_DOTTED}
          fill="none"
          stroke="#8FA3BF"
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeDasharray="1.5 4"
          strokeLinecap="round"
        />

        {/* dotted connectors for 02 & 05 */}
        <line
          x1={CX - 264 + ICON_SIZE / 2}
          x2={CX - R_DOTTED}
          y1={CY}
          y2={CY}
          stroke="#8FA3BF"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeDasharray="1.5 4"
          strokeLinecap="round"
        />
        <line
          x1={CX + R_DOTTED}
          x2={CX + 264 - ICON_SIZE / 2}
          y1={CY}
          y2={CY}
          stroke="#8FA3BF"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeDasharray="1.5 4"
          strokeLinecap="round"
        />

        {/* centre disc */}
        <circle cx={CX} cy={CY} r={R_MAIN} fill="url(#d-core)" />
        <circle
          cx={CX}
          cy={CY}
          r={R_MAIN - 2}
          fill="none"
          stroke="url(#d-ring)"
          strokeWidth="5"
        />

        {/* centre text */}
        <g
          textAnchor="middle"
          fill="#E6ECF5"
          style={{ fontFamily: "var(--font-montserrat), Inter, sans-serif" }}
        >
          {centerTitle.map((line, i) => (
            <text
              key={line + i}
              x={CX}
              y={CY - 32 - (centerTitle.length - 1 - i) * 24}
              fontSize="15.5"
              letterSpacing="0.6"
            >
              {line}
            </text>
          ))}
          <rect x={CX - 22} y={CY - 2} width="44" height="3" fill="#1D6BF3" />
          {tagline.map((line, i) => (
            <text
              key={line + i}
              x={CX}
              y={CY + 42 + i * 20}
              fontSize="11.5"
              letterSpacing="0.8"
              fillOpacity="0.8"
            >
              {line}
            </text>
          ))}
        </g>

        {/* dots */}
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r="8"
            fill="#1D6BF3"
            stroke="#fff"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* Icons + text blocks */}
      {steps.map((s, i) => {
        const p = desktopPos[i];
        const isLeft = p.side === "left";

        return (
          <AnimatedCard key={s.no} delay={i * 0.2} className="absolute inset-0">
            {/* icon bubble */}
            <div
              className="absolute grid place-items-center rounded-full bg-[#0F4C818A] text-white transition-transform duration-300 ease-out hover:scale-110"
              style={{
                left: pctX(p.x),
                top: pctY(p.y),
                width: pctX(ICON_SIZE),
                aspectRatio: "1 / 1",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 0 1px rgba(61,115,186,0.12)",
              }}
            >
              <span
                className="block [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
                style={{ width: `${ICON_SCALE}%`, aspectRatio: "1 / 1" }}
              >
                {s.icon}
              </span>
            </div>

            {/* text */}
            <div
              className="absolute"
              style={{
                top: pctY(p.y - 32),
                width: pctX(205),
                ...(isLeft
                  ? {
                      right: pctX(W - (p.x - ICON_SIZE / 2 - TEXT_GAP)),
                      textAlign: "right" as const,
                    }
                  : {
                      left: pctX(p.x + ICON_SIZE / 2 + TEXT_GAP),
                      textAlign: "left" as const,
                    }),
              }}
            >
              <span
                className="block font-medium text-[#29559D]"
                style={{
                  fontSize: `max(10px, ${cq(14.5)})`,
                  lineHeight: 1.2,
                }}
              >
                {s.no}
              </span>
              <h3
                className="font-medium text-white"
                style={{
                  fontSize: `max(11.5px, ${cq(14)})`,
                  lineHeight: 1.3,
                  marginTop: cq(5),
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-white/65"
                style={{
                  fontSize: `max(9.5px, ${cq(11.8)})`,
                  lineHeight: 1.55,
                  marginTop: cq(8),
                }}
              >
                {s.description}
              </p>
            </div>
          </AnimatedCard>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  MOBILE / TABLET LAYOUT (below lg)                                         */
/* -------------------------------------------------------------------------- */

function MobileDiagram({
  centerTitle,
  tagline,
  ariaLabel,
}: Omit<DiagramProps, "steps">) {
  const C = 200;
  const R = 150;
  // top, top-right, bottom-right, bottom, bottom-left, top-left
  const angles = [-90, -30, 30, 90, 150, 210];

  return (
    <svg
      viewBox="0 0 400 400"
      className="mx-auto h-auto w-full max-w-[430px]"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id="m-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8EEF5" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#6B7C8F" stopOpacity="0.6" />
          <stop offset="65%" stopColor="#2A3A4C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D6DEE8" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="m-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#16283A" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0E1D2D" stopOpacity="0.95" />
        </radialGradient>
      </defs>

      <circle
        cx={C}
        cy={C}
        r={R}
        fill="none"
        stroke="#1E3F8A"
        strokeOpacity="0.8"
        strokeWidth="1"
      />
      <circle
        cx={C}
        cy={C}
        r="118"
        fill="none"
        stroke="#8FA3BF"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeDasharray="1.5 4"
        strokeLinecap="round"
      />
      <circle cx={C} cy={C} r="92" fill="url(#m-core)" />
      <circle
        cx={C}
        cy={C}
        r="90"
        fill="none"
        stroke="url(#m-ring)"
        strokeWidth="3.5"
      />

      <g
        textAnchor="middle"
        fill="#E6ECF5"
        style={{ fontFamily: "var(--font-montserrat), Inter, sans-serif" }}
      >
        {centerTitle.map((line, i) => (
          <text
            key={line + i}
            x={C}
            y={C - 11 - (centerTitle.length - 1 - i) * 17}
            fontSize="11.5"
            letterSpacing="0.5"
          >
            {line}
          </text>
        ))}
        <rect x={C - 15} y={C + 2} width="30" height="2.5" fill="#1D6BF3" />
        {tagline.map((line, i) => (
          <text
            key={line + i}
            x={C}
            y={C + 28 + i * 15}
            fontSize="8"
            letterSpacing="0.6"
            fillOpacity="0.8"
            color="#D1D1D1"
          >
            {line}
          </text>
        ))}
      </g>

      {angles.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const x = C + R * Math.cos(rad);
        const y = C + R * Math.sin(rad);
        return (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="17"
              fill="#0A1B33"
              stroke="#1D6BF3"
              strokeWidth="1.5"
            />
            <text
              x={x}
              y={y + 4.5}
              textAnchor="middle"
              fontSize="13"
              fontWeight="500"
              fill="#6FA0E8"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MobileList({ steps }: { steps: ResolvedStep[] }) {
  return (
    <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
      {steps.map((s) => (
        <div key={s.no} className="flex items-start gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0B2A52] text-white">
            <span className="h-[18px] w-[18px]">{s.icon}</span>
          </div>
          <div>
            <span className="text-sm font-medium text-[#3D73BA]">{s.no}</span>
            <h3 className="text-base font-medium text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              {s.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION                                                                   */
/* -------------------------------------------------------------------------- */

export default function MethodologySection({
  embedded = false,
  title,
  steps = icsSteps,
  centerTitle = ["ICS SECURITY", "ASSESSMENT"],
  tagline = ["DISCOVER. TEST.", "VALIDATE."],
  ariaLabel = "Security assessment methodology diagram",
  className = "",
}: MethodologySectionProps) {
  const items = resolveSteps(steps);

  return (
    <section className={className}>
      <div
        className={
          embedded
            ? "relative overflow-hidden"
            : "relative overflow-hidden bg-[linear-gradient(110deg,#050B18_0%,#071321_48%,#06383C_85%)]"
        }
      >
        <Animation>
          {title && (
            <div className="px-6 pt-12 text-center sm:px-10 lg:pt-16">
              <h2
                className="mx-auto max-w-[500px] text-[26px] leading-[1.4] text-white sm:text-[30px] lg:text-[34px]"
                style={{
                  fontFamily: "var(--font-montserrat), Inter, sans-serif",
                }}
              >
                {title}
              </h2>
            </div>
          )}
        </Animation>
        {/* Desktop */}
        <Animation>
          <div className="hidden px-6 pb-12 sm:px-10 lg:block lg:px-12 lg:pb-16">
            <DesktopDiagram
              steps={items}
              centerTitle={centerTitle}
              tagline={tagline}
              ariaLabel={ariaLabel}
            />
          </div>
        </Animation>

        {/* Mobile + tablet */}
        <Animation>
          <div className="relative px-6 pb-14 pt-10 sm:px-10 lg:hidden">
            <MobileDiagram
              centerTitle={centerTitle}
              tagline={tagline}
              ariaLabel={ariaLabel}
            />
            <MobileList steps={items} />
          </div>
        </Animation>
      </div>
    </section>
  );
}

/*
  OPTIONAL – Montserrat for the centre text (app/layout.tsx):

    import { Montserrat } from "next/font/google";
    const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
    <body className={montserrat.variable}> ... </body>

  If you skip this, the centre text falls back to Inter / sans-serif.
*/
