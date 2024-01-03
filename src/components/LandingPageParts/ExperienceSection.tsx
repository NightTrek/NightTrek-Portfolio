import type { ReactNode } from 'react';
import React from 'react';

import ButtonBright from '../ButtonBright';

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
  'Fun.xyz': {
    company: 'Fun.xyz',
    title: 'Software Engineer',
    dates: 'April 2023 - present',
    description:
      'Designed and built leading account abstraction wallets for EVM chains',
    bullet: [
      'Led the product and engineering of the Account Abstraction React SDK.',
      'Worked with full stack technologies to build RBAC features for multi-factor authentication and account recovery.',
      'Directly contributed to the documentation and improved the developer experience of the SDK',
    ],
    link: 'https://fun.xyz',
  },
  Nugbase: {
    company: 'Nugbase',
    title: 'Software Engineer / Cofounder',
    dates: 'April 2018 - February 2023',
    description:
      'Cofounded Nugbase to build the future of blockchain experiences in gaming',
    bullet: [
      'Lead developer building the Dapper Dino dapp breeding experience and web app',
      'Implemented new login technology and Web3 signin, including Redux Web3 state system',
      'Wrote Solidity contracts for market page and ERC1155 support for Redeemable.app',
    ],
    link: '/nugbase',
  },
  Agromation: {
    company: 'Agromation',
    title: 'Software Engineer',
    dates: 'September 2019 - June 2021',
    description: '',
    bullet: [
      'Built a React web application to view and control remote senors',
      'Implemented custom Linux firmware to read sensor data of Siemens PLC',
      'Implemented custom live data ingestion service that connected live data to the app through a custom VPN',
    ],
    link: '/agromation',
  },
  BHOGART: {
    company: 'BHOGART',
    title: 'Director of Innovation',
    dates: ' June 2014 - January 2019',
    description: '',
    bullet: [
      'Sales and technical support for hydrocarbon extraction systems, including an educational class and staff training',
      'Design and implementation of innovative operating procedures and systems design, includng manufacturing',
      'Marketing and web development, including point of sales systems and community outreach progams such as conferences and events',
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
      className="my-40 ml-4  flex h-fit min-h-[420px] select-none flex-col items-center justify-start"
      id={'experience'}
    >
      <div className="flex w-full max-w-4xl flex-col content-between justify-start text-base">
        <div className="text-2xl font-bold text-slate-400">
          <span className="font-normal text-default-500">2. {` `}</span>
          Work Experience
        </div>
        <div className="mt-8 flex w-full flex-wrap justify-between sm:flex-nowrap">
          <div className="flex flex-col justify-start">
            {Object.keys(Experience).map((experience, index): ReactNode => {
              // if the selected is the current focus
              if (index === focus)
                return (
                  <div
                    className="group flex h-14 cursor-pointer select-none flex-nowrap text-lg hover:bg-slate-700"
                    key={index}
                  >
                    <div className="h-full w-1 bg-default-500 py-4"></div>
                    <div className="ml-2 p-2 text-default-500">
                      {experience}
                    </div>
                  </div>
                );
              return (
                <div
                  className="group flex h-14 cursor-pointer select-none flex-nowrap text-lg hover:bg-slate-700"
                  key={index}
                  onClick={() => {
                    setFocus(index);
                  }}
                >
                  <div className="h-full w-1 bg-slate-600 py-4"></div>
                  <div className="ml-2 p-2 group-hover:text-default-500">
                    {experience}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ml-8 flex flex-col justify-between text-slate-400">
            <div className="text-lg text-default-500">
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
            {getExperienceKey(focus).company !== 'BHOGART' &&
              getExperienceKey(focus).company !== 'Agromation' && (
                <ButtonBright
                  title={`Read more about ${getExperienceKey(focus).company}`}
                  link={getExperienceKey(focus).link}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
