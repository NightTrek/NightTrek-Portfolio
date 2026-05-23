const AboutMeSection = () => (
  <section
    className="mx-auto grid max-w-7xl scroll-mt-28 grid-cols-1 gap-4 px-5 py-16 md:px-10 lg:grid-cols-12 lg:py-24"
    id={'about'}
  >
    <div className="glass-panel reveal-panel rounded-3xl p-6 md:p-8 lg:col-span-8">
      <div className="mb-7 flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-default-500 shadow-[0_0_18px_rgba(0,225,171,0.75)]" />
        <h2 className="font-display text-[32px] font-bold leading-tight text-default-400 md:text-[44px]">
          01. About Me
        </h2>
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="text-[17px] leading-8 text-obsidian-200">
          I have had a passion for software engineering ever since I began
          building Minecraft mods in Java back in 2013. Before I decided to make
          software my career I was pulled into the chaotic and fast-paced world
          of a hardware start up. My time working at the hardware manufacturer
          gave me the experience to handle both sales and support operations as
          well as marketing and product development.
        </div>
        <div className="my-6 text-[17px] leading-8 text-obsidian-200">
          In 2018 my passion for blockchain technology led me to cofound the
          Web3 company Nugbase. Nugbase&rsquo;s core product is an NFT
          collection and Web3 game called{' '}
          <a
            href="https://flowerpatch.app/"
            className="font-medium text-default-400"
            target="_blank"
          >
            Flowerpatch.
          </a>{' '}
          My role started off as business operations but I quickly evolved to a
          software engineering role. Our rapid growth pushed me to lead our
          contract engineering division, where I consulted with clients to
          design and build their Web3 products.
        </div>
        <div className="mb-6 text-[17px] leading-8 text-obsidian-200">
          In 2023 I left Nugbase to work at a smart wallet company called
          <a
            href="https://fun.xyz/"
            className="font-medium text-default-400"
            target="_blank"
          >
            {' '}
            Fun.xyz
          </a>
          . My primary role at{' '}
          <a
            href="https://fun.xyz/"
            className="font-medium text-default-400"
            target="_blank"
          >
            Fun.xyz
          </a>{' '}
          was designing and developing the React SDK, improving the developer
          experience for our customers. I worked directly with our customers and
          built Role-based access control features. I am especially proud of my
          work building multi-factor authentication into Ethereum wallets.
        </div>
        <div className="mt-8 flex flex-col justify-between text-obsidian-200">
          <div className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-electric-300">
            Technology competencies
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              'Javascript / Typescript',
              'Go',
              'Python',
              'Linux',
              'React / NextJS / Redux',
              'SaSS / LESS / Tailwind CSS',
              'MySQL/ datastore / MongoDB noSQL',
              'Kubernetes / Docker',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-obsidian-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="glass-panel reveal-panel flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-4">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-signal-400" />
          <span className="h-3 w-3 rounded-full bg-default-500" />
          <span className="ml-auto font-mono text-[11px] text-obsidian-300">
            status.sh
          </span>
        </div>
        <div className="border-l-2 border-default-500 bg-obsidian-900 p-4 font-mono text-[13px] leading-7 text-obsidian-200">
          <div className="mb-2 text-default-400">$ fetch competencies</div>
          <div>&gt; ACTIVE: Product + Engineering</div>
          <div>&gt; DOMAIN: AI, Web3, IoT</div>
          <div>&gt; MODE: Forward-deployed</div>
          <div className="animate-pulse text-default-400">_</div>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between text-obsidian-200">
        <div className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-electric-300">
          Blockchain competencies
        </div>
        <ul className="mt-4 space-y-3 text-[15px] leading-7">
          <li>
            <span className="font-bold text-obsidian-100">Blockchains: </span>
            Ethereum / Polygon / Arbitrum / Optimism
          </li>
          <li>
            <span className="font-bold text-obsidian-100">Front-end Web3:</span>{' '}
            Wagmi, Viem, EthersJS
          </li>
          <li>
            <span className="font-bold text-obsidian-100">
              Backend Ethereum services:
            </span>{' '}
            Go Ethereum (Geth)
          </li>
          <li>
            <span className="font-bold text-obsidian-100">
              Smart contract development:{' '}
            </span>
            Solidity, OpenZepplin, Hardhat, and Truffle suite
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
