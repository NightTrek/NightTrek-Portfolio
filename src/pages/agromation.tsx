import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Agromation = () => (
  <Main
    meta={
      <Meta
        title="Agromation"
        description="building an app for an equipment manufacturer"
      />
    }
  >
    <div className="my-40 flex w-full content-center justify-evenly">
      <div className="w-full max-w-4xl flex-col">
        <div className="flex flex-wrap items-end justify-between px-2 text-3xl font-bold text-white sm:flex-nowrap">
          Agromation{' '}
          <span className="px-1 text-lg text-default-500">
            Visualizing hardware data.
          </span>
        </div>
        <div className="my-10 mx-2 flex w-full flex-col-reverse flex-wrap justify-between sm:flex-row sm:flex-nowrap">
          <div className="my-4 text-lg text-slate-400">
            Agromation is an industrial automation company which manufactures
            electronics and hardware products. Agromation specializes in
            Programable Logic Controllers (PLC) for agricultural and industrial
            applications.
          </div>
          <video src="/island.webm" autoPlay muted loop width={320} />
        </div>
      </div>
    </div>
    <div className="my-10 flex h-auto w-full content-center justify-evenly bg-stone-500 py-20">
      <div className="w-full max-w-2xl flex-col">
        <div className="flex px-2 font-bold text-white">
          Agromation Grow room control
        </div>
        <div className="my-10 mx-2 flex w-full flex-col justify-between">
          <div className="my-4 text-lg text-slate-400">
            Agromation had a product for the agricultural industry which was a
            climate controlled shipping container which enabled automated
            agriculture. The system used a Siemens PLC to automatically manage
            temperature, pressure, humidity, and CO2. The challenge was that
            none of the data was accessible over the internet and users could
            not easily monitor the status remotely.
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Agromation;
