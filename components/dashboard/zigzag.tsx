"use client"

import { useSession } from "next-auth/react";
import { useState } from 'react'
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import TablePage from "../radix/table";
import { Progress } from "@material-tailwind/react";

import { URL_API } from "../../utils/constants";

export default function Zigzag() {

  const { data: session } = useSession();


  const [value, setValue] = useState<string>('');
  function handleData(){
    const data = new Date()

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const today = dia + "/" + mes + "/" + ano;

    setValue(today)
  }

  // const formCompressor = async (e: any) => {
  //   e.preventDefault();

  //   const res = await fetch(`${URL_API}/compressors/${session?.IdToken}`, {
  //     method: 'GET',
  //   });

  //   const resp = res.json();
  //   const { name, serial_number } = resp.data;

  // }

  return (
    <section id='compressor'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 " data-aos="fade-up" data-aos-delay="200">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-blue-600 bg-blue-200 rounded-full mb-4">Painel de Controle</div>
            <h1 className="h2 mb-4">Esteja ciente do que o seu compressor está fazendo</h1>
            <p className="text-xl text-gray-400">As informações abaixo servem para você visualizar todos os aspectos importantes que o seu compressor disponibiliza</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-5 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Progress value={80} label="Saúde" className='max-w-full mx-auto md:max-w-none h-[70px]' />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-7" data-aos="fade-right">
                <TablePage />
              </div>
            </div>

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-5" data-aos="fade-right">
                <LineChart />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-7" data-aos="fade-right">
                <AreaChart />
              </div>
            </div>
          </div>

          <div id='manutencao'>
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-blue-600 bg-blue-200 rounded-full mb-4">Painel de Manutenção</div>
                <h1 className="h2 mb-4">Manutenção Preditiva</h1>
                <p className="text-xl text-gray-400">A partir do painel abaixo, você não terá que se preocupar com a manutenção de seu produto. Nós mesmos recomendamos a manutenção preditiva</p> 
              </div>


              <div className="relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
                  <div className="p-6 bg-gray-100 border'gray-200 shadow border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
                    <div className='mt-20 mb-15'>
                      <a href="#">
                          <h5 className=" text-xl h3 mb-2 text-center font-bold tracking-tight text-black">Data de Correção Preditiva do compressor</h5>
                      </a>
                      <p className="h4 mb-10 text-center font-bold text-black ">{value}</p>
                    </div>

                    <button onClick={handleData} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Confirmar Correção
                    </button>

                    <div className='mt-20'>
                      <a href="#">
                          <h5 className="text-xl h3 mb-2 text-center font-bold tracking-tight text-black">Data da próxima Manutenção Preditiva do compressor</h5>
                      </a>
                      <p className="h4 mb-3 text-center font-bold text-black ">{value}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
