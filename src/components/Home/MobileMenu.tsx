import React from 'react';
import styles from './MobileMenu.module.scss';
import { links } from '../../consts/links';
import { Button } from '../UI/Button';
import { ILink } from '../../types';

type Props = {
  open: boolean;
  handleChange: () => void;
};

export const MobileMenu: React.FC<Props> = ({ open, handleChange }) => {
  const handleLinkClick = (link: ILink) => {
    handleChange();
    setTimeout(() => {
      link.onClick();
    }, 100);
  };

  return (
    <div className={`${styles.burger}`}>
      <input
        type={'checkbox'}
        id={'burger-menu'}
        className={styles['burger__checkbox']}
        checked={open}
        onChange={handleChange}
      />
      <label htmlFor="burger-menu" className={styles['burger__btn']}>
        <span className={styles['burger__icon']} />
      </label>
      <div className={styles.bg} />
      <div className={styles['links__container']}>
        <h2>Menu</h2>
        <ul className={styles['links']}>
          {links.map((link) => (
            <li key={link.name} onClick={() => handleLinkClick(link)}>
              {link.name}
            </li>
          ))}
        </ul>
        <Button>
          <img src="/icons/login.svg" alt="Login Icon" />
          <span className={'text-sm leading-5 font-medium text-white'}>Войти</span>
        </Button>
      </div>
    </div>
  );
};
