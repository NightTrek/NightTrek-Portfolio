import Image from 'next/image';

import ButtonBright from '../ButtonBright';

type FeatureProps = {
  name: string;
  imageURL: string;
  description: string;
  company: string;
  buttonTitle: string;
  buttonlink?: string;
  buttonExternalURL?: string;
  githubURL?: string;
  imgWidth?: number;
  imgHeight?: number;
};
const FeatureCard = (props: FeatureProps) => {
  return (
    <div className="my-12 flex h-auto w-[100%] flex-wrap content-evenly justify-start rounded-3xl bg-gradient-to-t from-default-100 to-default-200 shadow-lg sm:h-96 sm:flex-nowrap">
      <div className="m-4 flex w-full justify-center rounded-lg px-2">
        <Image
          className="min-w-[320px] rounded-lg"
          src={props.imageURL}
          alt={props.name}
          width={props.imgWidth || 320}
          height={props.imgHeight || 320}
        />
      </div>
      <div className="my-4 flex flex-col content-evenly justify-evenly p-4">
        <div className="text-lg font-bold text-white">
          {props.name}{' '}
          <span className="text-default-500">{`@ ${props.company}`}</span>
        </div>
        <div className="text-slate-400">{props.description}</div>
        <div className="flex justify-end">
          <ButtonBright
            title={props.buttonTitle}
            link={props.buttonlink || ''}
            externalURL={props.buttonExternalURL || ''}
          />
        </div>
      </div>
    </div>
  );
};

const FeaturedPortfolioSection = () => {
  return (
    <div
      className="flex h-auto flex-col items-center justify-start"
      id={'work'}
    >
      <div className="flex w-full max-w-4xl flex-col content-between justify-start text-base">
        <div className="px-2 text-2xl font-bold text-slate-400">
          <span className="font-normal text-default-500">3. {` `}</span>
          Some Featured Work
        </div>
        <FeatureCard
          name={'Dapper Dinos Breeding'}
          imageURL="/DapperDinosBreedPagecrop.PNG"
          description={
            'Created a breeding experience for an existing Ethereum NFT collection. Designed the breeding algorithm and minting service in Go. Built a Baby Dino rendering service to render the new babies.'
          }
          company="Nugbase"
          buttonTitle="Watch the Video"
          buttonExternalURL="https://youtu.be/Dd4IP3iU6VY"
        />
        <FeatureCard
          name={'Dapper Dino Account Page'}
          imageURL="/DapperDinosAccountPage.PNG"
          description={
            'Implemented an account system that tracks which Dino NFTs users own. Users can also see which Dino eggs they have and hatch them. The account system supports arbitrary key value data to be attached to the account. '
          }
          company="Nugbase"
          buttonTitle="Watch the Video"
          buttonExternalURL="https://youtu.be/Dd4IP3iU6VY"
        />
        <FeatureCard
          name={'Flowerpatch Seed Store'}
          imageURL="/SeedStoreV1.1.PNG"
          description={
            'Implemented a new in-game store that allows players to buy items with SEED tokens. The Seed Store uses a new smart contract that supports the sale of both FLOWER NFTs and game items.'
          }
          company="Nugbase"
          buttonTitle="Read more"
          buttonlink="/nugbase/#flowerpatch"
          imgWidth={512}
          imgHeight={320}
        />
      </div>
    </div>
  );
};

export default FeaturedPortfolioSection;
