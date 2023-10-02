'use client'

import React, { useEffect }  from "react"

import './css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@radix-ui/themes/styles.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Theme } from '@radix-ui/themes';

import Provider from '../context/Provider';

import { Inter, Architects_Daughter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
          <Theme>
            <div className="flex flex-col min-h-screen overflow-hidden">
              <main className="grow">
                  {children}
              </main>
            </div>
          </Theme>
        </body>
      </Provider>
    </html>
  )
}
 