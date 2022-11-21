import React, { createContext, useContext } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { RU } from '../consts/languages';

type Context = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
};

const LocalizationContext = createContext<Context>({
  language: RU,
  setLanguage: () => {},
  t: (key) => key,
});
export const useLocalizationContext = () => useContext(LocalizationContext);

type Props = {
  children: React.ReactNode;
};

export const LocalizationProvider: React.FC<Props> = ({ children }) => {
  const { language, setLanguage, t } = useLocalization();

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};
