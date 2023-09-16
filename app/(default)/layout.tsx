'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { ReactNode } from "react"

import PageIllustration from '../../components/page-illustration'
import Footer from '../../components/ui/footer'

interface iprops {
  children: ReactNode;
}


export default function DefaultLayout({ children }: iprops){
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">
        <PageIllustration />
        {children}
      </main>
    
      <Footer />
    </>
  )
}