"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'

import { useSession } from 'next-auth/react';
import HeaderExp from '../../components/home/headerExp'
import { URL_API } from '../../utils/constants'
import Loading from "../../components/loading";

export default function SignUp() {

  const { status } = useSession()
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  // variáveis utilizadas

  const Origin = process.env.NEXT_PUBLIC_AWS_ORIGIN;
  const region = process.env.NEXT_PUBLIC_AWS_REGION ?? '';

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Cpf, setCpf] = useState('');
  const [Contact, setContact] = useState('');
  const [Password, setPassword] = useState('');

  const registerUser = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`${URL_API}/clients`, {
      method: 'POST',
      headers: {
        'Content-type': 'application-json',
        "region": region ?? '',
        "origin": Origin ?? ''
      },
      
      body: JSON.stringify({
        name: Name,
        email: Email,
        cpf: Cpf,
        password: Password,
        contact: '+55' + Contact,
      })
    });

    if (res.ok) {
      router.push("/signup/confirmCode");
    }
  }

  if(status === 'loading'){
    return <Loading />
  }
  
  return (

    <header>
      <HeaderExp />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 text-gray-100">Bem-vindo. Existimos para facilitar o crescimento do seu empreendimento.</h1>
            </div>

            {/* Form */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                      <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                      </svg>
                      <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                      <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex items-center my-6">
                <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                <div className="text-gray-400">Or, register with your email</div>
                <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
              </div>
              <form onSubmit={registerUser}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Nome<span className="text-red-600">*</span></label>
                    <input id="full-name" onChange={(e) => setName(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Primeiro nome e sobrenome" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} className="form-input w-full text-gray-300" placeholder="you@gmail.com" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Cpf <span className="text-red-600">*</span></label>
                    <input id="company-name" onChange={(e) => setCpf(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Seu CPF" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Telefone <span className="text-red-600">*</span></label>
                    <input id="company-name" onChange={(e) => setContact(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Seu telefone" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Senha <span className="text-red-600">*</span></label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} className="form-input w-full text-gray-300" placeholder="Senha (10 caracteres)" required />
                  </div>
                </div>
                <div className="text-sm text-gray-500 text-center">
                  Concordo em ser contatado pela Zeta Tecnologia sobre esta oferta de acordo com a Política de Privacidade da Zeta. <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Política de Privacidade</Link>.
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button type='submit' className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                  </div>
                </div>
              </form>
              <div className="text-gray-400 text-center mt-6">
                Já usa o Compressor | Zeta? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
              </div>
            </div>

          </div>
        </div>
        <ToastContainer />
      </section>
    </header>
  )
}