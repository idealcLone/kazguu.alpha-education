import React from 'react';
import { Button } from '../UI/Button';
import { Select } from '../UI/Select';

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-20">
      <div className="flex justify-between">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <div></div>
        <div className={'flex gap-6 items-center'}>
          <Select options={['KZ', 'RU', 'EN']} />
          <Button>
            <img src="/icons/login.svg" alt="Login Icon" />
            <span className={'text-sm leading-5 font-medium text-white'}>Войти</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
