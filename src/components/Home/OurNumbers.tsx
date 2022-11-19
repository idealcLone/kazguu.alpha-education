import React from 'react';
import styles from './OurNumbers.module.scss';

export const OurNumbers: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>О нас в цифрах</h2>
      <ul className={'flex gap-16'}>
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
