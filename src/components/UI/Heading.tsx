import React from 'react';
import styles from './Heading.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Heading: React.FC<Props> = ({ className, children }) => {
  return <h2 className={`${styles.heading} ${className}`}>{children}</h2>;
};
