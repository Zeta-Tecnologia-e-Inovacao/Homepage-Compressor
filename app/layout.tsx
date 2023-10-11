'use client'

import React, { useEffect }  from "react"

import './css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@radix-ui/themes/styles.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Theme } from '@radix-ui/themes';
import { SessionProvider } from "next-auth/react"
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


export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
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
      <SessionProvider session={session}>
        <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
          <Theme>
            <div className="flex flex-col min-h-screen overflow-hidden">
              <main className="grow">
                  {children}
              </main>
            </div>
          </Theme>
        </body>
      </SessionProvider>
    </html>
  )
}
 