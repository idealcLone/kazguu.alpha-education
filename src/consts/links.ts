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
    name: 'Services',
    onClick: () => handleScrollToElement('services'),
  },
  {
    name: 'Features',
    onClick: () => handleScrollToElement('features'),
  },
  {
    name: 'Courses',
    onClick: () => handleScrollToElement('courses'),
  },
  {
    name: 'Contacts',
    onClick: () => handleScrollToElement('contacts'),
  },
];
