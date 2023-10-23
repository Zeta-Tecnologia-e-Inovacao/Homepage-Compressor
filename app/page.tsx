'use client' 

import Banner from '../components/home/banner'
import PageIllustration from '../components/page-illustration'
import Hero from '../components/home/hero'
import Features from '../components/home/features'
import Newsletter from '../components/home/newsletter'
import Zigzag from '../components/home/zigzag'
import Header from '../components/home/header';
import Footer from '../components/home/footer'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'

export default function Home() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return (
    
    <>
      <PageIllustration />
      <Header />
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
      <Footer />
      <Banner />
    </>
  )
}