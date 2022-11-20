import React from 'react';
import styles from './Button.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ className, children }) => {
  return <button className={`${className} ${styles.btn}`}>{children}</button>;
};
