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
          ? "bg-[var(--color-accent-primary)] text-white shadow hover:bg-[var(--color-accent-primary)]/90"
          : "text-[var(--color-muted-foreground)] hover:bg-white hover:text-[var(--color-text-primary)]"
      }`}
    >
      {label}
    </Button>
  )
}
