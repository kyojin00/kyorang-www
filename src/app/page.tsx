import Splash from '@/components/Splash'
import SiteEffects from '@/components/SiteEffects'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Flagship from '@/components/Flagship'
import MoodFeature from '@/components/MoodFeature'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Splash />
      <SiteEffects />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Flagship />
      <MoodFeature />
      <Cta />
      <Footer />
    </>
  )
}