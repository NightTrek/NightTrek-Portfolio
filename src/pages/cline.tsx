/* eslint-disable react/no-unescaped-entities */
import ButtonBright from '@/components/ButtonBright';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Cline = () => (
  <Main
    meta={
      <Meta
        title="Cline - Head of Operations"
        description="Democratizing the 10x engineer through AI-powered development tools"
      />
    }
  >
    <div className="my-40 flex w-full content-center justify-evenly">
      <div className="w-full max-w-4xl flex-col">
        <div className="flex select-none flex-wrap items-end justify-between px-2 text-3xl font-bold text-white sm:flex-nowrap">
          Cline{' '}
          <span className="px-1 text-lg text-default-500">
            The Collaborative AI Coder
          </span>
        </div>
        <div className="mx-2 my-10 flex w-full flex-col justify-between">
          <div className="my-4 text-lg text-slate-400">
            I joined Cline in January 2025 as Head of Operations to put the foot
            on the gas and not let up until we make every engineer in the world
            10x better. Cline is revolutionizing software development with
            AI-powered coding assistance that has reached over 2 million
            developers worldwide. With 1.7M+ installations and 46K GitHub stars,
            Cline has become the leading collaborative AI coding partner.
          </div>
          <div className="my-4 text-lg text-slate-400">
            My role at Cline is to help build a world-class AI team to compete
            with multi-billion dollar competitors. We are hiring the smartest,
            most passionate people in the world to help Cline democratize the
            10x engineer and transform how software engineering is done at
            scale.
          </div>
        </div>
      </div>
    </div>

    <div className="my-10 flex h-max w-full content-center justify-evenly bg-gradient-to-b from-slate-800 to-slate-900 py-20">
      <div className="w-full max-w-4xl flex-col">
        <div className="mb-8 flex px-2 text-2xl font-bold text-white">
          Scaling Excellence
        </div>

        <div className="grid grid-cols-1 gap-8 px-2 md:grid-cols-2">
          <div className="rounded-lg bg-slate-700 p-6">
            <h3 className="mb-4 text-xl font-bold text-default-500">
              Team Growth
            </h3>
            <p className="mb-4 text-slate-300">
              Scaled the team from 2 to 24 people in the first 6 months while
              maintaining exceptionally high hiring standards. Built a
              world-class engineering organization capable of competing with
              multi-billion dollar competitors.
            </p>
            <div className="text-3xl font-bold text-default-500">2 → 24</div>
            <div className="text-sm text-slate-400">
              Team members in 6 months
            </div>
          </div>

          <div className="rounded-lg bg-slate-700 p-6">
            <h3 className="mb-4 text-xl font-bold text-default-500">
              User Growth
            </h3>
            <p className="mb-4 text-slate-300">
              Contributed to explosive user growth from 300K to 2M users in 6
              months, helping transform how software engineering is done at
              scale across the global developer community.
            </p>
            <div className="text-3xl font-bold text-default-500">300K → 2M</div>
            <div className="text-sm text-slate-400">Users in 6 months</div>
          </div>

          <div className="rounded-lg bg-slate-700 p-6">
            <h3 className="mb-4 text-xl font-bold text-default-500">
              Product Launch
            </h3>
            <p className="mb-4 text-slate-300">
              Successfully launched Cline's first paid product (Cline Accounts),
              driving the company's monetization strategy and establishing a
              sustainable revenue model for continued growth.
            </p>
            <div className="text-lg font-bold text-default-500">
              Cline Accounts
            </div>
            <div className="text-sm text-slate-400">
              First paid product launch
            </div>
          </div>

          <div className="rounded-lg bg-slate-700 p-6">
            <h3 className="mb-4 text-xl font-bold text-default-500">
              Strategic Impact
            </h3>
            <p className="mb-4 text-slate-300">
              Orchestrated strategic partnerships and helped set product
              direction for the leading AI coding assistant. Contributing to
              Cline's mission to democratize the 10x engineer experience.
            </p>
            <div className="text-lg font-bold text-default-500">1.7M+</div>
            <div className="text-sm text-slate-400">Total installations</div>
          </div>
        </div>

        <div className="mt-12 px-2">
          <div className="mb-4 text-xl font-bold text-white">About Cline</div>
          <p className="mb-6 text-slate-300">
            Cline is the collaborative AI coder that elevates engineering teams
            with a fully collaborative AI partner that's open source, fully
            extensible, and designed to amplify developer impact. Unlike
            traditional coding assistants, Cline partners with developers to
            create thoughtful plans before taking action, explains its
            reasoning, and breaks down complex tasks step by step.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonBright externalURL="https://cline.bot" title="Visit Cline" />
            <ButtonBright
              externalURL="https://github.com/cline/cline"
              title="View on GitHub"
            />
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Cline;
