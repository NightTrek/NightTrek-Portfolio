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
  Cline: {
    company: 'Cline',
    title: 'Head of Operations',
    dates: 'January 2025 - Present',
    description:
      'Leading operations to democratize the 10x engineer and make every developer 10x better',
    bullet: [
      'Building world-class AI team to compete with multi-billion dollar competitors',
      'Scaled team from 2 to 24 people in first 6 months while maintaining high hiring standards',
      "Launched Cline's first paid product (Cline Accounts) driving monetization strategy",
      'Orchestrated strategic partnerships and helped set product direction',
      'Contributed to explosive user growth from 300K to 2M users in 6 months',
      'Helping democratize the 10x engineer through AI-powered development tools',
    ],
    link: '/cline',
  },
  'Stable Finance': {
    company: 'Stable Finance',
    title: 'Founding Engineer',
    dates: 'May 2024 - January 2025',
    description:
      'First engineer responsible for building iOS app and multi-chain infrastructure',
    bullet: [
      'Built production iOS app for Arbitrum using Swift with multi-chain account abstraction wallets',
      'Developed custom Swift SDK for 4337 smart contract transactions - first of its kind',
      'Implemented cross-chain USDC transfer support across multiple blockchain networks',
      'Built cross-chain bridge infrastructure enabling seamless chain switching',
      'Added fiat on/off ramping with Plaid integration for simplified user experience',
      'Improved engineering practices and scaled backend infrastructure including database security',
    ],
    link: '/stable',
  },
  'Fun.xyz': {
    company: 'Fun.xyz',
    title: 'Software Engineer',
    dates: 'April 2023 - May 2024',
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
  const [isAnimating, setIsAnimating] = React.useState(false);

  const getExperienceKey = (number: number): ExperienceType => {
    const keys = Object.keys(Experience);
    const selectedKey = keys[number] || 'Cline';
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

  const handleExperienceChange = (index: number) => {
    if (index === focus) return;

    setIsAnimating(true);
    setTimeout(() => {
      setFocus(index);
      setIsAnimating(false);
    }, 150);
  };

  const currentExperience = getExperienceKey(focus);

  return (
    <div
      className="my-40 flex h-fit min-h-[500px] select-none flex-col items-center justify-start px-4"
      id={'experience'}
    >
      <div className="flex w-full max-w-6xl flex-col content-between justify-start text-base">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="text-3xl font-bold text-slate-400">
            <span className="font-normal text-default-500">2. </span>
            Work Experience
          </div>
          <div className="mt-2 text-slate-500">
            Building innovative products and scaling world-class teams
          </div>
        </div>

        {/* Experience Container */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Company Navigation */}
          <div className="w-full lg:w-80">
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm">
              <div className="space-y-2">
                {Object.keys(Experience).map((experience, index): ReactNode => {
                  const isActive = index === focus;
                  return (
                    <div
                      key={index}
                      className={`
                        group relative cursor-pointer rounded-lg p-4 transition-all duration-300 ease-out
                        ${
                          isActive
                            ? 'to-default-600/20 border-l-4 border-default-500 bg-gradient-to-r from-default-500/20 text-default-500 shadow-lg shadow-default-500/10'
                            : 'text-slate-300 hover:bg-slate-700/50 hover:text-default-400'
                        }
                      `}
                      onClick={() => handleExperienceChange(index)}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div className="to-default-600 absolute left-0 top-0 h-full w-1 animate-pulse rounded-r-full bg-gradient-to-b from-default-400" />
                      )}

                      {/* Company name */}
                      <div
                        className={`
                        text-lg font-semibold transition-all duration-300
                        ${
                          isActive
                            ? 'text-default-400'
                            : 'group-hover:text-default-400'
                        }
                      `}
                      >
                        {experience}
                      </div>

                      {/* Role preview for active item */}
                      {isActive && (
                        <div className="animate-fadeIn mt-1 text-sm text-slate-400">
                          {getExperienceKey(index).title}
                        </div>
                      )}

                      {/* Hover effect */}
                      <div
                        className={`
                        absolute inset-0 rounded-lg transition-opacity duration-300
                        ${
                          isActive
                            ? 'opacity-0'
                            : 'opacity-0 group-hover:opacity-100'
                        }
                        bg-gradient-to-r from-default-500/5 to-transparent
                      `}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="flex-1">
            <div
              className={`
              min-h-[400px] rounded-xl border border-slate-700/30 bg-slate-800/30 p-8 backdrop-blur-sm
              transition-all duration-300 ease-out
              ${
                isAnimating
                  ? 'translate-y-2 opacity-50'
                  : 'translate-y-0 opacity-100'
              }
            `}
            >
              {/* Role Header */}
              <div className="mb-6">
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="animate-slideInLeft text-2xl font-bold text-default-400">
                    {currentExperience.title}
                  </h3>
                  <div className="animate-slideInRight font-medium text-slate-400">
                    {currentExperience.dates}
                  </div>
                </div>

                {currentExperience.description && (
                  <p className="animate-fadeIn text-lg leading-relaxed text-slate-300">
                    {currentExperience.description}
                  </p>
                )}
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="mb-4 text-lg font-semibold text-slate-300">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {currentExperience.bullet.map((achievement, index) => (
                    <li
                      key={index}
                      className={`
                        animate-slideInUp flex items-start gap-3 leading-relaxed
                        text-slate-300
                      `}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mt-2 h-2 w-2 shrink-0 animate-pulse rounded-full bg-default-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              {currentExperience.company !== 'BHOGART' &&
                currentExperience.company !== 'Agromation' && (
                  <div
                    className="animate-fadeIn"
                    style={{ animationDelay: '600ms' }}
                  >
                    <ButtonBright
                      title={`Read more about ${currentExperience.company}`}
                      link={currentExperience.link}
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ExperienceSection;
