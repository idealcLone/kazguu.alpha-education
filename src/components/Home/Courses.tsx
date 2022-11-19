import React from 'react';
import styles from './Courses.module.scss';
import { ICourse } from '../../types';
import { courses } from '../../consts/courses';
import { StarRating } from '../UI/StarRating';
import { Button } from '../UI/Button';

type CardProps = {
  course: ICourse;
};

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <div className={`${styles.card} flex-1 rounded-3xl overflow-hidden`}>
      {course.tag && <div className={styles['course__tag']}>{course.tag}</div>}
      {course.image ? <img src="" alt="" /> : <div className={'h-52 bg-gray-200'} />}
      <div className={'p-6 pb-10'}>
        <div className={styles['course__name']}>{course.name}</div>
        <div className={styles['course__instructor']}>Instructor: {course.instructor}</div>
        <StarRating rating={course.rating} />
      </div>
    </div>
  );
};

export const Courses: React.FC = () => {
  return (
    <div className={'content-container'} id={'courses'}>
      <h2 className={styles.heading}>Популярные курсы</h2>
      <div className={'flex flex-col items-center gap-12'}>
        <div className={'flex gap-8 self-stretch'}>
          {courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
        <Button>Посмотреть все курсы</Button>
      </div>
    </div>
  );
};
