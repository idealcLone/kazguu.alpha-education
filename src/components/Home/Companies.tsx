import React from 'react';
import { companies } from '../../consts/companies';
import styles from './Companies.module.scss';
import { useLocalizationContext } from '../../contexts/localizationContext';

export const Companies: React.FC = () => {
  const { t } = useLocalizationContext();

  return (
    <div className={'flex flex-col gap-6 items-center content-container__md'}>
      <div className={'text-lg leading-8 font-medium text-gray-500'}>{t('we_are_trusted_by')}</div>
      <ul className={'w-full flex lg:flex-wrap justify-between lg:justify-center gap-7'}>
        {companies.map((company, index) => (
          <img
            className={`${styles.company} ${styles[`company--${index + 1}`]}`}
            key={index}
            src={company}
            alt={`company-${index + 1}`}
          />
        ))}
      </ul>
    </div>
  );
};
