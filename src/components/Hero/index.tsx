import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import ButtonBright, { ButtonStyles } from '@/components/ButtonBright';

const Hero = () => {
  return (
    <section className="relative flex min-h-[720px] items-start overflow-hidden bg-obsidian-900 pt-28 md:min-h-screen md:items-center md:pt-24">
      <div className="absolute inset-0">
        <Image
          src="/codex-enterprise-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_36%,rgba(5,5,5,0.44)_72%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18)_0%,#050505_100%)]" />
        <div className="absolute left-0 top-0 h-full w-3/5 bg-[radial-gradient(circle_at_20%_45%,rgba(0,225,171,0.2),transparent_34rem)]" />
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            backgroundSize: '32px 32px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '32px 32px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-obsidian-900 to-transparent" />

      <AnimatePresence>
        <motion.div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.26em] text-default-400 drop-shadow-[0_0_16px_rgba(0,225,171,0.5)]">
                OpenAI Codex / Enterprise AI
              </p>

              <h1 className="mb-5 max-w-3xl font-display text-[46px] font-extrabold leading-[1.02] text-obsidian-50 sm:text-[64px] md:text-[84px]">
                Daniel Steigman.
              </h1>

              <p className="mb-5 max-w-2xl text-[22px] leading-relaxed text-obsidian-100 md:text-[28px]">
                I deploy agentic systems that help secure enterprises{' '}
                <span className="font-semibold text-default-400">scale</span>
                {` `}
                how software gets built.
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonBright
                  title="Read about my Codex work"
                  link="/codex"
                  style={ButtonStyles.SOLID}
                />
                <ButtonBright title="View featured work" link="/#work" />
              </div>
            </motion.div>

            <motion.div
              className="relative hidden xl:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="glass-panel ambient-glow relative overflow-hidden rounded-3xl">
                <Image
                  src="/codex-enterprise-hero.png"
                  alt="Abstract secure enterprise Codex deployment visual"
                  width={900}
                  height={600}
                  priority
                  className="aspect-[4/3] object-cover grayscale-[0.2]"
                />
                <div className="scanline absolute inset-0 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-white/10 bg-obsidian-900/80 text-sm backdrop-blur">
                  {[
                    ['NVIDIA', 'deployment'],
                    ['Sandbox', 'controls'],
                    ['LLM', 'review'],
                  ].map(([value, label]) => (
                    <div key={label} className="border-r border-white/10 p-4">
                      <div className="font-display font-bold text-white">
                        {value}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-default-400">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
