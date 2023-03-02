import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import ButtonBright from '../components/ButtonBright';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-white antialiased">
    {props.meta}

    <div className="mx-auto">
      <header className="shadow-lg">
        <nav className="flex justify-between">
          <div className="my-2 mx-6 h-12 w-12 bg-emerald-400"> </div>
          <ul className="mx-12 flex flex-wrap content-center text-base">
            <li className="mr-6 mt-2 flex">
              <p className="px-4 text-emerald-400">1.</p>
              <Link
                href="/#about"
                className="border-none text-white hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mr-6 mt-2 flex">
              <p className="px-4 text-emerald-400">2.</p>
              <Link
                href="/about/"
                className="border-none text-white hover:text-gray-900"
              >
                experience
              </Link>
            </li>
            <li className="mr-6 mt-2 flex">
              <p className="brightText px-4">3.</p>
              <a
                className="border-none text-white hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                Work
              </a>
            </li>
            <li className="mr-6 mt-2 flex">
              <p className="px-4 text-emerald-400">4.</p>

              <Link
                href="/blog/"
                className="border-none text-white hover:text-gray-900"
              >
                contact
              </Link>
            </li>
            <li className="mr-6">
              <ButtonBright externalURL="https://github.com/" title="resume" />
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  </div>
);

export { Main };
