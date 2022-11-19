import React from 'react';
import styles from './PlatformFeatures.module.scss';
import { IFeature, platformFeatures } from '../../consts/features';

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
    <div className={'content-container'} id={'features'}>
      <h2 className={styles.heading}>На нашей платформе вы найдете</h2>
      <div className={'grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-16'}>
        {platformFeatures.map((feature, index) => (
          <Card key={feature.name} feature={feature} index={index + 1} />
        ))}
      </div>
    </div>
  );
};
