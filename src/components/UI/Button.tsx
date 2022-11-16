import React from 'react';
import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
