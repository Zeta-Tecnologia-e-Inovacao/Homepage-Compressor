'use client'

import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";

import { URL_API } from '../../utils/constants'; 
import { useSession } from 'next-auth/react';

const AreaChart = () => {
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'area',
    },
    xAxis: {
      categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
      title: {
        text: 'Dias da semana'
      }
    },
    yAxis: {
      min: 0,
      max: 125,
      title: {
        text: 'Tempo'
      }
    },
    title: {
      text: 'Tempo de operação acumulado'
    },
    series: [
      { 
        name: "Motor Elétrico",
        data: [18, 42, 63, 90, 125]
      }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e: any){
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  const { data: session } = useSession();

  const [grafico1, graficoAcumulado] = useState()
  const [grafico2, graficoDiario] = useState()

  async function buscarDadosCompressor(){
    const resposta = await fetch(`${URL_API}/compressors/client/${session?.user.id}`, {
        method: 'GET',
    });
    
    if(resposta.ok){
        const dadosCompressor = await resposta.json();
        const { id }: any = dadosCompressor.data[0];
        buscarLogs(id)
    } else {
        console.error('Erro ao buscar dados do compressor:', resposta.status);
    }

   
}
// =========================================================================

async function buscarLogs(idCompressor: any){
    const url = `${URL_API}/compressors/${idCompressor}/logs`

    fetch(url)
    .then(response => response.json())
    .then(resp => {
        console.log('Dados recebidos:', resp);

        const Acumulado  = resp.daily_runtime_accumulated
        graficoAcumulado(Acumulado)

        const Diario = resp.daily_runtime
        graficoDiario(Diario)
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
};
    

    //   --------------------------------------------------------------------

buscarDadosCompressor();

  return (
      <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
        <h3 className='text-center'>Dia da semana: {hoverData}</h3>
      </div>
    )
}
export default AreaChart;