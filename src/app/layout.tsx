import type { Metadata, Viewport } from "next"
import { Inter, Fira_Code, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Most commonly used weights
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "IT recruitment agency and services in Bulgaria for companies hiring IT professionals",
  description:
    "Bulgaria's premier executive search and IT headhunting agency. We connect top talent with leading companies through personalized recruitment solutions.",
  keywords: [
    "recruitment",
    "bulgaria",
    "headhunting",
    "executive search",
    "IT recruitment",
    "tech talent",
    "HR consulting",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "IT recruitment agency in Bulgaria & executive headhunting",
    description:
      "Bulgaria's premier executive search and IT headhunting agency.",
    type: "website",
    locale: "en_US",
    siteName: "Recruitment.bg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment.bg - Executive Search & IT Headhunting",
    description:
      "Bulgaria's premier executive search and IT headhunting agency.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${firaCode.variable} bg-[#f9f9f9]`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased bg-[#f9f9f9]">{children}</body>
    </html>
  )
}
