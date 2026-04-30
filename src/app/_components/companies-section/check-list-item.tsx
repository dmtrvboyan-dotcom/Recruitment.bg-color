import { memo } from "react"
import { CheckCircle } from "lucide-react"

export const CheckListItem = memo(function CheckListItem({
  item,
  variant = "dark",
}: {
  item: string
  variant?: "dark" | "brand"
}) {
  const bgColor = variant === "dark" ? "bg-[var(--color-text-primary)]" : "bg-[var(--color-accent-primary)]/10"
  const iconColor = variant === "dark" ? "text-white" : "text-[var(--color-accent-primary)]"

  return (
    <li className="flex gap-4">
      <div
        className={`mt-1 w-6 h-6 rounded-full ${bgColor} flex-shrink-0 flex items-center justify-center`}
      >
        <CheckCircle className={`w-4 h-4 ${iconColor}`} />
      </div>
      <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">{item}</p>
    </li>
  )
})
