export interface IFeature {
  name: string;
  description?: string;
  icon: string;
  hoverColor?: string;
}

export const trackFeatures: IFeature[] = [
  {
    name: 'learning_statistics',
    icon: '/icons/statistics.svg',
  },
  {
    name: 'feedback',
    icon: '/icons/feedback.svg',
  },
  {
    name: 'large_selection_of_courses',
    icon: '/icons/course-options.svg',
  },
  {
    name: 'online_learning',
    icon: '/icons/online-education.svg',
  },
];

export const educationFeatures: IFeature[] = [
  {
    name: 'best_methodologies',
    description: 'best_methodologies_description',
    icon: '/icons/methodologies.svg',
  },
  {
    name: 'focus_on_results',
    description: 'focus_on_results_description',
    icon: '/icons/result.svg',
  },
  {
    name: 'open_portal',
    description: 'open_portal_description',
    icon: '/icons/open-portal.svg',
  },
  {
    name: 'reward_system',
    description: 'reward_system_description',
    icon: '/icons/rewarding-system.svg',
  },
];

export const platformFeatures: IFeature[] = [
  {
    name: 'finding_1',
    description: 'finding_1_description',
    icon: '/icons/play.svg',
    hoverColor: '#425FF866',
  },
  {
    name: 'finding_2',
    description: 'finding_2_description',
    icon: '/icons/game.svg',
    hoverColor: '#52D7A6B2',
  },
  {
    name: 'finding_3',
    description: 'finding_3_description',
    icon: '/icons/light.svg',
    hoverColor: '#B498F499',
  },
  {
    name: 'finding_4',
    description: 'finding_4_description',
    icon: '/icons/folder.svg',
    hoverColor: '#B498F499',
  },
  {
    name: 'finding_5',
    description: 'finding_5_description',
    icon: '/icons/statistics-orange.svg',
    hoverColor: '#FBA56499',
  },
  {
    name: 'finding_6',
    description: 'finding_6_description',
    icon: '/icons/like.svg',
    hoverColor: '#425FF866',
  },
];
