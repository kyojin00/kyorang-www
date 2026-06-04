import SiteEffects from '@/components/SiteEffects'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Flagship from '@/components/Flagship'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <SiteEffects />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Flagship />
      <Cta />
      <Footer />
    </>
  )
}