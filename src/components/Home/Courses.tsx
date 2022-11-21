import React from 'react';
import styles from './Courses.module.scss';
import { ICourse } from '../../types';
import { courses } from '../../consts/courses';
import { StarRating } from '../UI/StarRating';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { useLocalizationContext } from '../../contexts/localizationContext';

type CardProps = {
  course: ICourse;
};

const Card: React.FC<CardProps> = ({ course }) => {
  const { t } = useLocalizationContext();

  return (
    <div className={`${styles.card} flex-1 rounded-3xl overflow-hidden`}>
      {course.tag && <div className={styles['course__tag']}>{t(course.tag.toLowerCase())}</div>}
      {course.image ? <img src="" alt="" /> : <div className={'h-52 bg-gray-200'} />}
      <div className={'p-6 pb-10'}>
        <div className={styles['course__name']}>{course.name}</div>
        <div className={styles['course__instructor']}>
          {t('instructor')}: {course.instructor}
        </div>
        <StarRating rating={course.rating} />
      </div>
    </div>
  );
};

export const Courses: React.FC = () => {
  const { t } = useLocalizationContext();

  return (
    <div className={'content-container'} id={'courses'}>
      <Heading>{t('popular_courses')}</Heading>
      <div className={'flex flex-col items-center gap-12 lg:gap-8 md:gap-7'}>
        <div
          className={
            'grid grid-rows-1 md:grid-rows-3 xl:grid-rows-2 grid-cols-3 md:grid-cols-1 xl:grid-cols-2 gap-x-8 xl:gap-y-12'
          }
        >
          {courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
        <Button>{t('view_all_courses')}</Button>
      </div>
    </div>
  );
};
