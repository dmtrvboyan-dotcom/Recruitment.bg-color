"use client"

import { memo, useCallback } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { FOOTER_LINKS, SOCIAL_LINKS, COMPANY_INFO } from "@/lib/constants/footer"
import { scrollToSection } from "@/lib/utils/scroll"

const FooterLinkSection = memo(function FooterLinkSection({
  title,
  links,
  onNavigate,
}: {
  title: string
  links: { label: string; href: string }[]
  onNavigate: (href: string) => void
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#0a3d62]">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("/") ? (
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#0a3d62]/60 hover:text-[#0a3d62] text-left transition-colors cursor-pointer block"
              >
                {link.label}
              </Link>
            ) : (
              <button
                onClick={() => onNavigate(link.href)}
                className="text-sm text-[#0a3d62]/60 hover:text-[#0a3d62] text-left transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
})

const SocialLinks = memo(function SocialLinks({ phoneHref }: { phoneHref: string }) {
  return (
    <div className="flex items-center gap-4">
      {/* Phone icon — only on mobile, sits alongside social icons */}
      <a
        href={phoneHref}
        aria-label="Call us"
        className="md:hidden w-10 h-10 rounded-lg bg-[#0a3d62]/10 flex items-center justify-center hover:bg-[#0a3d62]/20 transition-all group cursor-pointer"
      >
        <Phone className="w-5 h-5 text-[#0a3d62] group-hover:scale-110 transition-transform" />
      </a>

      {SOCIAL_LINKS.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-10 h-10 rounded-lg bg-[#0a3d62]/10 flex items-center justify-center hover:bg-[#0a3d62]/20 transition-all group cursor-pointer"
            aria-label={social.label}
          >
            <IconComponent className="w-5 h-5 text-[#0a3d62] group-hover:scale-110 transition-transform" />
          </a>
        )
      })}
    </div>
  )
})

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href, { highlightDuration: 1400, highlightColor: "rgba(8, 86, 137, 0.25)" })
  }, [])

  return (
    <footer className="bg-[#f9f9f9] text-[#0a3d62] border-t border-slate-200 mt-[-150px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand / Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/uploaded/recr-logo.png"
                alt={COMPANY_INFO.name}
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-[#0a3d62]/80 text-sm leading-relaxed mb-2 max-w-xs">
              {COMPANY_INFO.description}
            </p>

            <p className="text-[#0a3d62] font-medium text-sm mb-4">
              {COMPANY_INFO.location}
            </p>

            {/* Phone — icon + number on desktop only */}
            <a
              href={COMPANY_INFO.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-sm text-[#0a3d62]/60 hover:text-[#0a3d62] transition-colors mb-6 group"
            >
              <Phone className="w-4 h-4 text-[#0a3d62] flex-shrink-0" />
              <span>{COMPANY_INFO.phoneNumber}</span>
            </a>

            <SocialLinks phoneHref={COMPANY_INFO.phoneHref} />
          </div>

          <FooterLinkSection
            title="Services"
            links={FOOTER_LINKS.services}
            onNavigate={handleNavigate}
          />

          <FooterLinkSection
            title="Company"
            links={FOOTER_LINKS.company}
            onNavigate={handleNavigate}
          />

          <FooterLinkSection
            title="For Candidates"
            links={FOOTER_LINKS.candidates}
            onNavigate={handleNavigate}
          />
        </div>

        <Separator className="my-12 bg-slate-200" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-[#0a3d62]/60">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[#0a3d62]/60 hover:text-[#0a3d62] transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#0a3d62]/60 hover:text-[#0a3d62] transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
