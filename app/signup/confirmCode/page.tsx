"use client"

import { URL_API } from '../../../utils/constants'
import HeaderExp from '../../../components/home/headerExp'

import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function ConfirmCode() {

  const router = useRouter();

  const [email, setEmail] = useState('')
  const [ConfirmCode, setConfirmCode] = useState('');

  const registerUser = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`${URL_API}/clients/auth/confirmation-email`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        confirmationCode: ConfirmCode,
      }),
    });

    if (res.ok) {
      router.push("/signin");
    }
  }
  return (

    <header>
      <HeaderExp />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 text-white">Verifique seu e-mail e insira o código abaixo</h1>
            </div>

            {/* Form */}
            <div className="max-w-sm mx-auto">
              <form onSubmit={registerUser}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Email<span className="text-red-600">*</span></label>
                    <input id="email" onChange={(e) => setEmail(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Seu telefone" required />
                  </div>
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Código de Confirmação<span className="text-red-600">*</span></label>
                    <input id="confirmation-code" onChange={(e) => setConfirmCode(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Seu telefone" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button type='submit' className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Enviar</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        <ToastContainer />
      </section>
    </header>
  )
}