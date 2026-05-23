import Image from 'next/image';

import ButtonBright from '../ButtonBright';

const ContactSection = () => {
  return (
    <section
      className="mx-auto flex h-fit max-w-7xl scroll-mt-28 flex-col items-center justify-start px-5 py-16 md:px-10 lg:py-24"
      id={'contact'}
    >
      <div className="glass-panel reveal-panel flex w-full max-w-4xl flex-col content-between items-center justify-start rounded-3xl px-6 py-14 text-center text-base md:px-12">
        <div className="font-display text-[34px] font-bold text-obsidian-50 md:text-[48px]">
          <span className="font-normal text-default-500">04. </span>
          Contact Me
        </div>
        <div className="mt-4 max-w-2xl text-[17px] leading-8 text-obsidian-200">
          I am actively interviewing for roles in{' '}
          <span className="font-normal text-default-500">San Francisco.</span> I
          am open to{' '}
          <span className="font-normal text-default-500">hybrid</span> or{' '}
          <span className="font-normal text-default-500">remote </span>
          work opportunities. If you think I would be a good fit for your
          company please set some time to chat.
        </div>
        <div className="my-10 flex justify-evenly">
          <ButtonBright
            title="Meet me"
            externalURL="https://calendly.com/nighttrek/30min"
            style={undefined}
          />
        </div>
        <div className="flex flex-wrap content-center justify-center gap-5">
          <a
            className="grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/[0.04] transition hover:border-default-500 hover:bg-default-500/10"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/NightTrek"
            aria-label="Open Daniel Steigman's GitHub profile"
          >
            <Image
              className="p-1"
              src="/github-mark.svg"
              alt="github"
              width="64"
              height="64"
            />
          </a>
          <a
            className="grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/[0.04] transition hover:border-default-500 hover:bg-default-500/10"
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/users/367142350151090177"
            aria-label="Open Daniel Steigman's Discord profile"
          >
            <Image
              className="mt-2 p-1"
              src="/discord-mark-black.svg"
              alt="discord"
              width="64"
              height="64"
            />
          </a>
          <a
            className="grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/[0.04] transition hover:border-default-500 hover:bg-default-500/10"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nighttrek/"
            aria-label="Open Daniel Steigman's LinkedIn profile"
          >
            <Image
              className="p-1"
              src="/Linkedin-logo-128.svg"
              alt="linkedin"
              width="64"
              height="64"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
