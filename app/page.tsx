'use client'

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import WorksSection from '@/components/sections/WorksSection'
import ContactSection from '@/components/sections/ContactSection'
import FloatingElements from '@/components/FloatingElements'

export default function Home() {
  return (
    <div className="relative">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </div>
  )
}
