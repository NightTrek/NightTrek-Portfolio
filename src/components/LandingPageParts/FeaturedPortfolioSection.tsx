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
          name={'Dapper Dinos NFT'}
          imageURL="/DapperDinosBreedPagecrop.PNG"
          description={
            'Created a breeding experience for the existing Dapper Dino Ethereum NFT collection. Developed the Dapper Dino breeding experience product inclduing design and implementation from scratch. Built a cross-chain breeding algorithm and minting service in Go. Lead the team by communicating with the client and managing team objectives.'
          }
          company="Nugbase"
          buttonTitle="Watch the Video"
          buttonExternalURL="https://youtu.be/Dd4IP3iU6VY"
        />
        <FeatureCard
          name={'Flowerpatch.app'}
          imageURL="/SeedStoreV1.1.PNG"
          description={
            'Worked on full stack development of the Flowerpatch.app, including projects like the FLOWER NFT marketplace and Seed store. Directly built modular wallet support including signature-based login for Trezor and Ledger. Built extensible user data and account management features. Managed end-to-end testing across the product.'
          }
          company="Nugbase"
          buttonTitle="Read more"
          buttonlink="/nugbase/#flowerpatch"
          imgWidth={512}
          imgHeight={320}
        />
        <FeatureCard
          name={'Agromation SmartGrow'}
          imageURL="/agromation-dashboard.PNG"
          description={
            'Consulted with a hardware manufacturer to design and develop a custom software solution for their hardware product. Created a SaaS web application for centralized monitoring and control over their products. Implemented a Linux-based IoT device to interface with the Siemens controller. Built an API to securely transmit and process data from the remote hardware.'
          }
          company="Dual4T"
          buttonTitle="Read more"
          buttonlink="/dual4t"
        />
      </div>
    </div>
  );
};

export default FeaturedPortfolioSection;
