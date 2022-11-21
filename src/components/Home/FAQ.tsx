import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import { social } from '../../consts/social';
import { faqs } from '../../consts/faqs';
import { Heading } from '../UI/Heading';
import { useLocalizationContext } from '../../contexts/localizationContext';

export const FAQ: React.FC = () => {
  const { t } = useLocalizationContext();

  const [currentFAQIndex, setCurrentFAQIndex] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setCurrentFAQIndex((prevFAQ) => (prevFAQ === index ? null : index));
  };

  return (
    <div
      className={`content-container__md flex lg:flex-col lg:items-center gap-6 md:gap-12 lg:gap-8`}
    >
      <div className={styles.left}>
        <Heading>
          <div className={'md:w-3/4 md:mx-auto'}>{t('faq_answers')}</div>
        </Heading>
        <p className={'text-lg leading-7 font-normal text-gray-500 lg:text-center'}>
          {t('contact_us_on_social_media')}
        </p>
        <ul className={'flex gap-8 lg:justify-center'}>
          {social.map((item) => (
            <li key={item.name}>
              <img src={item.icon} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.questions}>
          {faqs.map((faq, index) =>
            currentFAQIndex === index ? (
              <li key={index} className={'flex flex-col gap-2 py-6'}>
                <div
                  className={
                    'text-xl leading-8 font-semibold text-black flex justify-between gap-7 cursor-pointer'
                  }
                  onClick={() => handleFAQClick(index)}
                >
                  <div>{t(faq.question)}</div>
                  <img src="/icons/arrow-up.svg" alt="Arrow up icon" />
                </div>
                <p className={'text-lg leading-7 font-normal text-gray-500'}>{t(faq.answer)}</p>
              </li>
            ) : (
              <li
                key={index}
                className={
                  'text-xl leading-8 font-semibold text-black py-6 flex justify-between gap-7 cursor-pointer'
                }
                onClick={() => handleFAQClick(index)}
              >
                <div>{t(faq.question)}</div>
                <img src="/icons/arrow-down.svg" alt="Arrow down icon" />
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};
