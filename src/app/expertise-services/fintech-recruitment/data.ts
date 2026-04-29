import { CreditCard, ShieldCheck, BarChart3, Briefcase, Box, Handshake,   Monitor, Smartphone, Layers, Server,
  BrainCircuit, DatabaseZap, BarChart2, Calculator,
  ShieldAlert, CloudCog, Bug, KeyRound,
  FileSearch, ClipboardList, TrendingUp, Plug,
  FileWarning, ScanFace, FileStack, Lock,
  Cpu, Cloud, GitBranch, Database,
  Link, FileCode2, LineChart, Zap, } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface HeroData {
  tagline: string
  title: string
  description: string
  subDescription: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface BulgariaStrengthsData {
  items: string[]
}

export interface WhatWeHireItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface RoleItem {
  title: string
}

export interface RoleCategory {
  tagline: string
  icon: LucideIcon
  color: string
  iconBg: string
  roles: RoleItem[]
}

export interface CtaData {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

export const HERO_DATA: HeroData = {
  tagline: "Fintech Recruitment",
  title: "Fintech Recruitment & Hiring",
  description:
    "The fintech sector is growing rapidly, and the need for experienced professionals is growing with it.",
  subDescription:
    "",
}

export const BULGARIA_STRENGTHS_HEADER: SectionHeader = {
  tagline: "Why Bulgaria",
  title: "Bulgaria Has Strong Development In",
}

export const BULGARIA_STRENGTHS: BulgariaStrengthsData = {
  items: [
    "Blockchain & Web3 technologies",
    "Payments infrastructure & processing",
    "Cybersecurity solutions",
    "Data & AI applications",
    "Digital Banking & Neobanks",
    "Trading Platforms & Brokerage",
    "Fraud Detection & Risk Systems",
    "Open Banking & APIs",
  ],
}

export const WHAT_WE_HIRE_HEADER: SectionHeader = {
  tagline: "Our Focus",
  title: "Roles We Hire",
}

export const WHAT_WE_HIRE: WhatWeHireItem[] = [
  {
    icon: CreditCard,
    title: "Backend (Payments, API)",
    description:
      "Experienced backend engineers specializing in payment systems, API development, and financial integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description:
      "Professionals with expertise in regulatory compliance, risk management, and financial security.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Data scientists and analysts who drive insights and decision-making in financial technology.",
  },
  {
    icon: Briefcase,
    title: "Product Roles",
    description:
      "Product managers and owners with fintech domain expertise and a track record of shipping products.",
  },
  {
    icon: Box,
    title: "Product Roles",
    description:
      "Strategic product leaders who align business goals, customer needs, and execution across teams.",
  },
  {
    icon: Handshake,
    title: "Customer Success & Operations",
    description:
      "Specialists in client success, onboarding, and operational excellence across fintech platforms.",
  },
]

export const FULL_TALENT_HEADER: SectionHeader = {
  tagline: "Full Talent Spectrum",
  title: "Every Fintech Role, Covered",
}

export const FULL_TALENT_SUBTITLE =
  "From foundational engineering to trading systems — we place specialists across the entire fintech stack."

export const ROLE_CATEGORIES: RoleCategory[] = [
  {
    tagline: "Core Engineering",
    icon: Monitor,
    color: "text-[#0c447c]",
    iconBg: "bg-[#dbeeff]",
    roles: [
      { title: "Frontend Engineers (Trading UI, Dashboards)" },
      { title: "Mobile Engineers (iOS / Android Banking Apps)" },
      { title: "Full-stack Engineers (Fintech Platforms)" },
      { title: "Platform Engineers (Scalability, Infra)" },
    ],
  },
  {
    tagline: "Data & AI",
    icon: BrainCircuit,
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
    roles: [
      { title: "Machine Learning Engineers (Fraud Detection)" },
      { title: "Data Engineers (Pipelines, Real-time)" },
      { title: "BI Analysts (Financial Insights, Reporting)" },
      { title: "Quantitative Analysts (Risk Modeling, Pricing)" },
    ],
  },
  {
    tagline: "Security",
    icon: ShieldAlert,
    color: "text-[#712b13]",
    iconBg: "bg-[#fce8e1]",
    roles: [
      { title: "Application Security Engineers" },
      { title: "Cloud Security Engineers" },
      { title: "Penetration Testers (Ethical Hackers)" },
      { title: "Identity & Access Management (IAM) Specialists" },
    ],
  },
  {
    tagline: "Product & Business",
    icon: ClipboardList,
    color: "text-[#633806]",
    iconBg: "bg-[#fef3da]",
    roles: [
      { title: "Business Analysts (Fintech / Payments)" },
      { title: "Product Owners (Agile Fintech Teams)" },
      { title: "Growth / Monetization Managers" },
      { title: "Partnerships / Integration Managers" },
    ],
  },
  {
    tagline: "Compliance & Legal",
    icon: FileWarning,
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
    roles: [
      { title: "Risk & Compliance Managers" },
      { title: "AML / KYC Analysts" },
      { title: "Regulatory Reporting Specialists" },
      { title: "Data Protection Officers (GDPR)" },
    ],
  },
  {
    tagline: "Infrastructure & Ops",
    icon: Server,
    color: "text-[#27500a]",
    iconBg: "bg-[#eaf3de]",
    roles: [
      { title: "Site Reliability Engineers (SRE)" },
      { title: "Cloud Engineers (AWS / GCP / Azure)" },
      { title: "DevSecOps Engineers" },
      { title: "Database Engineers (High-throughput Systems)" },
    ],
  },
  {
    tagline: "Trading & Crypto",
    icon: Zap,
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
    roles: [
      { title: "Blockchain Engineers" },
      { title: "Smart Contract Developers" },
      { title: "Crypto Analysts" },
      { title: "Trading System Engineers (Low-latency)" },
    ],
  },
]

export const CTA_DATA: CtaData = {
  title: "Ready to Hire Fintech Specialists?",
  description:
    "Let us connect you with experienced fintech professionals who can drive your business forward.",
  primaryButton: {
    text: "Hire Fintech Specialists",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Request for Candidates",
    href: "/#companies",
  },
}
