import type { ReactNode } from 'react';
import React from 'react';

import ButtonBright from '@/components/ButtonBright';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className=" w-full max-w-3xl  flex-col content-between justify-start	">
        <h4 className=" px-2 text-lg text-emerald-400">Hello my name is</h4>
        <h2 className=" px-2 font-bold" style={{ fontSize: '64px' }}>
          Daniel Steigman.
        </h2>
        <div className=" px-2 text-lg text-slate-400">
          I build blockchain products to empower the{' '}
          <span className=" text-emerald-400">web3</span> revolution.
        </div>
        <div className="px-2 text-base text-slate-400">
          Software engineering is a passion which allows me to bring new people
          into the world of web3. As a startup founder the job requires a high
          level of software competency AND the ability to engage new people and
          new ideas.
        </div>
        <div className="my-8 flex px-2 text-lg">
          <ButtonBright title="Read about my work at Nugbase" link="/nugbase" />
        </div>
      </div>
    </div>
  );
};

const AboutMeSection = () => (
  <div
    className="flex h-screen flex-col items-center justify-start"
    id={'about'}
  >
    <div className="flex w-full max-w-3xl flex-col content-between justify-start text-base">
      <div className="text-2xl font-bold text-slate-400">
        <span className="font-normal text-emerald-400">1. {` `}</span>
        About me
      </div>
      <div className="mt-8 flex w-full flex-col justify-between">
        <div className="text-slate-400">
          I have had a passion for software engineering since i was building
          Minecraft mods in Java back in 2013. However before i decided to make
          software my career i was pulled into the chaotic and fast paced world
          of a hardware start up. My time working at a hardware manufacturer
          gave me the experience to handle both sales and support operations as
          well as marketing and product development.
        </div>
        <div className="my-6 text-slate-400">
          In 2018 my passion for blockchain technology led me to cofound a
          company with some friends. My role at our company started of as
          buisness operations but quickly grew out of need to a software
          engineering role. Since than i have been leading our contracting
          division and building new features for our products.Our core product
          was a NFT collection and web3 game called{' '}
          <a href="https://flowerpatch.app/" target="_blank">
            flowerpatch.
          </a>{' '}
        </div>
        <div className="flex flex-col justify-between text-slate-400">
          <div className="text-lg font-bold text-emerald-400">
            Technology competencies
          </div>
          <div className="flex w-full justify-between">
            <ul>
              <li>Javascript / Typescript</li>
              <li>Go</li>
              <li>Python</li>
              <li>Linux</li>
            </ul>
            <ul>
              <li>React / NextJS / Redux</li>
              <li>SaSS / LESS / Tailwind CSS</li>
              <li>MySQL/ datastore / MongoDB noSQL</li>
              <li>Kubernetes / Docker</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between text-slate-400">
          <div className="text-lg font-bold text-emerald-400">
            Blockchain competencies
          </div>
          <div className="flex w-full justify-start">
            <ul>
              <li>Blockchains: Ethereum / Polygon / ImmutableX</li>
              <li>Front-end web3: Web3JS, Web3React, EthersJS</li>
              <li>Backend ethereum services: Go Ethereum</li>
              <li>
                Smart contract development: Solidity, OpenZepplin, Hardhat, and
                Truffle suite
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

type ExperienceType = {
  company: string;
  title: string;
  dates: string;
  description: string;
  bullet: string[];
  link: string;
};

type ExperienceJson = {
  [key: string]: ExperienceType;
};

const Experience: ExperienceJson = {
  Nugbase: {
    company: 'Nugbase',
    title: 'Software Engineer / Cofounder',
    dates: 'April 2018 - February 2023',
    description:
      'Cofounded Nugbase to build the future of blockchain experiences in gaming.',
    bullet: [
      'Lead developer building the Dapper Dino Dapp breeding experience and web app.',
      'Implemented new login technology and web3 signin, including redux web3 state system.',
      'Wrote Solidity contracts for market page and ERC1155 support for Redeemable.app.',
    ],
    link: '/nugbase',
  },
  Agromation: {
    company: 'Agromation',
    title: 'Software engineer',
    dates: 'September 2019 - june 2021',
    description: '',
    bullet: [
      'Built a react web application to view and control remote senors.',
      'Implemented custom linux firmware to read sensor data of Siemens PLC.',
      'Implemented custom live data ingestion service which connected live data to the app through a custom VPN.',
    ],
    link: '/agromation',
  },
  BHOGART: {
    company: 'BHOGART',
    title: 'Director of Innovation',
    dates: ' june 2014 - January 2019',
    description: '',
    bullet: [
      'Sales and technical support for hydrocarbon extraction systems including an educational class and staff training.',
      'Design and implementation of innovative Operating procedures and systems design includng manufacturing.',
      'Marketing and web development including point of sales systems and community outreach progams such as conerences and events.',
    ],
    link: '/bhogart',
  },
};

const ExperienceSection = () => {
  const [focus, setFocus] = React.useState(0);

  const getExperienceKey = (number: number): ExperienceType => {
    const keys = Object.keys(Experience);
    const selectedKey = keys[number] || 'Nugbase'; // use first key as fallback
    return (
      Experience[selectedKey] || {
        company: '',
        title: '',
        dates: '',
        description: '',
        bullet: [''],
        link: '',
      }
    );
  };

  return (
    <div
      className="ml-4 flex h-screen flex-col items-center justify-start"
      id={'experience'}
    >
      <div className="flex w-full max-w-4xl flex-col content-between justify-start text-base">
        <div className="text-2xl font-bold text-slate-400">
          <span className="font-normal text-emerald-400">2. {` `}</span>
          Work Experience
        </div>
        <div className="mt-8 flex w-full flex-nowrap justify-between">
          <div className="flex flex-col justify-start">
            {Object.keys(Experience).map((experience, index): ReactNode => {
              // if the selected is the current focus
              if (index === focus)
                return (
                  <div
                    className="group flex h-14 flex-nowrap text-lg hover:bg-slate-700"
                    key={index}
                  >
                    <div className="h-full w-1 bg-emerald-400 py-4"></div>
                    <div className="ml-2 p-2 text-emerald-400">
                      {experience}
                    </div>
                  </div>
                );
              return (
                <div
                  className="group flex h-14 flex-nowrap text-lg hover:bg-slate-700"
                  key={index}
                  onClick={() => {
                    setFocus(index);
                  }}
                >
                  <div className="h-full w-1 bg-slate-600 py-4"></div>
                  <div className="ml-2 p-2 group-hover:text-emerald-400">
                    {experience}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ml-8 flex flex-col justify-between text-slate-400">
            <div className="text-lg text-emerald-400">
              {getExperienceKey(focus).title}
            </div>
            <div className="text-base text-slate-400">
              {getExperienceKey(focus).dates}
            </div>
            <ul className="mt-0 list-disc">
              {getExperienceKey(focus).bullet.map((value, index) => (
                <li className="text-sm" key={index}>
                  {value}
                </li>
              ))}
            </ul>
            <ButtonBright
              title={`Read more about ${getExperienceKey(focus).company}`}
              link={getExperienceKey(focus).link}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Nighttreks's portfolio"
          description="Founder are professional problem solvers who bring people together around their common vision."
        />
      }
    >
      <Hero />
      <AboutMeSection />
      <ExperienceSection />
    </Main>
  );
};

export default Index;
