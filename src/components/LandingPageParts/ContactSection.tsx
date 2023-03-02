import Image from 'next/image';

import ButtonBright from '../ButtonBright';

const ContactSection = () => {
  return (
    <div
      className="my-40 flex h-fit flex-col items-center justify-start"
      id={'contact'}
    >
      <div className="flex w-full max-w-2xl flex-col content-between justify-start py-20 px-6 text-base">
        <div className="text-2xl font-bold text-slate-400">
          <span className="font-normal text-default-500">4. {` `}</span>
          Contact me
        </div>
        <div className="text-slate-400">
          I am activly interviewing at roles in{' '}
          <span className="font-normal text-default-500">San Francisco.</span> I
          am open to{' '}
          <span className="font-normal text-default-500">hybrid</span> or{' '}
          <span className="font-normal text-default-500">remote </span>
          work opportunities. If you think I would be a good fit for your role
          set some time up to chat.
        </div>
        <div className="my-10 flex justify-evenly">
          <ButtonBright
            title="Meet me"
            externalURL="https://calendly.com/nighttrek/30min"
          />
        </div>
        <div className="my-20 flex flex-wrap content-center justify-between">
          <a
            className="hover:border-default-500"
            href="https://github.com/NightTrek"
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
            className="hover:border-default-500"
            href="https://discordapp.com/users/367142350151090177"
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
            className="hover:border-default-500"
            href="https://github.com/NightTrek"
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
    </div>
  );
};

export default ContactSection;
