import ButtonBright from '@/components/ButtonBright';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const MintNFT = () => (
  <Main
    meta={<Meta title="Generate art" description="Generate your own NFT" />}
  >
    <div className="my-40 flex w-full content-center justify-evenly">
      <div className="w-full max-w-4xl flex-col">
        <div className="flex flex-wrap items-end justify-between px-2 text-3xl font-bold text-white sm:flex-nowrap">
          Night Diffusion{' '}
          <span className="px-1 text-lg text-default-500">
            A evolving collection of AI NFTs
          </span>
        </div>
        <div className="my-10 mx-2 flex w-full flex-col-reverse flex-wrap justify-between sm:flex-row sm:flex-nowrap">
          <div className="my-4 flex flex-col justify-between text-lg text-slate-400">
            <div className="flex flex-col justify-evenly">
              <div>Immutable NFTs dont have to be static.</div>
              <div>The future of digital art is evolution</div>
            </div>

            <div className="mt-2 p-1 text-base">
              Introducing NightDiffusion an AI generated art collection which
              evolves over time. Visualize how your NFT changes over time.
              induce change to build a custom animation.
            </div>
          </div>
          <video src="/island.webm" autoPlay muted loop width={320} />
        </div>
      </div>
    </div>
    <div className="my-10 flex h-auto w-full content-center justify-evenly bg-stone-500 py-20">
      <div className="w-full max-w-2xl flex-col">
        <div className="flex px-2 font-bold text-white">
          Get Started by minting
        </div>
        <div className="my-10 mx-2 flex w-full flex-col justify-between text-lg font-normal">
          <ol className="my-2 list-decimal p-2">
            <li>Login using any Ethereum wallet.</li>
            <li>Define the starting color scheme.</li>
            <li>Mint your NFT</li>
            <li>induce evolution to build your animation</li>
          </ol>
          <div className="my-2 flex justify-end py-2">
            <ButtonBright
              onClick={() => {
                console.log('Testing clicker');
              }}
              title="Start Mint"
            />
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default MintNFT;
