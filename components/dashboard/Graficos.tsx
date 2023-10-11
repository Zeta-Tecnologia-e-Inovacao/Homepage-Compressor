import Card from "./CardDashboard"
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";

export default function GraficosDashboard() {

  return (
    <>
      <section className="grid gap-20">
        <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto sm:col-span-2 md:col-span-6 lg:col-span-6 mb-10 bg-white shadow rounded-lg">
            <div className='md:pr-4 lg:pr-12 xl:pr-16'>
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Tempo de operação acumulado</div>
              <div className="p-2 max-w-full mx-auto md:max-w-none h-auto">
                <AreaChart />
              </div>
            </div>
          </div>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto sm:col-span-2 md:col-span-6 lg:col-span-6 mb-10 bg-white shadow rounded-lg">
            <div className='md:pr-4 lg:pr-12 xl:pr-16'>
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Tempo de utilização por hora</div>
              <div className="p-2 max-w-full mx-auto md:max-w-none h-auto">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}