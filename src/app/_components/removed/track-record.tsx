"use client"

import { useRef, useEffect } from "react"

const COMPANIES = [
  {
    name: "MAN",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#E2001A"/>
        <text x="18" y="24" fontFamily="Arial Black,sans-serif" fontSize="13" fontWeight="900" fill="white" textAnchor="middle">MAN</text>
      </svg>
    ),
  },
  {
    name: "DEGIRO",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#00a651"/>
        <text x="18" y="23" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="900" fill="white" textAnchor="middle">DE</text>
        <text x="18" y="32" fontFamily="Arial,sans-serif" fontSize="7" fontWeight="700" fill="white" textAnchor="middle">GIRO</text>
      </svg>
    ),
  },
  {
    name: "myPOS",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#1d3557"/>
        <rect x="8" y="12" width="20" height="14" rx="2" fill="white" opacity="0.95"/>
        <rect x="11" y="20" width="4" height="3" rx="0.5" fill="#ff6b35"/>
        <rect x="17" y="18" width="7" height="2" rx="0.5" fill="#1d3557" opacity="0.4"/>
        <rect x="17" y="21" width="5" height="2" rx="0.5" fill="#1d3557" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "AIOPSGROUP",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#6366f1"/>
        <circle cx="18" cy="14" r="5" fill="none" stroke="white" strokeWidth="1.5"/>
        <path d="M10 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="14" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: "EPSILON TELECOM",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#0074b7"/>
        <path d="M10 18 Q18 8 26 18 Q18 28 10 18Z" fill="none" stroke="white" strokeWidth="1.8"/>
        <circle cx="18" cy="18" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: "SCALEFLEX",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#085689"/>
        <rect x="9" y="22" width="5" height="7" rx="1" fill="white" opacity="0.6"/>
        <rect x="16" y="16" width="5" height="13" rx="1" fill="white" opacity="0.8"/>
        <rect x="23" y="10" width="5" height="19" rx="1" fill="white"/>
      </svg>
    ),
  },
  {
    name: "TIDE",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#00c9a7"/>
        <path d="M8 20 Q13 14 18 20 Q23 26 28 20" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M8 15 Q13 9 18 15 Q23 21 28 15" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "CANDOR",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#f59e0b"/>
        <polygon points="18,9 21,15 28,16 23,21 24,28 18,25 12,28 13,21 8,16 15,15" fill="white" opacity="0.95"/>
      </svg>
    ),
  },
  {
    name: "CODIIT",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#1e1b4b"/>
        <path d="M22 13l4 5-4 5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M14 13l-4 5 4 5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M19 11l-2 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "OSF",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#ef4444"/>
        <circle cx="18" cy="18" r="7" fill="none" stroke="white" strokeWidth="2.5"/>
        <circle cx="18" cy="18" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: "DESPARK",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#f97316"/>
        <path d="M18 9 L25 14 L25 22 L18 27 L11 22 L11 14 Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M18 13 L21 15.5 L21 20.5 L18 23 L15 20.5 L15 15.5 Z" fill="white" opacity="0.8"/>
      </svg>
    ),
  },
  {
    name: "MM SOLUTIONS",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#0891b2"/>
        <path d="M9 24 L9 14 L14 20 L19 14 L19 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M21 24 L21 14 L26 20 L31 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "TINQIN",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#085689"/>
        <circle cx="18" cy="18" r="7" fill="none" stroke="white" strokeWidth="1.8"/>
        <path d="M18 11 L18 25 M11 18 L25 18" stroke="#ff5d77" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="2.5" fill="white"/>
      </svg>
    ),
  },
]

function LogoCard({ name, svg }: { name: string; svg: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 mx-3 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#085689] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default min-w-[160px] shrink-0">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
        {svg}
      </div>
      <span className="text-[13px] font-bold text-[#1A1A2E] tracking-wide whitespace-nowrap font-syne">
        {name}
      </span>
    </div>
  )
}

function MarqueeRow({
  companies,
  reverse = false,
  duration = "30s",
}: {
  companies: typeof COMPANIES
  reverse?: boolean
  duration?: string
}) {
  // Quadruple the items for a truly seamless loop
  const items = [...companies, ...companies, ...companies, ...companies]

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {items.map((c, i) => (
          <LogoCard key={i} name={c.name} svg={c.svg} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .flex:hover { animation-play-state: paused; }
      `}</style>
    </div>
  )
}

/**
 * Trusted By section — replaces the TrustSection metrics with an
 * infinite scrolling logo marquee of client companies.
 */
export function TrustedBySection() {
  const row1 = COMPANIES.slice(0, 7)
  const row2 = COMPANIES.slice(7)

  return (
    <section className="py-24 lg:py-32 bg-transparent lg:mb-[120px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#085689] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="block w-8 h-[1.5px] bg-[#ff5d77] rounded" />
            Trusted by industry leaders
            <span className="block w-8 h-[1.5px] bg-[#ff5d77] rounded" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A2E] leading-[1.1]">
            Companies that rely on{" "}
            <span className="text-[#085689] relative inline-block">
              our expertise
              <span className="absolute bottom-0.5 left-0 w-full h-[3px] bg-[#ff5d77] rounded" />
            </span>
          </h2>
        </div>

        {/* Row 1 — left to right */}
        <MarqueeRow companies={row1} duration="28s" />

        <div className="h-4" />

        {/* Row 2 — right to left */}
        <MarqueeRow companies={row2} reverse duration="34s" />

        {/* Decorative dots */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          <span className="w-1 h-1 rounded-full bg-[#ff5d77] opacity-50" />
          <span className="w-1 h-1 rounded-full bg-[#085689]" />
          <span className="w-1 h-1 rounded-full bg-[#ff5d77] opacity-50" />
        </div>
      </div>
    </section>
  )
}