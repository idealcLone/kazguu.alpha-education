import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../UI/Button';
import { useLocalizationContext } from '../../contexts/localizationContext';

export const Hero: React.FC = () => {
  const { t } = useLocalizationContext();
  const heading = t('next_generation_educational_platform');
  const headingArray = heading.split(' ');
  const sliceIndex = headingArray.length - 1;

  return (
    <div
      className={
        'content-container mt-10 md:mt-0 lg:mt-0 py-10 md:py-0 flex md:flex-col-reverse items-start gap-16 md:gap-5'
      }
    >
      <div className={styles.left}>
        <h1 className={styles.heading}>
          {headingArray.slice(0, sliceIndex - 1).join(' ')}{' '}
          <span className={'text-blue'}>{' ' + headingArray[sliceIndex - 1]}</span>{' '}
          {headingArray.at(-1)}
        </h1>
        <p className={'text-lg leading-6 font-normal text-gray-500 mt-6 mb-16 md:mb-10'}>
          {t('next_generation_educational_platform_description')}
        </p>
        <Button>{t('get_demo')}</Button>
      </div>
      <img src="/img/hero-illustration.png" alt="Hero Illustration" className={styles.right} />
    </div>
  );
};
