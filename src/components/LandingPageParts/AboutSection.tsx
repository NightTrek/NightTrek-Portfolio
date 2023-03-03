import React from 'react';

const AboutMeSection = () => (
  <div className="mb-40 flex flex-col items-center justify-start" id={'about'}>
    <div className="flex w-full max-w-3xl flex-col content-between justify-start px-2 text-base">
      <div className="text-2xl font-bold text-slate-400">
        <span className="font-normal text-default-500">1. {` `}</span>
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
          <div className="text-lg font-bold text-default-500">
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
          <div className="text-lg font-bold text-default-500">
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

export default AboutMeSection;
