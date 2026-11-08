import Image from 'next/image';

import ButtonBright from '@/components/ButtonBright';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Codex = () => (
  <Main
    meta={
      <Meta
        title="OpenAI Codex | Daniel Steigman"
        description="Turning enterprise customer needs into shipped product capabilities with the Codex team."
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
            OpenAI / Codex
          </div>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-4xl">
            From enterprise needs to shipped product.
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-300">
            I work on enterprise adoption of Codex at OpenAI. I bring customers,
            deployment teams, and engineers together to turn difficult
            requirements into products people can use.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The work starts with listening. I stay close to the technical
            details, define what will solve the problem, and help the team get
            it across the line.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ['Listen', 'customer needs'],
            ['Align', 'product and engineering'],
            ['Ship', 'usable capabilities'],
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
            I lead by helping the people around me succeed. Clear priorities,
            shared context, and hands-on technical work make that possible.
          </div>
        </div>
      </div>
    </div>
    <section
      className="flex h-max w-full content-center justify-evenly bg-gradient-to-b from-[#111715] to-slate-950 px-4 py-24"
      id="nfs"
    >
      <div className="w-full max-w-5xl">
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-default-400">
          A shipped example
        </div>
        <h2 className="mb-10 text-2xl font-bold text-white">
          Making Codex work with shared Linux NFS home directories.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Find the barrier',
              body: 'Working with enterprise teams exposed a practical obstacle: Codex needed to work reliably when a Linux home directory lived on a shared network file system.',
            },
            {
              title: 'Define the product',
              body: 'I connected that need across customers and defined the smallest useful capability that would let people get back to their work.',
            },
            {
              title: 'Bring the team together',
              body: 'I drove the product work, secured engineering buy-in, and partnered with the engineers who built and shipped the support.',
            },
            {
              title: 'Make it available',
              body: 'Codex now documents support for shared Linux NFS home directories. A specific enterprise barrier became a product capability that other teams can use.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-default-500/50"
            >
              <h3 className="mb-4 text-xl font-bold text-default-500">
                {item.title}
              </h3>
              <p className="leading-7 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonBright
            externalURL="https://learn.chatgpt.com/docs/environments/network-file-systems"
            title="Read the NFS documentation"
          />
          <ButtonBright
            externalURL="https://github.com/openai/codex/releases/tag/rust-v0.166.0"
            title="Read the release notes"
          />
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Working with enterprise teams.
      </h2>
      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        My work includes helping teams adopt Codex at NVIDIA. I connect the
        lessons from deployment with product and engineering, and help the
        people doing the rollout build practical ways to work with agents.
      </p>
      <p className="my-6 max-w-3xl text-lg leading-8 text-slate-300">
        NVIDIA has publicly shared how its teams use Codex. Their story is the
        best place to read about that adoption.
      </p>
      <ButtonBright
        externalURL="https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/"
        title="Read NVIDIA’s public story"
      />
    </section>
  </Main>
);

export default Codex;
