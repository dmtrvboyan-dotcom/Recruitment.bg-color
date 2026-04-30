"use client"

import { Button } from "@/components/ui/button"

interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      onClick={onClick}
      className={`rounded-full px-8 py-3 transition-all ${
        isActive
          ? "bg-[#0a3d62] text-white shadow hover:bg-[#0a3d62]/90"
          : "text-[#0a3d62]/60 hover:bg-white hover:text-[#0a3d62]"
      }`}
    >
      {label}
    </Button>
  )
}
