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
      className="group block p-8 bg-white rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="mb-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)] group-hover:text-white transition-colors">
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <h3 className="font-semibold text-2xl text-[var(--color-text-primary)] mb-3 leading-tight group-hover:text-[var(--color-accent-primary)] transition-colors">
        {item.title}
      </h3>

      <p className="text-[var(--color-muted-foreground)] text-[15px] leading-relaxed flex-1">
        {item.description}
      </p>

      <div className="mt-8">
        <LearnMoreRow />
      </div>
    </Link>
  )
})
