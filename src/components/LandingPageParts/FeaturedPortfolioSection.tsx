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
};
const FeatureCard = (props: FeatureProps) => {
  return (
    <div className="my-12 flex h-96 w-[100%] flex-wrap content-evenly justify-start rounded-3xl bg-gradient-to-t from-default-100 to-default-200 shadow-lg sm:flex-nowrap">
      <div className="m-4 rounded-lg px-2">
        <Image
          className="min-w-[320px] rounded-lg"
          src={props.imageURL}
          alt={props.name}
          width={320}
          height={320}
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
        <div className="text-2xl font-bold text-slate-400">
          <span className="font-normal text-default-500">3. {` `}</span>
          Some featured work
        </div>
        <FeatureCard
          name={'Dapper Dinos Breeding'}
          imageURL="/card-137-0x2462Dd404Bc309c597b40A4b58F3A67cE794F312-205.png"
          description={'A breeding experience for an existing NFT collection'}
          company="Nugbase"
          buttonTitle="Watch the Video"
          buttonExternalURL="https://youtu.be/Dd4IP3iU6VY"
        />
        <FeatureCard
          name={'Flowerpatch Item Store'}
          imageURL="/card-137-0x2462Dd404Bc309c597b40A4b58F3A67cE794F312-205.png"
          description={
            'A new in game store which allowed players to buy in game items for SEED. The in game store used a new smart contract which supports the sale of both FLOWER NFTs and game items.'
          }
          company="Nugbase"
          buttonTitle="Read more"
          buttonlink="/nugbase/#flowerpatch"
        />
      </div>
    </div>
  );
};

export default FeaturedPortfolioSection;
