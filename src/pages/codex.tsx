import Image from 'next/image';

import ButtonBright from '@/components/ButtonBright';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Codex = () => (
  <Main
    meta={
      <Meta
        title="OpenAI Codex - Forward-Deployed Product Work"
        description="Forward-deployed product work bringing Codex into secure enterprises, starting with NVIDIA."
      />
    }
  >
    <div className="relative flex min-h-screen w-full content-center justify-evenly overflow-hidden px-4 pb-20 pt-36">
      <Image
        src="/codex-enterprise-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#111715_0%,rgba(17,23,21,0.94)_45%,rgba(17,23,21,0.72)_100%)]" />
      <div className="relative z-10 grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-default-400">
            Case study
          </div>
          <h1 className="max-w-xl select-none text-3xl font-bold leading-tight text-white md:text-4xl">
            OpenAI Codex in secure enterprise environments
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-300">
            I work at OpenAI as a Product Manager focused on deploying Codex
            into some of the most secure enterprises. My first major deployment
            has been with NVIDIA, where Codex has moved from early use into
            company-wide access for engineers and researchers.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ['NVIDIA', 'first deployment'],
            ['4M+', 'weekly Codex users publicly reported'],
            ['Secure', 'sandboxed agent workflows'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-[#141b19]/80 p-5 shadow-xl shadow-black/20 backdrop-blur"
            >
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.08em] text-default-400">
                {label}
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-default-500/40 bg-[#141b19]/90 p-5 text-base leading-7 text-slate-300 sm:col-span-3">
            Public OpenAI updates reported Codex reaching 3 million weekly users
            in early April 2026 and growing to more than 4 million two weeks
            later. I joined during that phase of fast enterprise pull.
          </div>
        </div>
      </div>
    </div>

    <div className="flex h-max w-full content-center justify-evenly bg-gradient-to-b from-[#111715] to-slate-950 px-4 py-24">
      <div className="w-full max-w-5xl flex-col">
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-default-400">
          Mandates
        </div>
        <h2 className="mb-10 text-2xl font-bold text-white">
          What I am focused on
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'NVIDIA-scale rollout',
              body: 'Leading onboarding and enablement patterns for thousands of users, with workflows that span engineering, research, hardware-farm execution, and less technical enterprise use cases.',
            },
            {
              title: 'Secure agent execution',
              body: 'Partnering with security teams on sandboxing, deterministic controls, permissioning, and review systems that let agents work inside sensitive code and infrastructure.',
            },
            {
              title: 'Deterministic plus LLM review',
              body: 'Exploring where conventional controls should be strict and repeatable, and where LLM review can add judgment, context, and coverage without replacing the security model.',
            },
            {
              title: 'Hands-on product development',
              body: 'Using Codex daily for automations, PRs, Rust programming, workflow design, and direct product feedback to keep the deployment grounded in real technical usage.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-default-500/50"
            >
              <h3 className="mb-4 text-xl font-bold text-default-500">
                {item.title}
              </h3>
              <p className="text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonBright
            externalURL="https://openai.com/index/nvidia/"
            title="OpenAI NVIDIA story"
          />
          <ButtonBright
            externalURL="https://openai.com/index/scaling-codex-to-enterprises-worldwide/"
            title="Codex enterprise update"
          />
        </div>
      </div>
    </div>
  </Main>
);

export default Codex;
