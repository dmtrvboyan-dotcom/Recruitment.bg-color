import { memo } from "react"
import { CheckCircle } from "lucide-react"

export const SectionHeader = memo(function SectionHeader({
  label,
  variant = "dark",
}: {
  label: string
  variant?: "dark" | "brand"
}) {
  const styles =
    variant === "dark"
      ? "bg-[#0a3d62] text-white"
      : "bg-blue-50 text-[#0a3d62]"

  return (
    <div className="flex justify-center lg:justify-start mb-8">
      <div className={`inline-flex items-center gap-2 ${styles} px-4 py-2 rounded-full`}>
        {variant === "brand" && <CheckCircle className="w-5 h-5" />}
        <span className="font-semibold">{label}</span>
      </div>
    </div>
  )
})
