interface ISocial {
  name: string;
  link?: string;
  icon: string;
}

export const social: ISocial[] = [
  {
    name: 'Instagram',
    icon: '/icons/instagram.svg',
  },
  {
    name: 'Facebook',
    icon: '/icons/facebook.svg',
  },
  {
    name: 'Telegram',
    icon: '/icons/telegram.svg',
  },
];
