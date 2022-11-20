import React from 'react';
import styles from './Reviews.module.scss';
import { IReview } from '../../types';
import { StarRating } from '../UI/StarRating';
import { reviews } from '../../consts/reviews';
import { Heading } from '../UI/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

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

type SliderProps = {
  reviews: IReview[];
};

const Slider: React.FC<SliderProps> = ({ reviews }) => {
  return (
    <div className={'hidden lg:block w-full'}>
      <Swiper slidesPerView={1} loop>
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Card review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const Reviews: React.FC = () => {
  return (
    <div className={`${styles.reviews} content-container`}>
      <div className={'text-blue uppercase text-base leading-6 font-semibold tracking-wide mb-2'}>
        Отзывы
      </div>
      <Heading>Что о нас говорят наши клиенты:</Heading>
      <div className={'flex gap-6 block lg:hidden'}>
        {reviews.map((review) => (
          <Card key={review.id} review={review} />
        ))}
      </div>
      <Slider reviews={reviews} />
    </div>
  );
};
