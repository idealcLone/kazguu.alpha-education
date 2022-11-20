import React from 'react';
import styles from './CTA.module.scss';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';

export const CTA: React.FC = () => {
  return (
    <div className={`content-container__md ${styles.cta}`} id={'contacts'}>
      <Heading>
        Мы будем рядом и поможем усваивать <span>новые знания</span>
      </Heading>
      <Button>Оставить заявку</Button>
    </div>
  );
};
