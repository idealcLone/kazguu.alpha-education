import React from 'react';
import { trackFeatures } from '../../consts/features';
import styles from './FeaturesTrack.module.scss';
import { useLocalizationContext } from '../../contexts/localizationContext';

type TrackProps = {
  listStyle: string;
};

const Track: React.FC<TrackProps> = ({ listStyle }) => {
  const { t } = useLocalizationContext();

  return (
    <ul className={`${listStyle} flex gap-20`}>
      {trackFeatures.map((feature) => (
        <li key={feature.name} className={'flex items-center gap-4 flex-shrink-0'}>
          <img src={feature.icon} alt="" className={'w-12 h-12'} />
          <div className={'text-xl leading-7 font-medium text-gray-800'}>{t(feature.name)}</div>
        </li>
      ))}
    </ul>
  );
};

export const FeaturesTrack: React.FC = () => {
  return (
    <div className={'relative h-12 w-full'}>
      <Track listStyle={styles.trackSecond} />
      <Track listStyle={styles.track} />
    </div>
  );
};
