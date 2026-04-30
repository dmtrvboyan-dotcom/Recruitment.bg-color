import { memo } from "react"
import Link from "next/link"
import { type EXPERTISE_AREAS } from "@/lib/constants/expertise"
import { LearnMoreRow } from "./learn-more-row"

export const ExpertiseCard = memo(function ExpertiseCard({
  item,
}: {
  item: (typeof EXPERTISE_AREAS)[0]
}) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="mb-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-[#0a3d62] group-hover:bg-[#0a3d62] group-hover:text-white transition-colors">
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <h3 className="font-semibold text-2xl text-[#0a3d62] mb-3 leading-tight group-hover:text-[#0a3d62] transition-colors">
        {item.title}
      </h3>

      <p className="text-[#0a3d62]/70 text-[15px] leading-relaxed flex-1">
        {item.description}
      </p>

      <div className="mt-8">
        <LearnMoreRow />
      </div>
    </Link>
  )
})
