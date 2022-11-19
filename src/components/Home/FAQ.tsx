import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import { social } from '../../consts/social';
import { faqs, IFAQ } from '../../consts/faqs';

export const FAQ: React.FC = () => {
  const [currentFAQIndex, setCurrentFAQIndex] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setCurrentFAQIndex((prevFAQ) => (prevFAQ === index ? null : index));
  };

  return (
    <div className={`content-container__md flex gap-6`}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Ответы на популярные вопросы</h2>
        <p className={'text-lg leading-7 font-normal text-gray-500'}>
          Не нашли ответа на свой вопрос? Напишите нам в соцсетх
        </p>
        <ul className={'flex gap-8'}>
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
                    'text-xl leading-8 font-semibold text-black flex justify-between cursor-pointer'
                  }
                  onClick={() => handleFAQClick(index)}
                >
                  <div>{faq.question}</div>
                  <img src="/icons/arrow-up.svg" alt="Arrow up icon" />
                </div>
                <p className={'text-lg leading-7 font-normal text-gray-500'}>{faq.answer}</p>
              </li>
            ) : (
              <li
                key={index}
                className={
                  'text-xl leading-8 font-semibold text-black py-6 flex justify-between cursor-pointer'
                }
                onClick={() => handleFAQClick(index)}
              >
                <div>{faq.question}</div>
                <img src="/icons/arrow-down.svg" alt="Arrow down icon" />
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};
