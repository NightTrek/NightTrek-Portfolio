import Image from 'next/image';

import ButtonBright, { ButtonStyles } from '@/components/ButtonBright';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Cline = () => {
  const stats = [
    ['48', 'people on the team we built'],
    ['2.7M', 'installs by July 2025'],
    ['Product', 'roadmap and strategy'],
    ['MCP', 'marketplace launch'],
  ];

  const work = [
    'Joined as an early hire and became Head of Operations.',
    'Helped build a 48-person team across engineering, product, and operations.',
    'Led product roadmap, strategy, and partnerships alongside the team.',
    'Helped launch Cline Accounts and enterprise administration capabilities.',
    'Helped launch the MCP marketplace so developers could discover and install tools inside Cline.',
    'Built product analytics and feedback loops to connect real usage with product decisions.',
  ];

  return (
    <Main
      meta={
        <Meta
          title="Cline - Head of Operations"
          description="Scaling a world-class applied AI team behind the open coding agent."
        />
      }
    >
      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-10 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(0,225,171,0.18),transparent_30rem),radial-gradient(circle_at_80%_40%,rgba(74,142,255,0.12),transparent_34rem)]" />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <Image
                src="/cline-icon.png"
                alt="Cline icon"
                width={58}
                height={58}
                className="rounded-2xl"
                priority
              />
              <Image
                src="/cline-wordmark-white.svg"
                alt="Cline"
                width={170}
                height={52}
                priority
              />
            </div>
            <div className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-default-400">
              Head of Operations · Full-time · Jan 2025 - Jan 2026
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-[48px] font-extrabold leading-[1.03] text-obsidian-50 md:text-[76px]">
              Building the team behind an open coding agent.
            </h1>
            <p className="mt-6 max-w-2xl text-[19px] leading-8 text-obsidian-200 md:text-[22px]">
              I joined Cline early and became Head of Operations. I brought
              product, engineering, hiring, and partnerships together to help
              the team turn an open-source coding agent into a company. The work
              was about giving talented people the direction and support to
              build something developers wanted to use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonBright
                externalURL="https://cline.bot"
                title="Visit Cline"
                style={ButtonStyles.SOLID}
              />
              <ButtonBright
                externalURL="https://github.com/cline/cline"
                title="View on GitHub"
              />
            </div>
          </div>

          <div className="glass-panel ambient-glow rounded-3xl p-5 md:p-7">
            <div className="grid grid-cols-2 gap-3">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="font-display text-[34px] font-bold text-default-400 md:text-[44px]">
                    {value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-obsidian-300">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-l-2 border-default-500 bg-obsidian-900 p-5 font-mono text-[13px] leading-7 text-obsidian-200">
              <div className="mb-2 text-default-400">$ cline run scale</div>
              <div>&gt; team: 48 people</div>
              <div>&gt; product: open coding agent</div>
              <div>&gt; motion: open-source to enterprise</div>
              <div className="animate-pulse text-default-400">_</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div className="glass-panel rounded-3xl p-6 md:p-8">
          <div className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-electric-300">
            Product and team leadership
          </div>
          <h2 className="mt-4 font-display text-[34px] font-bold leading-tight text-obsidian-50 md:text-[46px]">
            Build the team. Give it direction. Ship together.
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-obsidian-200">
            We wanted more people to be able to build software with an agent. I
            helped turn that ambition into a roadmap, an operating rhythm, and a
            team that could execute. The outcomes belonged to that team. My job
            was to help them succeed.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 md:p-8">
          <div className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-electric-300">
            Operating work
          </div>
          <ul className="mt-6 space-y-4">
            {work.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[17px] leading-8 text-obsidian-200"
              >
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-default-500 shadow-[0_0_12px_rgba(0,225,171,0.8)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <div className="glass-panel rounded-3xl p-6 md:p-8">
          <h2 className="font-display text-3xl font-bold text-obsidian-50">
            Making MCP tools easier to use.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-obsidian-200">
            We launched what was then the largest in-app MCP marketplace. We
            helped move MCP from something developers had to configure by hand
            toward tools they could discover and install inside their coding
            agent. The marketplace connected the agent to a growing ecosystem of
            capabilities.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <div className="glass-panel rounded-3xl p-6 md:p-8">
          <h2 className="font-display text-3xl font-bold text-obsidian-50">
            2.7 million installs by July 2025.
          </h2>
          <p className="my-5 max-w-4xl text-lg leading-8 text-obsidian-200">
            Cline’s July 2025 funding announcement reported 2.7 million installs
            across VS Marketplace and Open VSX. It was a milestone for the
            product, the team, and the open-source community building around it.
          </p>
          <ButtonBright
            externalURL="https://cline.bot/blog/cline-raises-32m-series-a-and-seed-funding-building-the-open-source-ai-coding-agent-that-enterprises-trust"
            title="Read Cline’s announcement"
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <div className="glass-panel rounded-3xl p-6 md:p-8">
          <div className="mb-4 font-display text-[30px] font-bold text-obsidian-50">
            About Cline
          </div>
          <p className="max-w-4xl text-[17px] leading-8 text-obsidian-200">
            Cline is an open-source AI coding agent for developers working in
            editors, terminals, and SDK-based workflows. It brings a
            human-in-the-loop agent into real software projects: reading
            codebases, planning changes, editing files, running commands, and
            helping developers move from prompt to production.
          </p>
        </div>
      </section>
    </Main>
  );
};

export default Cline;
