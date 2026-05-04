import { Suspense } from "react"

// Common components
import {
  Header,
  Footer,
  ScrollReveal,
  SocialSidebar,
} from "@/components/layout"

// Landing page feature components
import {
  Hero,
  Services,
  SpecializedRecruitment,
  TrustedBySection,
  CompaniesSection,
  SmartRSection,
  CandidatesSection,
  JobsSection,
  FAQSection,
  MeetTheTeam,
  CallToAction,
  ContactForm,
  ExpertiseSection,
} from "@/app/_components"
import { PageBackground } from "@/components/layout/page-background"

/**
 * Landing page component for Recruitment.bg
 * Organized with clear section structure and lazy-loaded sections for performance
 */
export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      {/* <DynamicBackground /> */}



      {/* Fixed elements */}
      <Header />
      <SocialSidebar />

          <PageBackground />

      {/* Hero Section */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

          <ScrollReveal>
        <TrustedBySection />
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal>
        <Services />
      </ScrollReveal>

      {/* Specialized Recruitment */}
      <ScrollReveal>
        <SpecializedRecruitment />
      </ScrollReveal>

      {/* Trust Metrics */}

      {/* Companies Section */}
      <ScrollReveal>
        <CompaniesSection />
      </ScrollReveal>

      {/* Smart.R Platform */}
      <ScrollReveal>
        <SmartRSection />
      </ScrollReveal>

      {/* { Our Expertise } */}
      <ScrollReveal>
        <ExpertiseSection />
      </ScrollReveal>

      {/* For Candidates */}
      {/* <ScrollReveal>
        <CandidatesSection />
      </ScrollReveal> */}

      {/* Job Listings */}
      <Suspense fallback={<div className="min-h-150" />}>
        <ScrollReveal>
          <JobsSection />
        </ScrollReveal>
      </Suspense>

      {/* FAQ Section */}
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      {/* Meet the Team */}
      <ScrollReveal>
        <MeetTheTeam />
      </ScrollReveal>

      {/* Contact Form */}
      <ScrollReveal>
        <CallToAction />
      </ScrollReveal>


      {/* Footer */}
      <Footer />
    </main>
  )
}
