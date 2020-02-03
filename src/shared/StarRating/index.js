import React, { memo } from 'react';
import RNStarRating from 'react-native-star-rating';

function StarRating(props) {
  return (
    <RNStarRating
      {...props}
      fullStarColor='#F7CA18'
      emptyStar={'star-border'}
      fullStar={'star'}
      halfStar={'star-half'}
      iconSet={'MaterialIcons'}
    />
  );
}

export default memo(StarRating);