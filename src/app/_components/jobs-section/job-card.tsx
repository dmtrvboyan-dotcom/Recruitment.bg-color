import { memo } from "react"
import { MapPin } from "lucide-react"
import type { Job } from "@/lib/data/jobs"

interface JobCardProps {
  job: Job
  onSelect: () => void
}

export const JobCard = memo(function JobCard({ job, onSelect }: JobCardProps) {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-3xl p-6 hover:shadow-lg hover:border-[var(--color-accent-primary)]/30 transition-all duration-300 group h-full flex flex-col">
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors line-clamp-2">
            {job.title}
          </h3>
          <p className="text-[var(--color-text-secondary)] font-medium mt-1">{job.seniority}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm">
            <div className="flex items-center gap-1.5 text-[var(--color-muted-foreground)]">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="px-3 py-1 bg-[var(--color-text-secondary)] text-white rounded-full text-xs font-medium">
              {job.type}
            </div>
            <div className="px-3 py-1 bg-[var(--color-text-secondary)] text-white rounded-full text-xs font-medium capitalize">
              {job.contract}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {job.techStack.map((tech, i) => (
            <span key={i} className="text-xs bg-[var(--color-bg-secondary)] text-[var(--color-muted-foreground)] px-3 py-1.5 rounded-xl">
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={onSelect}
          className="bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/90 text-white px-4 py-2 rounded-2xl text-xs font-medium transition-all active:scale-95 cursor-pointer shadow-sm"
        >
          View Position
        </button>
      </div>
    </div>
  )
})
