import React from 'react';
import styles from './OurNumbers.module.scss';
import { Heading } from '../UI/Heading';

export const OurNumbers: React.FC = () => {
  return (
    <div className={styles.container}>
      <Heading>
        <span className={'text-white'}>О нас в цифрах</span>
      </Heading>
      <ul
        className={
          'grid grid-rows-1 md:grid-rows-4 lg:grid-rows-2 grid-cols-4 md:grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-y-12 justify-center items-center'
        }
      >
        <li className={styles.listItem}>
          <div>220</div>
          <div>Курсов</div>
        </li>
        <li className={styles.listItem}>
          <div>90</div>
          <div>Кураторов</div>
        </li>
        <li className={styles.listItem}>
          <div>1 500</div>
          <div>Выпускников</div>
        </li>
        <li className={styles.listItem}>
          <div>10 000</div>
          <div>Видеоуроков</div>
        </li>
      </ul>
    </div>
  );
};
