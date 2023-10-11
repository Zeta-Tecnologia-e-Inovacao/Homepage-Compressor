import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";

const LineChart = () => {
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'line',
      dropShadow: {
        enable: true,
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.6
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#0088ff', '#ff0000'],
    dataLabels: {
      enabled: true
    },

    stroke: {
      curve: 'smooth'
    },

    grid: {
      borderColor: '#ff0000',
      row: {
        colors: ['#c5d2d3', 'transparent'],
        opacity: 0.5
      }
    },

    series: [
      {
        name: "Motor Elétrico",
        data: [8, 6, 10, 12, 18]
      },
      {
        name: 'Máx Recomendável - 2023',
        data: [10, 10, 10, 10, 10]
      }
    ],

    markers: {
      size: 1
    },
    
    xAxis: {
      categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
      title: {
        text: 'Dias da semana'
      }
    },
    yAxis: {
      min: 0,
      max: 30,
      title: {
        text: 'Horas trabalhadas'
      }
    },
    title: {
      text: 'Tempo de Operação Diária',
      align: 'center'
    },
    plotOptions: {
      line: {
        dataLabels: {
            enabled: true
        },
      },
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
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
        <h3 className='text-center'>Dia da semana: {hoverData}</h3>
      </div>
    )
}

export default LineChart;