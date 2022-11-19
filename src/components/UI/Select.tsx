import React from 'react';
import styles from './Select.module.scss';

type Props = {
  options: string[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<Props> = ({ options, handleChange }) => {
  return (
    <select onChange={handleChange} className={styles.select}>
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className={'text-sm leading-5 font-medium text-gray-700'}
        >
          {option}
        </option>
      ))}
    </select>
  );
};
