import { ArrowRight } from "lucide-react"

export function LearnMoreRow({ label = "Learn more" }: { label?: string }) {
  return (
    <div className="mt-auto flex items-center text-[#0a3d62] font-medium text-sm group-hover:gap-2 transition-all">
      {label}
      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
    </div>
  )
}
