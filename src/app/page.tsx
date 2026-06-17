import { redirect } from 'next/navigation'

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

interface PageProps {
  searchParams: Promise<{ code?: string; type?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams

  // Supabase 이메일 인증 콜백 — ?code=... 있으면 /confirmed로 자동 이동
  // (Site URL이 kyorang.com이라 인증 메일이 일단 여기로 옴)
  if (params.code) {
    redirect(`/confirmed?code=${params.code}`)
  }

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