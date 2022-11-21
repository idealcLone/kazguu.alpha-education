import React from 'react';
import { Select } from '../UI/Select';
import { useLocalizationContext } from '../../contexts/localizationContext';
import { KZ, RU } from '../../consts/languages';

type Props = {
  className?: string;
};

export const LanguageSelect: React.FC<Props> = ({ className }) => {
  const { language, setLanguage } = useLocalizationContext();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <Select
      value={language}
      options={[RU, KZ]}
      handleChange={handleLanguageChange}
      className={className}
    />
  );
};
