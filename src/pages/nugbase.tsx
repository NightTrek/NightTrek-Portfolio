import ButtonBright from '@/components/ButtonBright';
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
      <div className="w-full max-w-4xl flex-col">
        <div className="flex flex-wrap items-end justify-between px-2 text-3xl font-bold text-white sm:flex-nowrap">
          Nugbase{' '}
          <span className="px-1 text-lg text-default-500">
            Creators of innovative blockchain experiences.
          </span>
        </div>
        <div className="my-10 mx-2 flex w-full flex-col-reverse flex-wrap justify-between sm:flex-row sm:flex-nowrap">
          <div className="my-4 text-lg text-slate-400">
            Nugbase is a web3 software company specializing in game devlopment
            and NFT technology. Nugbase builds blockchain products for builders
            and real people.
          </div>
          <video src="/island.webm" autoPlay muted loop width={320} />
        </div>
      </div>
    </div>
    <div className="h-120 my-10 flex w-full content-center justify-evenly bg-purple-700 py-20 sm:h-96 sm:bg-fp-background">
      <div className="w-full max-w-2xl flex-col">
        <div className="flex px-2 font-bold text-white">Flowerpatch</div>
        <div className="my-10 mx-2 flex w-full flex-col justify-between">
          <div className="my-4 text-lg text-slate-400">
            Flowerpatch is web game about growing and breeding FLOWER NFTs in a
            multiplayer world. Grow your garden, fight the forces of evil, or
            join the cultists to corrupt the world.
          </div>
          <div className="flex w-full justify-end px-4">
            <ButtonBright
              externalURL="https://flowerpatch.app"
              title="Try the game"
            />
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Nugbase;
