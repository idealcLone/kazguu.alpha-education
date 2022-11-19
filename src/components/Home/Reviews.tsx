import React from 'react';
import styles from './Reviews.module.scss';
import { IReview } from '../../types';
import { StarRating } from '../UI/StarRating';
import { reviews } from '../../consts/reviews';

type CardProps = {
  review: IReview;
};

const Card: React.FC<CardProps> = ({ review }) => {
  return (
    <div className={styles.card}>
      <img src={review.avatar} alt={review.fullName} className={styles['card__avatar']} />
      <div className={'text-xl leading-7 font-semibold text-black'}>{review.fullName}</div>
      <div className={styles['card__jobTitle']}>{review.jobTitle}</div>
      <p className={'mt-4 pb-4 text-base text-gray-500 leading-6 font-normal text-center mb-auto'}>
        {review.text}
      </p>
      <StarRating rating={review.rating} />
    </div>
  );
};

export const Reviews: React.FC = () => {
  return (
    <div className={`${styles.reviews} content-container`}>
      <div className={'text-blue uppercase text-base leading-6 font-semibold tracking-wide mb-2'}>
        Отзывы
      </div>
      <h2 className={styles.heading}>Что о нас говорят наши клиенты:</h2>
      <div className={'flex gap-6'}>
        {reviews.map((review) => (
          <Card key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
