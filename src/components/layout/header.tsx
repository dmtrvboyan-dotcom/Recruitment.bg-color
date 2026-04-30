"use client"

import { useState, useCallback, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { NAV_ITEMS, type NavItem } from "@/lib/constants/navigation"
import { scrollToSection, scrollToTop } from "@/lib/utils/scroll"
import { useScrollState, useEscapeKey, useBodyScrollLock } from "@/lib/hooks"

// ── Palette (via globals.css @theme tokens) ───────────────────────────────
// text-brand-navy        #1A1A2E   primary text, borders
// text-brand-coral       #ff5d77   eyebrow, CTAs, highlights
// text-brand-blue        #085689   headline accent
// bg-brand-navy          #1A1A2E   menu panel, button fill
// bg-brand-coral         #ff5d77   CTA buttons
// bg-brand-coral-hover   #e0405c   hover state
// bg-brand-bg            #f9f9f9   page background
// border-brand-coral     #ff5d77   dropdown top border, icon hover
// ─────────────────────────────────────────────────────────────────────────

const PHONE_NUMBER = "+359 876 449 229"
const PHONE_HREF   = "tel:+35987644929"
const EMAIL_HREF   = "mailto:office@recruitment.bg"

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
    <div className="relative">
      <button
        onClick={onToggle}
        className="group flex items-center gap-1.5 text-sm font-medium tracking-wide text-brand-navy/75 hover:text-brand-coral transition-colors duration-200 py-1 cursor-pointer uppercase"
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel — thin coral top border */}
      <div
        className={`absolute top-full left-0 mt-4 w-52 bg-card rounded-sm shadow-lg border-t-2 border-brand-coral py-2 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {item.dropdownItems?.map((subItem) => (
          <button
            key={subItem.label}
            onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
            className="w-full text-left px-5 py-2.5 text-sm text-brand-navy/80 hover:text-brand-coral hover:bg-brand-bg transition-colors cursor-pointer tracking-wide"
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
        className="flex items-center justify-between w-full py-4 text-left text-base font-medium tracking-widest uppercase text-white/90 hover:text-brand-coral transition-colors border-b border-white/10 cursor-pointer"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`pl-5 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100 pt-1 pb-2" : "max-h-0 opacity-0"
        }`}
      >
        {item.dropdownItems?.map((subItem) => (
          <button
            key={subItem.label}
            onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
            className="block py-2.5 text-sm text-white/70 hover:text-white w-full text-left tracking-wide cursor-pointer"
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
          isScrolled
            ? "bg-transparent backdrop-blur-sm py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
            : "bg-transparent py-6"
        }`}
        style={{ paddingRight: "var(--scrollbar-width, 0px)" }}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 xl:px-12">
          <nav className="relative flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" onClick={handleLogoClick} className="block flex-shrink-0">
              <img
                src="/uploaded/recr-logo.png"
                alt=""
                className="h-9 lg:h-11 w-auto transition-all duration-300"
              />
            </Link>

            {/* ── Desktop nav — hidden when scrolled ── */}
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
                    className="text-sm font-medium tracking-wide uppercase text-brand-navy/75 hover:text-brand-coral transition-colors duration-200 py-1 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}

              <Button
                onClick={() => handleNavigate("#contact")}
                className="bg-brand-navy hover:bg-navy-button-hover text-white rounded-3xl px-7 py-5 text-sm font-medium tracking-widest uppercase cursor-pointer transition-colors duration-200"
              >
                Contact Us
              </Button>
            </div>

            {/* ── Scrolled: phone + hamburger ── */}
            <div className="flex items-center gap-4">
              <a
                href={PHONE_HREF}
                className={`hidden lg:flex items-center gap-2 text-sm font-medium text-brand-navy/70 hover:text-brand-coral transition-all duration-300 ${
                  isScrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <Phone size={14} className="text-brand-coral" />
                {PHONE_NUMBER}
              </a>

              <button
                onClick={() => setIsMenuOpen(true)}
                className={`p-2 text-brand-navy hover:text-brand-coral transition-colors duration-200 ${
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

      {/* ── Slide-over menu ── */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full lg:w-[480px] shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "linear-gradient(160deg, #1A1A2E 0%, #2C3E50 100%)",
          }}
        >
          {/* Coral accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-coral" />

          <div className="flex flex-col h-full p-8 pt-20 relative">
            {/* Close */}
            <button
              onClick={closeMenu}
              className="absolute top-7 right-7 text-white/60 hover:text-white transition-colors duration-200"
            >
              <X size={22} strokeWidth={2} />
            </button>

            {/* Nav items */}
            <div className="flex flex-col gap-1 text-base text-white">
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
                    className="py-4 text-left text-base font-medium tracking-widest uppercase text-white/90 hover:text-brand-coral transition-colors border-b border-white/10 last:border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* Bottom area */}
            <div className="mt-auto pt-10 flex flex-col gap-5">

              {/* Contact icons */}
              <div className="flex items-center gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  aria-label="Call us"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-brand-coral transition-colors">
                    <Phone size={14} />
                  </span>
                  <span>{PHONE_NUMBER}</span>
                </a>

                <a
                  href={EMAIL_HREF}
                  className="ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-brand-coral transition-colors"
                  aria-label="Send us an email"
                >
                  <Mail size={14} />
                </a>
              </div>

              {/* CTA */}
              <Button
                onClick={() => handleNavigate("#contact")}
                className="w-full bg-brand-coral hover:bg-brand-coral-hover text-white rounded-3xl py-6 text-sm font-medium tracking-widest uppercase cursor-pointer transition-colors duration-200"
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
