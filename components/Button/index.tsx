import React from 'react';
import Link from 'next/link';
import { Type as LinkType } from '../../payload/fields/link';


interface ButtonProps {
  variant: 'contained' | 'outlined' | 'text'
  link?: LinkType;
  type?: 'button' | 'submit';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, link, children, type }) => {
  const isRelativeURL = link.url?.indexOf('/') === 0;
  const getButtonClass = (variant): string => {
    switch (variant) {
      case 'text':
        return 'text-violet-950 px-8 py-4';
      case 'outlined':
        return 'text-violet-950 border-2 border-violet-950 px-8 py-4';
      case 'contained':
      default:
        return 'bg-violet-950 text-white px-8 py-4 text-blue-600';
    }
  };

  if (link) {
    if (link.type === 'page' || isRelativeURL) {
      return (
        <Link
          className={`flex items-center justify-center rounded-full cursor-pointer ${getButtonClass(variant)}`}
          href={link.type === 'page' ? `/${link.page?.slug}` : link.url}
          scroll={false}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        href={link.url}
        className={`flex items-center justify-center rounded-full ${getButtonClass(variant)}`}
      >
        {link.label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-full ${getButtonClass(variant)}`}
    >
      {children}
    </button>
  );
};

export default Button;
