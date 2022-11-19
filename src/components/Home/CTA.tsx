import React from 'react';
import styles from './CTA.module.scss';
import { Button } from '../UI/Button';

export const CTA: React.FC = () => {
  return (
    <div className={`content-container__md ${styles.cta}`} id={'contacts'}>
      <h2 className={styles.heading}>
        Мы будем рядом и поможем усваивать <span>новые знания</span>
      </h2>
      <Button>Оставить заявку</Button>
    </div>
  );
};
