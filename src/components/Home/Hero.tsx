import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../UI/Button';

export const Hero: React.FC = () => {
  return (
    <div className={'content-container mt-10 py-10 flex items-start gap-16'}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          Образовательная платформа <span className={'text-blue'}>нового</span> поколения
        </h1>
        <p className={'text-lg leading-6 font-normal text-gray-500 mt-6 mb-16'}>
          Мы соединили игровой подход, удобный доступ к материалу и огромное разнообразие вопросов в
          уникальной системе, чтобы сделать ваш образовательный процесс более эффективным и
          увлекательным
        </p>
        <Button>Получить демо</Button>
      </div>
      <img src="/img/hero-illustration.png" alt="Hero Illustration" className={`${styles.right}`} />
    </div>
  );
};