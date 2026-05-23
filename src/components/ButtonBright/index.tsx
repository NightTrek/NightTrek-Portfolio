import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

export enum ButtonStyles {
  DEFAULT = 'DEFAULT',
  SOLID = 'SOLID',
  FLOWERPATCH = 'FLOWERPATCH',
}

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  title: string;
  link?: string;
  externalURL?: string;
  children?: ReactNode;
  style?: ButtonStyles;
};

const ButtonBright = (props: ButtonProps) => {
  let outerStyle =
    'button-bright group/button inline-flex min-h-[50px] w-fit flex-nowrap items-center justify-center rounded-lg text-center text-[15px] font-semibold leading-none transition-all duration-300 ';
  let innerStyle =
    'w-full text-center text-default-400 group-hover/button:text-obsidian-900';
  switch (props.style) {
    case ButtonStyles.SOLID:
      outerStyle +=
        'border border-default-400 bg-default-400 text-obsidian-900 shadow-[0_0_36px_rgba(0,225,171,0.18)] hover:-translate-y-0.5 hover:bg-default-500 hover:shadow-[0_0_48px_rgba(0,225,171,0.28)]';
      innerStyle = 'px-5 py-3 text-center text-obsidian-900';
      break;
    case ButtonStyles.FLOWERPATCH:
      outerStyle +=
        'hover:border-default-500 bg-nugbasePurple-300 text-gray-100 hover:bg-nugbasePurple-400 hover:text-default-500 hover:border-none';
      innerStyle =
        'px-2 py-1 text-center text-gray-100 group-hover/button:text-gray-200';
      break;
    default:
      outerStyle +=
        'border border-default-500/70 bg-default-500/5 px-4 py-2 text-default-400 hover:-translate-y-0.5 hover:border-default-400 hover:bg-default-400 hover:shadow-[0_0_36px_rgba(0,225,171,0.18)]';
      break;
  }
  if (props.link && props.link !== '')
    return (
      <Link href={props.link} title={props.title} className={outerStyle}>
        <div className={innerStyle}>{props.title}</div>
      </Link>
    );
  if (props.externalURL && props.externalURL !== '')
    return (
      <a
        href={props.externalURL}
        title={props.title}
        target="_blank"
        className={outerStyle}
      >
        <div className={innerStyle}>{props.title}</div>
      </a>
    );
  return (
    <div onClick={props.onClick} className={outerStyle}>
      <div className={innerStyle}>{props.title}</div>
    </div>
  );
};

export default ButtonBright;
