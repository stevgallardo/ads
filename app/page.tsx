import { SiteHeader } from "@/components/site-header"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { HeroSection } from "@/components/hero-section"
import { InteractiveCards } from "@/components/interactive-cards"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <InteractiveCards />
        <PricingSection />
        <FAQSection />
        <TestimonialCarousel />
      </main>
      <Footer />
    </>
  )
}

