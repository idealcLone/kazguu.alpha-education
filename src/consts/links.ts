import { ILink } from '../types';

export const links: ILink[] = [
  {
    name: 'Services',
    onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    name: 'Features',
    onClick: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    name: 'Courses',
    onClick: () => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    name: 'Contacts',
    onClick: () => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }),
  },
];
