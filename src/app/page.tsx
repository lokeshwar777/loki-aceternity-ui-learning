import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import TestimonialCards from '@/components/TestimonialCards'
import WhyChooseUs from '@/components/ui/WhyChooseUs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-3xl text-center">Loki Music Academy</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
    </main>
  )
}
