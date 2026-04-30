"use client"

import { memo } from "react"
import { ChevronRight } from "lucide-react"
import { type Service } from "@/lib/constants/services"

export const DesktopServiceCard = memo(function DesktopServiceCard({
  service,
  isSelected,
  onSelect,
}: {
  service: Service
  isSelected: boolean
  onSelect: () => void
}) {
  const IconComponent = service.icon

  return (
    <div
      onClick={onSelect}
      className="group cursor-pointer border border-slate-100 rounded-2xl bg-white p-6 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <IconComponent className="w-6 h-6 text-[#0a3d62]" />
          </div>
          <h3 className="text-lg font-semibold text-[#0a3d62] leading-tight pt-1">
            {service.title}
          </h3>
        </div>

        <div className="mt-1 p-2 rounded-full transition-all duration-300 group-hover:scale-110">
          <ChevronRight
            className={`w-5 h-5 text-[#0a3d62] transition-transform duration-300 ${
              isSelected ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  )
})
