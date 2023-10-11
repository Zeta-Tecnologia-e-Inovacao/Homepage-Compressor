'use client';

import { useSession } from "next-auth/react";
import { useState } from 'react'
import HoverCardDemo from "../radix/Cards";

export default function Hero() {
    const { data: session, status } =  useSession();
    

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h1 className="h1 mb-4 text-gray-800" data-aos="fade-up">Bem vindo de volta, <br /> {session?.user?.name}</h1>
            <p className="text-xl text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="200">
              Visualize em tempo real os dados para controle e análise do seu compressor e mantenha a saúde do seu aparelho em dia!</p>
              
              <HoverCardDemo />

              <div>
                <button type="button" className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
                  Cadastrar novo compressor
                </button>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}