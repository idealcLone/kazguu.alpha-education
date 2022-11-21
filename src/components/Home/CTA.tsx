import React from 'react';
import styles from './CTA.module.scss';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { useLocalizationContext } from '../../contexts/localizationContext';

export const CTA: React.FC = () => {
  const { t } = useLocalizationContext();
  const heading = t('we_will_be_there_and_help_you_learn');
  const headingToArray = heading.split(' ');
  const sliceIndex = headingToArray.length - 2;

  return (
    <div className={`content-container__md ${styles.cta}`} id={'contacts'}>
      <Heading className={styles.heading}>
        {headingToArray.slice(0, sliceIndex).join(' ')}
        <span>{' ' + headingToArray.slice(sliceIndex).join(' ')}</span>
      </Heading>
      <Button>{t('submit_application')}</Button>
    </div>
  );
};
