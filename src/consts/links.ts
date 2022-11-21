import { ILink } from '../types';

const HEADER_HEIGHT = 90;
const OFFSET = 30;

const handleScrollToElement = (link: string) => {
  const element = document.getElementById(link);
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT - OFFSET,
      behavior: 'smooth',
    });
  }
};

export const links: ILink[] = [
  {
    name: 'services',
    onClick: () => handleScrollToElement('services'),
  },
  {
    name: 'features',
    onClick: () => handleScrollToElement('features'),
  },
  {
    name: 'courses',
    onClick: () => handleScrollToElement('courses'),
  },
  {
    name: 'contacts',
    onClick: () => handleScrollToElement('contacts'),
  },
];
