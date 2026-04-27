"use client";

import { securityData } from "./data";

export function SecuritySection() {
  return (
    <section className="py-20 md:py-32 px-6  bg-gradient-to-b from-white to-[#ededed]">
      <div className="max-w-6xl mx-auto">

        {/* Header — same pattern as BenefitsSection & IntegrationsSection */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#085689] uppercase tracking-[0.2em] mb-5">
            <span className="block w-6 h-px bg-[#085689]/40" />
            {securityData.tagline}
            <span className="block w-6 h-px bg-[#085689]/40" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black text-balance">
            {securityData.title}
          </h2>
        </div>

        {/* List — mirrors BenefitsSection's bordered rows */}
        <div className="max-w-3xl mx-auto">
          {securityData.items.map((item, index) => (
            <div
              key={index}
              className="border-t border-slate-200 last:border-b py-6 flex items-center gap-5"
            >
              {/* Numbered circle — same as BenefitsSection active state */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border-[1.5px] bg-[#085689] border-[#085689] text-white shadow-[0_4px_12px_rgba(8,86,137,0.3)]">
                {index + 1}
              </div>

              {/* Icon — same treatment as IntegrationsSection */}
              <div className="w-10 h-10 rounded-xl bg-[#085689]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[#085689]" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-semibold text-base text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
