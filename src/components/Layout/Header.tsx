import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { Select } from '../UI/Select';
import { links } from '../../consts/links';
import styles from './Header.module.scss';
import { MobileMenu } from '../Home/MobileMenu';
import { useWindowSize } from '../../hooks/useWindowSize';
import { MD } from '../../consts/breakpoints';
import { useLocalizationContext } from '../../contexts/localizationContext';
import { LanguageSelect } from '../Home/LanguageSelect';

export const Header: React.FC = () => {
  const { width } = useWindowSize();
  const { t } = useLocalizationContext();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="py-6 px-20 lg:px-12 md:px-8 sm:px-5 shadow-sm shadow top-0 left-0 sticky bg-white z-50">
        <div className="relative flex justify-between">
          <img
            src="/logo.png"
            alt="Logo"
            className="relative h-10 cursor-pointer"
            onClick={handleLogoClick}
          />
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
          <div className={'relative flex gap-6 items-center'}>
            {width > MD ? (
              <>
                <LanguageSelect className="bg-white"/>
                <Button>
                  <img src="/icons/login.svg" alt="Login Icon" />
                  <span>{t('login')}</span>
                </Button>
              </>
            ) : mobileMenuOpen ? (
              <LanguageSelect className={'sm:mr-8 md:mr-5'} />
            ) : (
              <Button className={styles.loginBtn}>
                <img src="/icons/login.svg" alt="Login Icon" />
                <span>Войти</span>
              </Button>
            )}
          </div>
        </div>
      </header>
      {width < MD && <MobileMenu open={mobileMenuOpen} handleChange={handleMobileMenuToggle} />}
    </>
  );
};
