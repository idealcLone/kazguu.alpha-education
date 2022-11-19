export interface IFeature {
  name: string;
  description?: string;
  icon: string;
  hoverColor?: string;
}

export const trackFeatures: IFeature[] = [
  {
    name: 'Статистика обучения',
    icon: '/icons/statistics.svg',
  },
  {
    name: 'Обратная связь',
    icon: '/icons/feedback.svg',
  },
  {
    name: 'Большой выбор курсов',
    icon: '/icons/course-options.svg',
  },
  {
    name: 'Онлайн обучение',
    icon: '/icons/online-education.svg',
  },
];

export const educationFeatures: IFeature[] = [
  {
    name: 'Лучшие методологии',
    description:
      'Мы разработали платформу, которая позволяет эффективно организовать учебный материал и мотивировать ваших учеников при помощи специально разработанной системе вознаграждений',
    icon: '/icons/methodologies.svg',
  },
  {
    name: 'Нацеленность на результат',
    description:
      'Наша платформа предоставляет быстрый доступ ко всему материалу для эффективного обучения, а специально созданная игровая среда поможет вам не терять мотивацию и успешно усваивать новые знания',
    icon: '/icons/result.svg',
  },
  {
    name: 'Открытый портал',
    description:
      'В системе предусмотрены внутренняя валюта и очки опыта, которые присуждаются после выполнения определенных задач и достижений.',
    icon: '/icons/open-portal.svg',
  },
  {
    name: 'Система вознаграждений',
    description:
      'В системе предусмотрены внутренняя валюта и очки опыта, которые присуждаются после выполнения определенных задач и достижений.',
    icon: '/icons/rewarding-system.svg',
  },
];

export const platformFeatures: IFeature[] = [
  {
    name: 'Удобный просмотр ресурсов',
    description:
      'Система позволяет просмотр видео-лекций, PDF-презентаций, ссылки и прослушивание аудио файлов.',
    icon: '/icons/play.svg',
    hoverColor: '#425FF866',
  },
  {
    name: 'Геймификация',
    description:
      'В системе предусмотрены внутренняя валюта и очки опыта, которые присуждаются после выполнения определенных задач и достижений.',
    icon: '/icons/game.svg',
    hoverColor: '#52D7A6B2',
  },
  {
    name: 'Большое разнообразие вопросов',
    description:
      'Система поддерживает создание более 10 разных видов вопросов для более лучшего освоения и закрепления материала',
    icon: '/icons/light.svg',
    hoverColor: '#B498F499',
  },
  {
    name: 'Расписание лекций и вебинаров',
    description:
      'Обучающиеся также могут просматривать расписание на записанные курсы и отслеживать все дедлайны в удобном дэшборде.',
    icon: '/icons/folder.svg',
    hoverColor: '#B498F499',
  },
  {
    name: 'Статистика и анализ результатов',
    description:
      'Статистика по всем текущим курсам доступна в дэшборде обучаемого. Можно просматривать все оценки за задания, дедлайны и позицию и т.д.',
    icon: '/icons/statistics-orange.svg',
    hoverColor: '#FBA56499',
  },
  {
    name: 'Интуитивно удобный интерфейс',
    description:
      'Все формы, поля, таблицы, секции и элементы проработаны по всем стандартам UI/UX дизайна, что позволяет быстро освоиться',
    icon: '/icons/like.svg',
    hoverColor: '#425FF866',
  },
];
