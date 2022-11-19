import React from 'react';
import styles from './Gamification.module.scss';

export const Gamification: React.FC = () => {
  return (
    <div className={'content-container'}>
      <h2 className={styles['heading']}>Игровой подход и удобный доступ к материалу</h2>
      <div className={'flex gap-12'}>
        <div className={styles.lgCard}>
          <h4>Платформа всегда под рукой</h4>
          <p>
            Проходите занятия, тренируйте навыки, делайте домашние задания на телефоне или
            компьютере в любом месте и в любое время
          </p>
          <img src="/img/gamification.png" alt="Gamification img" />
        </div>
        <div className={'flex flex-col flex-1 gap-6'}>
          <div className={styles.card}>
            <img src="/icons/security.svg" alt="Security icon" />
            <h4>Много полезной практики</h4>
            <p>
              Наблюдайте за своими успехами по всем текущим курсам. Вы сможете просматривать все
              оценки за задания, дедлайны и позицию и т.д.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/icons/loading.svg" alt="Loading icon" />
            <h4>Прогресс обучения</h4>
            <p>
              Наблюдайте за своими успехами по всем текущим курсам. Вы сможете просматривать все
              оценки за задания, дедлайны и позицию и т.д.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
