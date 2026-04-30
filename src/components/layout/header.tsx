"use client"

import { useState, useCallback, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { NAV_ITEMS, type NavItem } from "@/lib/constants/navigation"
import { scrollToSection, scrollToTop } from "@/lib/utils/scroll"
import { useScrollState, useEscapeKey, useBodyScrollLock } from "@/lib/hooks"

// ── Contact details ──────────────────────────────────────────────────────────
const PHONE_NUMBER = "+359 876 449 229‬"   
const PHONE_HREF   = "tel:+359 876 449 229‬"    
const EMAIL_HREF   = "mailto:office@recruitment.bg" 
// ─────────────────────────────────────────────────────────────────────────────


const DesktopDropdown = memo(function DesktopDropdown({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="group flex items-center gap-1.5 text-md text-[#0a3d62]/80 hover:text-[#0a3d62] transition-colors duration-200 py-1 cursor-pointer"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl py-3 px-2 transition-all duration-300 origin-top border border-slate-100 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none cursor-pointer"
        }`}
      >
        {item.dropdownItems?.map((subItem) => (
          <button
            key={subItem.label}
            onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
            className="w-full text-left px-5 py-3 text-[#0a3d62]/80 hover:text-[#0a3d62] hover:bg-[#f9f9f9] rounded-xl text-[15px] transition-colors cursor-pointer"
          >
            {subItem.label}
          </button>
        ))}
      </div>
    </div>
  )
})

const MobileDropdown = memo(function MobileDropdown({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 text-left text-lg text-white hover:text-white/80 transition-all border-b border-white/20 cursor-pointer"
      >
        {item.label}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`pl-6 mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {item.dropdownItems?.map((subItem) => (
          <button
            key={subItem.label}
            onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
            className="block py-3 text-white/90 hover:text-white w-full text-left cursor-pointer"
          >
            {subItem.label}
          </button>
        ))}
      </div>
    </div>
  )
})

export function Header() {
  const isScrolled = useScrollState()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }, [])

  useEscapeKey(closeMenu)
  useBodyScrollLock(isMenuOpen)

  const handleNavigate = useCallback((href: string, openInNewTab?: boolean) => {
    if (openInNewTab) {
      window.open(href, "_blank", "noopener,noreferrer")
    } else if (href.startsWith("#")) {
      if (window.location.pathname === "/") {
        scrollToSection(href)
      } else {
        window.location.href = "/" + href
      }
    } else {
      window.location.href = href
    }
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }, [])

  const handleDropdownToggle = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }, [])

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault()
      scrollToTop()
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
        style={{ paddingRight: "var(--scrollbar-width, 0px)" }}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 xl:px-12r">
          <nav className="relative flex items-center justify-between h-14">
            <Link href="/" onClick={handleLogoClick} className="block flex-shrink-0">
              <img
                src="/uploaded/recr-logo.png"
                alt=""
                className="h-9 lg:h-12 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation — hidden when scrolled */}
            <div
              className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-8 transition-opacity duration-300 ${
                isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {NAV_ITEMS.map((item) =>
                item.hasDropdown ? (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onToggle={() => handleDropdownToggle(item.label)}
                    onNavigate={handleNavigate}
                  />
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.href!)}
                    className="group relative text-md text-[#0a3d62]/80 hover:text-[#0a3d62] transition-colors duration-200 py-1 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}

              <Button
                onClick={() => handleNavigate("#contact")}
                className="bg-[#0a3d62] hover:bg-[#0a3d62]/90 text-white rounded-lg px-6 py-5 cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                Contact Us
              </Button>
            </div>

            {/* ── Scrolled-state: phone number + hamburger ── */}
            <div className="flex items-center gap-3">
              {/* Phone number — only visible on desktop when scrolled */}
              <a
                href={PHONE_HREF}
                className={`hidden lg:flex items-center gap-2 text-sm font-medium text-[#0a3d62]/80 hover:text-[#0a3d62] transition-all duration-300 ${
                  isScrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <Phone size={15} className="text-[#0a3d62]" />
                {PHONE_NUMBER}
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`p-2 text-foreground transition-transform duration-300 hover:scale-110 ${
                  isScrolled ? "block" : "block lg:hidden"
                }`}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile / Slide Menu */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

        <div
          className={`absolute top-0 right-0 h-full w-full lg:w-1/2 bg-[#0a3d62] shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8 pt-20 relative">
            <button
              onClick={closeMenu}
              className="absolute top-8 right-8 text-white hover:scale-110 transition-transform duration-200"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <div className="flex flex-col gap-6 text-lg text-white">
              {NAV_ITEMS.map((item) =>
                item.hasDropdown ? (
                  <MobileDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onToggle={() => handleDropdownToggle(item.label)}
                    onNavigate={handleNavigate}
                  />
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.href!)}
                    className="py-3 text-left text-lg text-white hover:text-white/80 transition-all border-b border-white/20 last:border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* ── Contact icons + button ── */}
            <div className="mt-auto pt-12 flex flex-col gap-4">
              {/* Phone & Email icons — right-aligned */}
              <div className="flex items-center justify-end gap-3">
                {/* Phone — tapping prompts the OS to call */}
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white/90 hover:text-white"
                  aria-label="Call us"
                >
                  <Phone size={16} />
                </a>

                {/* Email */}
                <a
                  href={EMAIL_HREF}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white/90 hover:text-white"
                  aria-label="Send us an email"
                >
                  <Mail size={16} />
                </a>
              </div>

              <Button
                onClick={() => handleNavigate("#contact")}
                className="w-full bg-white text-[#0a3d62] hover:bg-white/90 rounded-xl py-6 text-base font-medium cursor-pointer"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
