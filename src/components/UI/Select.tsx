import React from 'react';

type Props = {
  options: string[];
};

export const Select: React.FC<Props> = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option value={option} className={'text-sm leading-5 font-medium text-gray-700'}>
          {option}
        </option>
      ))}
    </select>
  );
};
