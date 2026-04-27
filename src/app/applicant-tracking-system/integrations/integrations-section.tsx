"use client";

import { integrationsData } from "./data";
import { useState } from "react";

export function IntegrationsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36 px-6 relative overflow-hidden  bg-gradient-to-b from-[#ededed] to-white pt-40">


      {/* Soft radial glow at center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(8,86,137,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 ">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-md font-bold text-[#085689] uppercase tracking-[0.2em] mb-5">
            <span className="block w-6 h-px bg-[#085689]/40" />
            {integrationsData.tagline}
            <span className="block w-6 h-px bg-[#085689]/40" />
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-5 text-balance">
            {integrationsData.title}
          </h2>

          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            {integrationsData.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {integrationsData.items.map((item, index) => {
            const isHovered = hovered === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex flex-col gap-5 rounded-2xl p-6 cursor-default
                  border border-slate-200/80 bg-white/70 backdrop-blur-sm
                  transition-all duration-300 ease-out overflow-hidden"
                style={{
                  boxShadow: isHovered
                    ? "0 20px 48px -8px rgba(8,86,137,0.18), 0 4px 12px -2px rgba(8,86,137,0.10)"
                    : "0 2px 12px -2px rgba(8,86,137,0.06)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
              >
                {/* Hover fill glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(8,86,137,0.04) 0%, rgba(8,86,137,0.01) 100%)",
                  }}
                />

                {/* Top: index number + icon */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered
                        ? "#085689"
                        : "rgba(8,86,137,0.09)",
                    }}
                  >
                    <item.icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: isHovered ? "#fff" : "#085689" }}
                    />
                  </div>

                  <span
                    className="text-xs font-bold tabular-nums transition-colors duration-300"
                    style={{
                      color: isHovered
                        ? "rgba(8,86,137,0.5)"
                        : "rgba(8,86,137,0.2)",
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-semibold text-base text-black mb-2 transition-colors duration-300"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px transition-all duration-500 rounded-full"
                  style={{
                    background: isHovered
                      ? "linear-gradient(90deg, transparent, #085689, transparent)"
                      : "transparent",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
