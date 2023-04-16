import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

import ButtonBright from '../components/ButtonBright';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [menu, setMenu] = React.useState(false);
  return (
    <div className="w-full text-white antialiased">
      {props.meta}

      <div className="mx-auto">
        <header className=" shadow-lg">
          <nav className="flex justify-between">
            <Link
              className="my-2 mx-6 h-12 w-12 hover:border-0 hover:brightness-125		"
              href="/"
            >
              <Image
                src="/NightTrekLogo.svg"
                alt="Nighttrek logo"
                width="128"
                height="128"
              />{' '}
            </Link>
            <ul className="mx-12 hidden flex-wrap content-center text-base sm:flex">
              <li className="mr-6 mt-2 flex">
                <p className="px-4 text-default-500">1.</p>
                <Link
                  href="/#about"
                  className="border-none text-white hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li className="mr-6 mt-2 flex">
                <p className="px-4 text-default-500">2.</p>
                <Link
                  href="/#experience"
                  className="border-none text-white hover:text-gray-900"
                >
                  Experience
                </Link>
              </li>
              <li className="mr-6 mt-2 flex">
                <p className="brightText px-4">3.</p>
                <Link
                  href="/#work"
                  className="border-none text-white hover:text-gray-900"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mr-6 mt-2 flex">
                <p className="px-4 text-default-500">4.</p>

                <Link
                  href="/#contact"
                  className="border-none text-white hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li className="mr-6">
                <ButtonBright
                  externalURL="https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/Daniel_Steigman_Resume_2023.pdf?alt=media&token=a29a97b7-a4f8-4dc4-a766-e94ba8f54db1"
                  title="Resume"
                />
              </li>
            </ul>
            <div className="mx-12 flex flex-col content-center sm:hidden">
              <div
                className="my-2 h-12 w-12 font-bold hover:bg-red-300"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <Image
                  src="/menu.svg"
                  alt="Menu"
                  height={48}
                  width={48}
                  // className="animate-spin"
                />
              </div>
            </div>
          </nav>
          <nav className="flex flex-nowrap content-center justify-center sm:hidden">
            {menu && (
              <ul className="mx-12 flex flex-col content-center justify-evenly text-base">
                <li className="mr-6 mt-2 flex">
                  <p className="px-4 text-default-500">1.</p>
                  <Link
                    href="/#about"
                    className="border-none text-white hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li className="mr-6 mt-2 flex">
                  <p className="px-4 text-default-500">2.</p>
                  <Link
                    href="/#experience"
                    className="border-none text-white hover:text-gray-900"
                  >
                    Experience
                  </Link>
                </li>
                <li className="mr-6 mt-2 flex">
                  <p className="brightText px-4">3.</p>
                  <Link
                    href="/#work"
                    className="border-none text-white hover:text-gray-900"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="mr-6 mt-2 flex">
                  <p className="px-4 text-default-500">4.</p>

                  <Link
                    href="/#contact"
                    className="border-none text-white hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
                <li className="my-6 mr-6 flex justify-center">
                  <ButtonBright
                    externalURL="https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/Daniel_Steigman_Resume_2023.pdf?alt=media&token=a29a97b7-a4f8-4dc4-a766-e94ba8f54db1"
                    title="Resume"
                  />
                </li>
              </ul>
            )}
          </nav>
        </header>
        <div className="relative">
          <div className="absolute top-0 z-0 h-full w-full rotate-180 bg-hero-texture bg-contain bg-bottom bg-repeat-x md:h-1/6	" />
          <main className="content py-5 text-xl short:py-12 xshort:py-24">
            {props.children}
          </main>
        </div>

        <footer className=" py-8 text-center text-sm text-slate-400">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
          <a
            className="text-default-500"
            href="https://github.com/ixartz/Next-js-Boilerplate"
          >
            {`@ixartz  Next-js-Boilerplate`}
          </a>
          .
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
};

export { Main };
