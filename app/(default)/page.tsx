export const metadata = {
    title: 'Home - Compressor | Zeta',
    description: 'Page description',
  }

import Head from 'next/head';
import Hero from '../../components/hero'
import Features from '../../components/features'
import Newsletter from '../../components/newsletter'
import Zigzag from '../../components/zigzag'
import Header from '../../components/ui/header';
  
  export default function Home() {
    return (
      <>
        <Head>
          <title>Zeta | Tecnologia e Inovação</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content='Desenvolvemos soluções inteligentes, inovadoras e dispositivos IoT com integração na nuvem e inteligência artificial.' />
          <meta name='keywords' content='IoT, nuvem, inteligencia artificial, automação, web, frontend, backend, eletronica' />
          <meta name='author' content='Zeta T&I' />
          <meta name='robots' content='index,follow' />
          <meta name='language' content='Portuguese' />
          <meta name='revisit-after' content='7 days' />
          <meta property='og:title' content=' Compressor Inteligente - Zeta' />
          <meta property='og:description' content='Desenvolvemos soluções inteligentes, inovadoras e dispositivos IoT com integração na nuvem e inteligência artificial' />
          <link rel='icon' href='/images/logo.svg' />
        </Head>
        <Header />
        <Hero />
        <Features />
        <Zigzag />
        <Newsletter />
      </>
    )
  }