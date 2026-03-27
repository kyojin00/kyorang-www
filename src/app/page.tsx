import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Mission from '@/components/Mission'
import { Contact, Footer } from '@/components/ContactFooter'

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Mission />
      <Contact />
      <Footer />
    </>
  )
}