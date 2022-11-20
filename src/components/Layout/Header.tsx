import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { Select } from '../UI/Select';
import { links } from '../../consts/links';
import styles from './Header.module.scss';
import { MobileMenu } from '../Home/MobileMenu';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="py-6 px-20 lg:px-12 md:px-8 sm:px-5 shadow-sm shadow top-0 left-0 sticky bg-white"
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between">
        <img src="/logo.png" alt="Logo" className="h-10 cursor-pointer" onClick={handleLogoClick} />
        <ul className={'list-none flex items-center gap-10 lg:gap-6 md:hidden'}>
          {links.map((link) => (
            <li
              key={link.name}
              onClick={link.onClick}
              className={`no-underline text-base leading-6 font-normal text-gray-800 cursor-pointer ${styles.link}`}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div className={'flex gap-6 items-center'}>
          <Select
            className={`md:${mobileMenuOpen ? 'block' : 'hidden'}`}
            options={['KZ', 'RU']}
            handleChange={handleLanguageChange}
          />
          <Button className={`md:${mobileMenuOpen ? 'hidden' : 'block'}`}>
            <img src="/icons/login.svg" alt="Login Icon" />
            <span>Войти</span>
          </Button>
          <MobileMenu open={mobileMenuOpen} handleChange={handleMobileMenuToggle} />
        </div>
      </div>
    </header>
  );
};
