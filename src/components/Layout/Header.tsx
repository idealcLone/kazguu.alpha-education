import React from 'react';
import { Button } from '../UI/Button';
import { Select } from '../UI/Select';
import { links } from '../../consts/links';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target);
  };

  return (
    <header className="py-6 px-20 shadow-sm shadow top-0 sticky bg-white z-50">
      <div className="flex justify-between">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <ul className={'list-none flex items-center gap-10'}>
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
          <Select options={['KZ', 'RU']} handleChange={handleLanguageChange} />
          <Button>
            <img src="/icons/login.svg" alt="Login Icon" />
            <span className={'text-sm leading-5 font-medium text-white'}>Войти</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
