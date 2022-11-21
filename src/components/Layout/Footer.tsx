import React from 'react';
import { links } from '../../consts/links';
import styles from './Header.module.scss';
import { useLocalizationContext } from '../../contexts/localizationContext';

export const Footer: React.FC = () => {
  const { t } = useLocalizationContext();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-28 shadow-sm shadow bg-gray-900 text-gray-50 md:px-12">
      <div className="flex justify-between gap-9 md:flex-col">
        <div className="flex flex-col gap-9 w-1/4 md:w-auto md:flex-row md:justify-between">
          <div>
            <img
              src="/icons/white_alpha_edu.svg"
              alt="Alpha Education icon"
              className={'cursor-pointer'}
              onClick={handleLogoClick}
            />
          </div>
          <div className="flex flex-row text-gray-50 gap-6">
            <img src="/icons/white_instagram.svg" alt="Facebook icon" />
            <img src="/icons/white_facebook.svg" alt="Facebook icon" />
            <img src="/icons/white_telegram.svg" alt="Telegram icon" />
          </div>
        </div>
        <hr className="text-gray-300"></hr>
        <div className="flex flex-col gap-4 w-1/4 md:w-auto">
          <p className="uppercase">{t('links')}</p>
          <ul className={'list-none flex gap-4 flex-col md:gap-2'}>
            {links.map((link) => (
              <li
                key={link.name}
                onClick={link.onClick}
                className={`no-underline text-base leading-6 font-light text-gray-300 cursor-pointer ${styles.link}`}
              >
                {t(link.name)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-1/4 md:w-auto">
          <p className="uppercase">{t('contacts')}</p>
          <div className="flex flex-col gap-4 md:gap-2">
            <p className="font-light text-gray-300">{t('phone')}</p>
            <p className="font-light text-gray-300">{t('address')}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/4 md:w-auto">
          <p className="uppercase">{t('have_questions_contact_us')}</p>
          <a href="mailto:alpha.design.astana@gmail.com" className="font-light text-gray-300">
            alpha.design.astana@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
