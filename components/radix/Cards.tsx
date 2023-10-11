import React from 'react';
import Image from 'next/image';

 

const Cards = () => (

  <>
  <section id='compressor'>
    {/* Items */}
    <div className="grid grid-cols-4 gap-4">

      <div className="max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 text-center text-sm md:text-base font-semibold tracking-tight text-blue-800" >Tempo ligado em utilização</h5>
        <p className="mb-3 text-center font-bold text-black">130 Horas</p>
      </div>

      <div className="max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 text-center font-semibold tracking-tight text-blue-800" >Tempo ligado em utilização</h5>
        <p className="mb-3 text-center font-bold text-black">130 Horas</p>
      </div>
      <div className="max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 text-center font-semibold tracking-tight text-blue-800 ">Tempo energizado em uso</h5>
        <p className="mb-3 text-center font-bold text-gray-700 dark:text-gray-400">70 Horas</p>
      </div>
      <div className="max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow">
        <h5 className="mb-2 text-center font-semibold tracking-tight text-blue-800">Chaveamento elétrico</h5>
        <p className="mb-3 text-center font-bold text-gray-700 dark:text-gray-400">7</p>
      </div> 
      <div className="max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow"> 
        <h5 className="mb-2 text-center font-semibold tracking-tight text-blue-800">Tempo ligado em utilização</h5>
        <p className="mb-3 text-center font-bold text-gray-700 dark:text-gray-400">130 Horas</p>
      </div>
    </div>
  </section>
    
  </>
);

export default Cards;