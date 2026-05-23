import Link from 'next/link';
import type { ReactNode } from 'react';

import Navigation from '@/components/Navigation';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="min-h-screen w-full select-none bg-obsidian-900 text-obsidian-100 antialiased">
      {props.meta}

      <div className="mx-auto">
        <Navigation />
        <main className="content text-xl">{props.children}</main>

        <footer className="border-t border-white/10 bg-obsidian-900/80 px-5 py-16 text-center">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
            <div className="font-display text-2xl font-bold text-obsidian-50">
              Daniel Steigman
            </div>
            <div className="flex flex-wrap justify-center gap-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-obsidian-200">
              <a href="https://github.com/NightTrek">Github</a>
              <a href="https://discordapp.com/users/367142350151090177">
                Discord
              </a>
              <a href="https://www.linkedin.com/in/nighttrek/">LinkedIn</a>
              <Link href="/#contact">Contact</Link>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-obsidian-300">
              © {new Date().getFullYear()} {AppConfig.title}. Built with
              precision.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Main };
