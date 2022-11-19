import React from 'react';
import styles from './UpperBody.module.scss';
import { Hero } from './Hero';
import { FeaturesTrack } from './FeaturesTrack';
import { EducationFeatures } from './EducationFeatures';
import { PlatformFeatures } from './PlatformFeatures';
import { Courses } from './Courses';
import { Reviews } from './Reviews';
import { OurNumbers } from './OurNumbers';
import { Gamification } from './Gamification';
import { Companies } from './Companies';
import { CTA } from './CTA';
import { FAQ } from './FAQ';

export const UpperBody: React.FC = () => {
  return (
    <div className={styles.upper}>
      <Hero />
      <FeaturesTrack />
      <EducationFeatures />
      <PlatformFeatures />
      <Courses />
      <Reviews />
      <OurNumbers />
      <Gamification />
      <Companies />
      <CTA />
      <FAQ />
    </div>
  );
};
