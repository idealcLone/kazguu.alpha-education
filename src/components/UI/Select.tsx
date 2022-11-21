import React from 'react';
import styles from './Select.module.scss';

type Props = {
  value: string;
  className?: string;
  options: string[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<Props> = ({ value, className, options, handleChange }) => {
  return (
    <select value={value} onChange={handleChange} className={`${className} ${styles.select}`}>
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
