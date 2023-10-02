import { ApexOptions } from 'apexcharts';

import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function AreaChart() {
    const options: ApexOptions = {
        series: [
          {
            name: "Motor Elétrico",
            data: [18, 42, 63, 90, 125]
          },
        ],
        chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      colors: ['#0088ff'],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'straight'
      },
      
      title: {
        text: 'Tempo de Operação Acumulado',
        align: 'center'
      },

      markers: {
        size: 10
      },
      xaxis: {
        categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        title: {
            text: 'Dias da semana',
        },
      },
      yaxis: {
        min: 0,
        max: 125,
        title: {
            text: 'Tempo'
        },
      },
    };

    return (
      <> 
          <div className='bg-slate-200 max-w-full mx-auto md:max-w-none'  data-aos="fade-up" data-aos-delay="200">
              <ReactApexChart
                  options={options}
                  series={options.series}
                  type="area"
                  height={350}
              />
          </div>
      </>
    )
  
}



