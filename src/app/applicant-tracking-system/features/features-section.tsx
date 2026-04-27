"use client"

import { useState } from "react"
import Image from "next/image"
import { featuresData } from "./data"

const featureImages: Record<string, string> = {
  "Automated Workflows": "/smartr/workflow.png",
  "Real-time Analytics": "/smartr/analytics.png",
  "Team Collaboration": "/smartr/collab.png",
  "Email Integration": "/smartr/email.png",
  "Bulgarian Support": "/smartr/support.png",
  "Resume Parsing": "/smartr/resume.png",
}

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-[#ededed] -mt-25">
      <div className="max-w-6xl mx-auto mt-15">
        <div className="text-center mb-16">
           <span className="inline-flex items-center gap-2 text-md font-bold text-[#085689] uppercase tracking-[0.2em] mb-5">
                    <span className="block w-6 h-px bg-[#085689]/40" />
                    {featuresData.tagline}
                    <span className="block w-6 h-px bg-[#085689]/40" />
                  </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {featuresData.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            {featuresData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuresData.items.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col cursor-pointer"
            >
              {/* Feature Image with title overlay */}
              <div
                className="relative w-full overflow-hidden rounded-3xl bg-[#085689]/10
                           transition-all duration-500 ease-out
                           group-hover:-translate-y-2
                           group-hover:shadow-[0_24px_48px_-12px_rgba(8,86,137,0.30)]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={featureImages[feature.title] || "/images/smartr-dashboard.jpg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Base gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl
                               transition-opacity duration-500 group-hover:opacity-80" />

                {/* Hover shimmer overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                               transition-opacity duration-500
                               bg-gradient-to-tr from-[#085689]/20 via-transparent to-white/10" />

                {/* Title inside image, bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5
                               transition-transform duration-500 ease-out
                               group-hover:-translate-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                    {feature.title}
                  </h3>
                </div>

                {/* Corner accent dot */}
                <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-white/0
                               transition-all duration-500 delay-100
                               group-hover:bg-white/70 group-hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
              </div>

              {/* Feature Description */}
              <div className="mt-5 overflow-hidden">
                <p className="text-slate-600 text-base leading-relaxed
                             transition-all duration-500 ease-out
                             group-hover:text-slate-800 group-hover:translate-x-0.5">
                  {feature.description}
                </p>

                {/* Animated underline accent */}
                <div className="mt-3 h-px w-0 bg-gradient-to-r from-[#085689] to-[#085689]/0
                               transition-all duration-500 ease-out
                               group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}