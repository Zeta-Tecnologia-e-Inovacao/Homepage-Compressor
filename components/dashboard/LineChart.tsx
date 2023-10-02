import { ApexOptions } from 'apexcharts'

import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LineChart() {
    const options: ApexOptions = {
        series: [
        {
          name: "Máx Recomendável - 2023",
          data: [10, 10, 10, 10, 10],
        },
        {
          name: "Motor Elétrico",
          data: [8, 6, 10, 12, 18]
        }
      ],
        chart: {
        height: 300,
        width: 200,
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#ff0000', '#0088ff'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Tempo de operação diária',
        align: 'center',

      },
      grid: {
        borderColor: '#ff0000',
        row: {
          colors: ['#c5d2d3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        title: {
          text: 'Dias na semana'
        }
      },
      yaxis: {
        title: {
          text: 'Horas trabalhadas'
        },
        min: 0,
        max: 30
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  
    return (
      <> 
          <div className='bg-slate-200 max-w-full mx-auto md:max-w-none' data-aos="fade-up" data-aos-delay="200">
              <ReactApexChart
                  options={options}
                  series={options.series}
                  type="line"
                  height={300}
              />
          </div>
      </>
    )
}



