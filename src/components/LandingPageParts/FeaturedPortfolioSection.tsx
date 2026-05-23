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
  tags?: string[];
  imagePosition?: string;
  imageFit?: 'cover' | 'contain';
};
const FeatureCard = (props: FeatureProps) => {
  const imageFit =
    props.imageFit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <div className="glass-panel group grid overflow-hidden rounded-3xl transition-all duration-500 hover:border-default-500/60 hover:shadow-[0_0_44px_rgba(0,225,171,0.14)] md:grid-cols-[0.95fr_1.05fr]">
      <div className="relative min-h-[260px] overflow-hidden bg-obsidian-900 p-4 md:min-h-[340px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,225,171,0.18),transparent_20rem),radial-gradient(circle_at_80%_80%,rgba(74,142,255,0.12),transparent_20rem)]" />
        <Image
          className={`relative h-full w-full rounded-2xl ${imageFit} grayscale-[0.18] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0 ${
            props.imagePosition || 'object-center'
          }`}
          src={props.imageURL}
          alt={props.name}
          width={props.imgWidth || 320}
          height={props.imgHeight || 320}
        />
        <div className="pointer-events-none absolute inset-4 rounded-2xl bg-gradient-to-t from-obsidian-900/45 via-transparent to-transparent" />
      </div>
      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <div className="font-display text-[28px] font-bold leading-tight text-obsidian-50 md:text-[36px]">
            {props.name}{' '}
            <span className="text-default-500">{`@ ${props.company}`}</span>
          </div>
          {props.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-electric-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-electric-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 text-[16px] leading-7 text-obsidian-200 md:text-[18px]">
            {props.description}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
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
    <section
      className="mx-auto flex h-auto max-w-7xl scroll-mt-28 flex-col items-center justify-start px-5 py-16 md:px-10 lg:py-24"
      id={'work'}
    >
      <div className="flex w-full flex-col content-between justify-start gap-5 text-base">
        <div className="font-display text-[36px] font-bold leading-tight text-obsidian-50 md:text-[52px]">
          <span className="font-normal text-default-500">03. </span>
          Some Featured Work
        </div>
        <FeatureCard
          name={'Codex enterprise deployment'}
          imageURL="/codex-enterprise-hero.png"
          description={
            'Forward-deployed Codex into high-security enterprise environments, starting with NVIDIA. Focused on onboarding, secure sandboxing, deterministic controls, hardware-farm workflows, and the practical systems that let large companies delegate real engineering work to agents.'
          }
          company="OpenAI"
          buttonTitle="Read the case study"
          buttonlink="/codex"
          imgWidth={768}
          imgHeight={512}
          tags={['OpenAI', 'Enterprise', 'Security']}
        />
        <FeatureCard
          name={'Scaling Coding Agents'}
          imageURL="/cline-product-mascot-card.png"
          description={
            'Joined Cline to be the first AI engineer and ended up leading the company as Head of Operations. Scaled the team to 45 people, managed engineering and product teams, built product analytics and telemetry loops, and helped scale company revenue by millions of dollars while competing with the most funded companies in venture capital.'
          }
          company="Cline"
          buttonTitle="Read the Cline story"
          buttonlink="/cline"
          imgWidth={960}
          imgHeight={720}
          imagePosition="object-left"
          imageFit="contain"
          tags={['Applied AI', 'Operations', 'Revenue']}
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
          tags={['Flowerpatch', 'Web3', 'Wallets']}
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
          tags={['IoT', 'Linux', 'SaaS']}
        />
      </div>
    </section>
  );
};

export default FeaturedPortfolioSection;
