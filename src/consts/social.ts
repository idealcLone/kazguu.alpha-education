interface ISocial {
  name: string;
  link?: string;
  icon: string;
}

export const social: ISocial[] = [
  {
    name: 'instagram',
    icon: '/icons/instagram.svg',
  },
  {
    name: 'facebook',
    icon: '/icons/facebook.svg',
  },
  {
    name: 'telegram',
    icon: '/icons/telegram.svg',
  },
];
