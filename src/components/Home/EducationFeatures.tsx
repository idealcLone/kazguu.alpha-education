import React from 'react';
import styles from './EducationFeatures.module.scss';
import { educationFeatures } from '../../consts/features';
import { Heading } from '../UI/Heading';
import { useLocalizationContext } from '../../contexts/localizationContext';

export const EducationFeatures: React.FC = () => {
  const { t } = useLocalizationContext();

  return (
    <div className={'content-container'} id={'services'}>
      <Heading>{t('make_learning_convenient_and_interesting')}</Heading>
      <div
        className={
          'grid grid-cols-2 md:grid-cols-1 grid-rows-2 md:grid-rows-4 gap-y-16 md:gap-y-10 gap-x-8'
        }
      >
        {educationFeatures.map((feature) => (
          <div key={feature.name} className={'flex flex-col items-start md:items-center'}>
            <img src={feature.icon} alt={feature.name} className={'mb-6 h-12 w-12'} />
            <h4 className={'mb-2 text-xl leading-7 font-semibold text-black'}>{t(feature.name)}</h4>
            <p className={styles.description}>{t(feature.description!)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
