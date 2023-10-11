import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";

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