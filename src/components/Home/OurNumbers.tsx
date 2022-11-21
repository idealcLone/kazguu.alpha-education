import React, { RefObject, useEffect, useRef } from 'react';
import styles from './OurNumbers.module.scss';
import { Heading } from '../UI/Heading';
import { useLocalizationContext } from '../../contexts/localizationContext';

const COURSE_NUMBER = 220;
const CURATOR_NUMBER = 90;
const GRADUATE_NUMBER = 1500;
const VIDEO_LESSON_NUMBER = 10000;
const ANIMATION_DURATION = 1; // seconds
const FPS = 60;

export const OurNumbers: React.FC = () => {
  const { t } = useLocalizationContext();

  const courseNumberRef = useRef<HTMLDivElement>(null);
  const curatorNumberRef = useRef<HTMLDivElement>(null);
  const graduateNumberRef = useRef<HTMLDivElement>(null);
  const videoLessonNumberRef = useRef<HTMLDivElement>(null);

  const countNumber = (ref: RefObject<HTMLDivElement>, limit: number) => {
    let counter = 0;
    const interval = limit / ANIMATION_DURATION / FPS;

    const incrementNumber = () => {
      if (ref.current && counter < limit) {
        const currentNumber = counter + interval;
        counter += interval;
        ref.current.innerText = Math.min(limit, Math.ceil(currentNumber)).toString();
        requestAnimationFrame(incrementNumber);
      }
    };

    requestAnimationFrame(incrementNumber);
  };

  useEffect(() => {
    if (courseNumberRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            countNumber(courseNumberRef, COURSE_NUMBER);
            countNumber(curatorNumberRef, CURATOR_NUMBER);
            countNumber(graduateNumberRef, GRADUATE_NUMBER);
            countNumber(videoLessonNumberRef, VIDEO_LESSON_NUMBER);
          }
        },
        { threshold: 1 },
      );

      observer.observe(courseNumberRef.current);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Heading>
        <span className={'text-white'}>{t('about_us_in_numbers')}</span>
      </Heading>
      <ul
        className={
          'grid grid-rows-1 md:grid-rows-4 lg:grid-rows-2 grid-cols-4 md:grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-y-12 justify-center items-center'
        }
      >
        <li className={styles.listItem}>
          <div ref={courseNumberRef}>0</div>
          <div>{t('of_courses')}</div>
        </li>
        <li className={styles.listItem}>
          <div ref={curatorNumberRef}>0</div>
          <div>{t('of_curators')}</div>
        </li>
        <li className={styles.listItem}>
          <div ref={graduateNumberRef}>0</div>
          <div>{t('of_alumni')}</div>
        </li>
        <li className={styles.listItem}>
          <div ref={videoLessonNumberRef}>0</div>
          <div>{t('of_video_tutorials')}</div>
        </li>
      </ul>
    </div>
  );
};
