import React from 'react';
import styles from './EducationFeatures.module.scss';
import { educationFeatures } from '../../consts/features';

export const EducationFeatures: React.FC = () => {
  return (
    <div className={'content-container'} id={'services'}>
      <h2 className={styles.heading}>Делаем обучение удобным и интересным</h2>
      <div className={'grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-8'}>
        {educationFeatures.map((feature) => (
          <div key={feature.name} className={'flex flex-col items-start'}>
            <img src={feature.icon} alt={feature.name} className={'mb-6 h-12 w-12'} />
            <h4 className={'mb-2 text-xl leading-7 font-semibold text-black'}>{feature.name}</h4>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
