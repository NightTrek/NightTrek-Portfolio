import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Nugbase = () => (
  <Main
    meta={
      <Meta
        title="Nugbase"
        description="Creators of innovative blockchain experiences"
      />
    }
  >
    <div className="my-40 flex w-full content-center justify-evenly">
      <div className="w-full max-w-3xl flex-col">
        <div className="flex flex-wrap px-2 text-3xl font-bold text-white sm:flex-nowrap">
          Nugbase{' '}
          <span className="text-lg text-default-500">
            Creators of innovative blockchain experiences.
          </span>
        </div>
        <div className="flex w-full flex-row-reverse flex-wrap justify-between sm:flex-row">
          <div className="my-4 text-lg text-slate-400">
            Nugbase is a web3 software company specializing in game devlopment
            and NFT technology.
          </div>
          <video src="/island.webm" autoPlay muted loop width={320} />
        </div>
      </div>
    </div>
  </Main>
);

export default Nugbase;
