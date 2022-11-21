import { useCallback, useEffect, useState } from 'react';
import { ru } from '../translations/ru';
import { kz } from '../translations/kz';
import { RU } from '../consts/languages';

type Return = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
};

const LANGUAGE = 'language';

export const useLocalization = (): Return => {
  const storedLanguage = localStorage.getItem(LANGUAGE);

  const getTranslations = (language: string): Record<string, string> => (language === RU ? ru : kz);

  const [language, setLanguage] = useState<string>(storedLanguage || RU);
  const [translations, setTranslations] = useState<Record<string, string>>(
    storedLanguage ? getTranslations(storedLanguage) : ru,
  );

  useEffect(() => {
    localStorage.setItem(LANGUAGE, language);
    setTranslations(getTranslations(language));
  }, [language]);

  console.log(translations);

  const t = useCallback((key: string): string => translations[key] || key, [translations]);

  return { language, setLanguage, t };
};
