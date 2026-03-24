import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Mission />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}