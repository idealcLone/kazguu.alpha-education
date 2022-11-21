import React from 'react';
import styles from './PlatformFeatures.module.scss';
import { IFeature, platformFeatures } from '../../consts/features';
import { Heading } from '../UI/Heading';
import { useLocalizationContext } from '../../contexts/localizationContext';

type CardProps = {
  feature: IFeature;
  index: number;
};

const Card: React.FC<CardProps> = ({ feature, index }) => {
  const { t } = useLocalizationContext();

  return (
    <div className={`${styles.card} ${styles[`card--${index}`]}`}>
      <img src={feature.icon} alt={feature.name} className={styles.icon} />
      <h4 className={'mb-5 text-xl leading-7 font-medium text-black'}>{t(feature.name)}</h4>
      <p className={'text-base text-gray-500 leading-6 font-normal'}>{t(feature.description!)}</p>
    </div>
  );
};

export const PlatformFeatures: React.FC = () => {
  const { t } = useLocalizationContext();

  return (
    <div className={'content-container flex flex-col gap-6'} id={'features'}>
      <Heading>{t('on_our_platform_you_will_find')}</Heading>
      <div
        className={
          'grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 grid-rows-2 md:grid-rows-6 lg:grid-rows-3 gap-x-8 gap-y-16 md:gap-y-14 lg:gap-y-12'
        }
      >
        {platformFeatures.map((feature, index) => (
          <Card key={feature.name} feature={feature} index={index + 1} />
        ))}
      </div>
    </div>
  );
};
