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
          I’m an entrepreneur and technical leader. I bring people together to
          build products, solve difficult problems, and help their teams
          succeed. My background spans software engineering, product, and
          running startups.
        </div>
        <div className="my-6 text-[17px] leading-8 text-obsidian-200">
          At OpenAI, I work on enterprise adoption of Codex, turning what I
          learn from customers into product priorities and practical ways to use
          AI. Before that, I helped build Cline as an early hire and Head of
          Operations, bringing product, engineering, hiring, and partnerships
          together.
        </div>
        <div className="mb-6 text-[17px] leading-8 text-obsidian-200">
          I stay close to the code. I’ve built native iOS apps, wallet
          infrastructure, developer tools, and connected hardware products. I
          care about making powerful technology useful without requiring people
          to become experts in how it works.
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
          How I work
        </div>
        <ul className="mt-4 space-y-3 text-[15px] leading-7">
          <li>
            <span className="font-bold text-obsidian-100">Listen closely.</span>{' '}
            Find the real problem behind the request.
          </li>
          <li>
            <span className="font-bold text-obsidian-100">
              Bring people together.
            </span>{' '}
            Give teams direction, context, and room to do their best work.
          </li>
          <li>
            <span className="font-bold text-obsidian-100">Build and ship.</span>{' '}
            Stay technical enough to turn a product decision into something
            people can use.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
