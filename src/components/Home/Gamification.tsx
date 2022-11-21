import React from 'react';
import styles from './Gamification.module.scss';
import { Heading } from '../UI/Heading';
import { useLocalizationContext } from '../../contexts/localizationContext';

export const Gamification: React.FC = () => {
  const { t } = useLocalizationContext();

  return (
    <div className={'content-container'}>
      <Heading>{t('playful_approach')}</Heading>
      <div className={'flex md:flex-col gap-12 lg:gap-8 md:gap-6'}>
        <div className={styles.lgCard}>
          <h4>{t('playful_approach_1')}</h4>
          <p>{t('playful_approach_1_description')}</p>
          <img src="/img/gamification.png" alt="Gamification img" />
        </div>
        <div className={'flex flex-col flex-1 gap-6'}>
          <div className={styles.card}>
            <img src="/icons/security.svg" alt="Security icon" />
            <h4>{t('playful_approach_2')}</h4>
            <p>{t('playful_approach_2_description')}</p>
          </div>
          <div className={styles.card}>
            <img src="/icons/loading.svg" alt="Loading icon" />
            <h4>{t('playful_approach_3')}</h4>
            <p>{t('playful_approach_3_description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
