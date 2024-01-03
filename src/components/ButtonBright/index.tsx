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
  let outerStyle = 'group flex w-fit flex-nowrap rounded ';
  let innerStyle = 'text-default-500 group-hover:text-gray-100';
  switch (props.style) {
    case ButtonStyles.SOLID:
      outerStyle +=
        'bg-default-500 text-gray-100 hover:bg-gray-100 hover:text-default-500 hover:border-none';
      innerStyle = 'px-2 py-1 text-gray-100 group-hover:text-default-500';
      break;
    case ButtonStyles.FLOWERPATCH:
      outerStyle +=
        'hover:border-default-500 bg-nugbasePurple-300 text-gray-100 hover:bg-nugbasePurple-400 hover:text-default-500 hover:border-none';
      innerStyle = 'px-2 py-1 text-gray-100 group-hover:text-gray-200';
      break;
    default:
      outerStyle +=
        'border-2 border-default-500 px-3 py-1 hover:border-default-500 hover:bg-default-500';
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
