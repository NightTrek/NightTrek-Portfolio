import ButtonBright, { ButtonStyles } from '@/components/ButtonBright';
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
            Nugbase is a web3 software company building blockchain experiences
            from scratch. Founded in 2018 the team began work on flowerpatch a
            multiplayer NFT farming game. Nugbase specializes in the building
            games using state of the art NFT technology. At the time there was
            no blockchain infrastructure providers and the team had to build
            everything from scratch. Everything from custom smart contracts to
            automated transaction and indexing services. Nugbases technical
            expertise has since been used to power many other blockchain
            projects.
          </div>
          <video src="/island.webm" autoPlay muted loop width={320} />
        </div>
      </div>
    </div>
    <div className="my-10 flex h-max w-full content-center justify-evenly bg-gradient-to-b from-nugbasePurple-300 to-nugbasePurple-400 bg-top bg-no-repeat py-20 sm:bg-fp-background">
      <div className="w-full max-w-2xl flex-col ">
        <div className="flex px-2 font-bold text-white">Flowerpatch</div>
        <div className="my-2 flex w-full flex-col justify-between">
          <div className="my-2 text-lg text-slate-200">
            <p className="px-2">
              Flowerpatch is a Multiplayer online NFT farming game built for the
              web. The game is centered around growing and breeding FLOWER NFTs
              in a multiplayer world. Grow your garden, fight the forces of
              evil, or join the cultists to corrupt the world.{' '}
            </p>
            <p className="px-2">
              Flowerpatch launched in early 2018 on ethereum and grew to over
              20,000 NFTs. Over 80% of the NFTs on ethereum were from users
              breeding on the platform. The gas costs on ethereum drove the
              project multi-chain, and the project was deployed on polygon.
              Flowerpatch was the 5th NFT project on the Polygon OpenSea store
              and one of the largest Collections on polygon with over 150,000
              FLOWERs on polygon alone.
            </p>
          </div>
          <div className="flex w-full justify-end px-4">
            <ButtonBright
              externalURL="https://flowerpatch.app"
              title="Try our game"
              style={ButtonStyles.FLOWERPATCH}
            />
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Nugbase;
