import React from 'react';

const AboutMeSection = () => (
  <div
    className="mb-40 mt-10 flex select-none flex-col items-center justify-start"
    id={'about'}
  >
    <div className="flex w-full max-w-3xl flex-col content-between justify-start px-2 text-base">
      <div className="text-2xl font-bold text-slate-400">
        <span className="font-normal text-default-500">1. {` `}</span>
        About Me
      </div>
      <div className="mt-8 flex w-full flex-col justify-between">
        <div className="text-slate-400">
          I have had a passion for software engineering ever since I began
          building Minecraft mods in Java back in 2013. Before I decided to make
          software my career I was pulled into the chaotic and fast-paced world
          of a hardware start up. My time working at the hardware manufacturer
          gave me the experience to handle both sales and support operations as
          well as marketing and product development.
        </div>
        <div className="my-6 text-slate-400">
          In 2018 my passion for blockchain technology led me to cofound the
          Web3 company Nugbase. Nugbase&rsquo;s core product is an NFT
          collection and Web3 game called{' '}
          <a
            href="https://flowerpatch.app/"
            className="text-default-500"
            target="_blank"
          >
            Flowerpatch.
          </a>{' '}
          My role started off as business operations but I quickly evolved to a
          software engineering role. Our rapid growth pushed me to lead our
          contract engineering division, where I consulted with clients to
          design and build their Web3 products.
        </div>
        <div className="mb-6 text-slate-400">
          In 2023 I left Nugbase to work at a smart wallet company called
          <a
            href="https://fun.xyz/"
            className="text-default-500"
            target="_blank"
          >
            {' '}
            Fun.xyz
          </a>
          . My primary role at{' '}
          <a
            href="https://fun.xyz/"
            className="text-default-500"
            target="_blank"
          >
            Fun.xyz
          </a>{' '}
          was designing and developing the React SDK, improving the developer
          experience for our customers. I worked directly with our customers and
          built Role-based access control features. I am especially proud of my
          work building multi-factor authentication into Ethereum wallets.
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
              <li>
                <span className="font-bold">Blockchains: </span> Ethereum /
                Polygon / Arbitrum / Optimism
              </li>
              <li>
                <span className="font-bold">Front-end Web3:</span> Wagmi, Viem,
                EthersJS
              </li>
              <li>
                <span className="font-bold">Backend Ethereum services:</span> Go
                Ethereum (Geth)
              </li>
              <li>
                <span className="font-bold">Smart contract development: </span>
                Solidity, OpenZepplin, Hardhat, and Truffle suite
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMeSection;
