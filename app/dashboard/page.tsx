'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Loading from '../../components/loading';

import Header from "../../components/dashboard/header";
import Hero from "../../components/dashboard/heroDashboard";
import Zigzag from "../../components/dashboard/zigzag";


export const metadata = {
  title: 'Dashboard - Compressor - Zeta',
  description: 'Page description',
}

export default function Dashboard() {

  const { data: session, status } = useSession();
  const router = useRouter();

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

  if(status === 'unauthenticated') {
    router.push('/signin')
  }

  if (status === "loading") {
    <Loading />
  }

  if (status === 'authenticated'){
    return (
      <div className="bg-white">
        <Header />
        <Hero />
        <Zigzag />
      </div>
    )
  }
}