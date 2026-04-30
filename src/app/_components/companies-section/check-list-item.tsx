import { memo } from "react"
import { CheckCircle } from "lucide-react"

export const CheckListItem = memo(function CheckListItem({
  item,
  variant = "dark",
}: {
  item: string
  variant?: "dark" | "brand"
}) {
  const bgColor = variant === "dark" ? "bg-[#0a3d62]" : "bg-blue-50"
  const iconColor = variant === "dark" ? "text-white" : "text-[#0a3d62]"

  return (
    <li className="flex gap-4">
      <div
        className={`mt-1 w-6 h-6 rounded-full ${bgColor} flex-shrink-0 flex items-center justify-center`}
      >
        <CheckCircle className={`w-4 h-4 ${iconColor}`} />
      </div>
      <p className="text-lg text-[#0a3d62]/70 leading-relaxed">{item}</p>
    </li>
  )
})
