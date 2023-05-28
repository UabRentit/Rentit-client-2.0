import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Props } from './types';
import Button from '../../Button';
import rentitLogo from '../../../assets/svgs/rentitLogo.svg';
import hamburgerIcon from '../../../assets/svgs/hamburgerIcon.svg';

const Menu: React.FC<Props> = ({ menu }) => (
  <nav className="shadow-[0_0_40px_rgba(25,29,49,0.2)] rounded-2xl pt-4 pb-6 px-10">
    <div className="flex justify-between align-middle">
      <NextLink
        href="/"
        className="flex"
      >
        <Image
          src={rentitLogo}
          alt="Rentit Logo"
        />
      </NextLink>
      <div className="flex">
        <Button
          variant="text"
          link={{ type: 'page', label: 'Prisijungti', url: '/prisijungti' }}
        />
        <Button
          variant="contained"
          link={{ type: 'page', label: 'Nemokama registracija', url: '/registruotis' }}
        />
        <Image
          className="pl-6"
          src={hamburgerIcon}
          alt="Hamburger menu icon"
        />
      </div>
    </div>
  </nav>
);

export default Menu;
