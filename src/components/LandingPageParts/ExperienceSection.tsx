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
    title: 'Software Engineer',
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
      className="my-40 ml-4  flex h-fit min-h-[420px] flex-col items-center justify-start"
      id={'experience'}
    >
      <div className="flex w-full max-w-4xl flex-col content-between justify-start text-base">
        <div className="text-2xl font-bold text-slate-400">
          <span className="font-normal text-default-500">2. {` `}</span>
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
                    <div className="h-full w-1 bg-default-500 py-4"></div>
                    <div className="ml-2 p-2 text-default-500">
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

export default ExperienceSection;