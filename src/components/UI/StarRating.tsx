import React from 'react';

type Props = {
  rating: number;
};

export const StarRating: React.FC<Props> = ({ rating }) => {
  return (
    <div className={'flex gap-2'}>
      {Array.from(Array(5)).map((num, index) => (
        <React.Fragment key={index}>
          {rating >= index + 1 ? (
            <img src="/icons/star-filled.svg" alt="Star" />
          ) : (
            <img src="/icons/star-gray.svg" alt="Star gray" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
