import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  title: string;
  link?: string;
  externalURL?: string;
  children?: ReactNode;
};

const ButtonBright = (props: ButtonProps) => {
  if (props.link)
    return (
      <Link
        href={props.link}
        title={props.title}
        className="group flex flex-nowrap rounded border-2 border-emerald-400 px-3 py-1 hover:border-emerald-400 hover:bg-emerald-400"
      >
        <div className="text-emerald-400 group-hover:text-gray-100">
          {props.title}
        </div>
      </Link>
    );
  if (props.externalURL)
    return (
      <a
        href={props.externalURL}
        title={props.title}
        className="group flex flex-nowrap rounded border-2 border-emerald-400 px-3 py-1 hover:border-emerald-400 hover:bg-emerald-400"
      >
        <div className="text-emerald-400 group-hover:text-gray-100">
          {props.title}
        </div>
      </a>
    );
  return (
    <div
      onClick={props.onClick}
      className="group flex flex-nowrap rounded border-2 border-emerald-400 px-3 py-1 hover:border-emerald-400 hover:bg-emerald-400"
    >
      <div className="text-emerald-400 group-hover:text-gray-100">
        {props.title}
      </div>
    </div>
  );
};

export default ButtonBright;
