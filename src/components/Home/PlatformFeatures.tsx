import React from 'react';
import styles from './PlatformFeatures.module.scss';
import { IFeature, platformFeatures } from '../../consts/features';
import { Heading } from '../UI/Heading';

type CardProps = {
  feature: IFeature;
  index: number;
};

const Card: React.FC<CardProps> = ({ feature, index }) => {
  return (
    <div className={`${styles.card} ${styles[`card--${index}`]}`}>
      <img src={feature.icon} alt={feature.name} className={styles.icon} />
      <h4 className={'mb-5 text-xl leading-7 font-medium text-black'}>{feature.name}</h4>
      <p className={'text-base text-gray-500 leading-6 font-normal'}>{feature.description}</p>
    </div>
  );
};

export const PlatformFeatures: React.FC = () => {
  return (
    <div className={'content-container lg:flex lg:flex-col lg:gap-6'} id={'features'}>
      <Heading>На нашей платформе вы найдете</Heading>
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
