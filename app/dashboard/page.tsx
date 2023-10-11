'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Loading from '../../components/loading';

import Header from "../../components/dashboard/header";
import Hero from "../../components/dashboard/Hero";
import Card from '../../components/dashboard/CardDashboard'
import DadosCompressor from "../../components/dashboard/DadosComp";
import Grafico from "../../components/dashboard/Graficos";


import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'

export const dynamic = 'force-static'

export default function Dashboard() {

  const { status } = useSession();
  const router = useRouter();

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);
  // async function fetchData() {

  //   const res = await fetch(`${URL_API}/compressors/${session?.user?.id}`, {
  //     method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //   });

  //   const resp = await res.json();

  //   if(resp !== null){
  //     const { temperatura, umidade } = resp;
  //   }
  // }

  // fetchData();

  // if(status === 'unauthenticated') {
  //   router.push('/signin')
  // }

  if (status === 'unauthenticated'){
    router.push('/signin', { scroll: false })
  }

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'authenticated'){
    return (
      <>
        <section className="flex bg-gray-100">

          {/* ========= */}
          <div className="flex-grow text-gray-800">
            {/*  */}
            <Header />
            {/*  */}
            <main className="p-6 sm:p-12 space-y-6 ">
              <Hero />
              <Card />
              <DadosCompressor />
              <Grafico />
            </main>
          </div>
        </section>
      </>
    )
  }
}