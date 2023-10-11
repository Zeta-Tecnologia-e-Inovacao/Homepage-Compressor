
export const metadata = {
  title: 'Home - Compressor | Zeta',
  description: 'Page description',
}

import Banner from '../components/home/banner'
import PageIllustration from '../components/page-illustration'
import Hero from '../components/home/hero'
import Features from '../components/home/features'
import Newsletter from '../components/home/newsletter'
import Zigzag from '../components/home/zigzag'
import Header from '../components/home/headerExp';

import Footer from '../components/home/footer'

export default function Home() {

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