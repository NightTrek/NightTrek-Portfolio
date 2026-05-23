import { useState } from 'react';

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
  OpenAI: {
    company: 'OpenAI',
    title: 'Product Manager, Codex',
    dates: '2026 - Present',
    description:
      'Forward-deployed product work for secure enterprise Codex adoption.',
    bullet: [
      'Brought Codex into NVIDIA-scale engineering and hardware-farm workflows',
      'Built onboarding patterns for thousands of enterprise users',
      'Worked on sandboxing, deterministic controls, and LLM review with security teams',
      'Stayed hands-on with Codex automations, Rust, product feedback, and PRs',
    ],
    link: '/codex',
  },
  Cline: {
    company: 'Cline',
    title: 'Head of Operations',
    dates: 'January 2025 - January 2026',
    description:
      'Leading operations to democratize the 10x engineer and make every developer 10x better',
    bullet: [
      'Joined Cline to be the first AI engineer and ended up leading the company as Head of Operations',
      'Scaled the team to 45 people while maintaining high hiring standards',
      "Launched Cline's first paid product (Cline Accounts) driving monetization strategy",
      'Managed multiple engineering teams and the product team to align efforts with enterprise data strategies',
      'Contributed to explosive user growth from 300K to 2M users in 6 months',
      'Helped scale company revenue by millions of dollars',
      'Implemented product analytics and telemetry strategy to monitor agent performance in real-world applications',
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
  const [focus, setFocus] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <section
      className="mx-auto max-w-7xl scroll-mt-28 overflow-hidden px-5 py-16 md:px-10 lg:py-24"
      id={'experience'}
    >
      <div className="mx-auto min-w-0 text-[16px]">
        <div className="mb-8 text-left">
          <div className="font-display text-[36px] font-bold text-obsidian-50 md:text-[52px]">
            <span className="font-normal text-default-500">02. </span>
            Work Experience
          </div>
          <div className="mt-2 max-w-2xl text-[18px] leading-8 text-obsidian-200">
            A timeline of technical product work, operating roles, and company
            building.
          </div>
        </div>

        <div className="glass-panel reveal-panel min-w-0 overflow-hidden rounded-3xl">
          <div className="grid min-w-0 lg:grid-cols-[320px_1fr]">
            <div className="min-w-0 border-b border-white/10 bg-white/[0.025] lg:border-b-0 lg:border-r lg:border-white/10">
              <div className="flex gap-2 overflow-x-auto p-3 lg:flex-col lg:overflow-visible lg:p-5">
                {Object.keys(Experience).map((experience, index) => {
                  const isActive = index === focus;
                  return (
                    <button
                      key={index}
                      type="button"
                      aria-pressed={isActive}
                      className={`
                        group relative min-w-[172px] cursor-pointer rounded-xl border px-4 py-3 text-left transition-all duration-300 ease-out lg:w-full lg:min-w-0
                        ${
                          isActive
                            ? 'border-default-500/50 bg-default-500/10 text-default-400 shadow-[0_0_32px_rgba(0,225,171,0.12)]'
                            : 'border-transparent text-obsidian-200 hover:border-white/10 hover:bg-white/[0.05] hover:text-default-400'
                        }
                      `}
                      onClick={() => handleExperienceChange(index)}
                    >
                      <div
                        className={`
                        font-display text-[18px] font-semibold transition-all duration-300
                        ${
                          isActive
                            ? 'text-default-400'
                            : 'group-hover:text-default-400'
                        }
                      `}
                      >
                        {experience}
                      </div>

                      <div
                        className={`mt-1 text-[13px] leading-5 ${
                          isActive ? 'text-obsidian-100' : 'text-obsidian-300'
                        }`}
                      >
                        {isActive
                          ? getExperienceKey(index).title
                          : getExperienceKey(index).dates}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`
              min-h-[430px] min-w-0 overflow-hidden p-6 transition-all duration-300 ease-out md:p-10
              ${
                isAnimating
                  ? 'translate-y-2 opacity-50'
                  : 'translate-y-0 opacity-100'
              }
            `}
            >
              <div className="mb-6">
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="animate-slide-in-left break-words font-display text-[28px] font-bold leading-tight text-default-400 md:text-[42px]">
                    {currentExperience.title}
                  </h3>
                  <div className="animate-slide-in-right font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-electric-300">
                    {currentExperience.dates}
                  </div>
                </div>

                {currentExperience.description && (
                  <p className="animate-fade-in break-words text-[17px] leading-8 text-obsidian-100 md:text-[20px]">
                    {currentExperience.description}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <h4 className="mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-obsidian-300">
                  Highlights
                </h4>
                <ul className="space-y-3">
                  {currentExperience.bullet.map((achievement, index) => (
                    <li
                      key={index}
                      className={`
                        flex animate-slide-in-up items-start gap-3 break-words text-[16px] leading-7
                        text-obsidian-200
                      `}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-default-500 shadow-[0_0_12px_rgba(0,225,171,0.8)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentExperience.company !== 'BHOGART' &&
                currentExperience.company !== 'Agromation' && (
                  <div
                    className="animate-fade-in"
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
    </section>
  );
};

export default ExperienceSection;
