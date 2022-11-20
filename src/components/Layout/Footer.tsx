import React from 'react';
import { links } from '../../consts/links';
import styles from './Header.module.scss';

export const Footer: React.FC = () => {
  return (
      <footer className="py-16 px-28 shadow-sm shadow sticky bg-gray-900 z-50 text-gray-50">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-9 w-1/4">
            <div>
              {/*<img src="/logo_white.png" alt="Logo" className="h-10" />*/}
              <img src="/icons/white_alpha_edu.svg" alt="Alpha Education icon" />
            </div>
            <div className="flex flex-row text-gray-50 gap-6">
              <img src="/icons/white_instagram.svg" alt="Facebook icon" />
              <img src="/icons/white_facebook.svg" alt="Facebook icon" />
              <img src="/icons/white_telegram.svg" alt="Telegram icon" />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <p className="uppercase">Ссылки</p>
            <ul className={'list-none flex gap-4 flex-col'}>
              {links.map((link) => (
                  <li
                      key={link.name}
                      onClick={link.onClick}
                      className={`no-underline text-base leading-6 font-light text-gray-300 cursor-pointer ${styles.link}`}
                  >
                    {link.name}
                  </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <p className="uppercase">Контакты</p>
            <p className="font-light text-gray-300">+7 701 398 368 7</p>
            <p className="font-light text-gray-300">г. Астана, Кабанбай батыра 40</p>
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <p className="uppercase">Возникли вопросы? Напишите нам</p>
            <p className="font-light text-gray-300">alpha.design.astana@gmail.com</p>
          </div>
        </div>
      </footer>
  );
};
