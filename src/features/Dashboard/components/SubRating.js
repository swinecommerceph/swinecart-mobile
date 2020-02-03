import React, { Fragment, memo } from 'react';
import { Block, Text, StarRating } from 'shared';

function SubRating(props) {

  const { 
    title, titleSize, textColor,
    rating, ratingTextSize
  } = props;

  return (
    <Fragment>
      <Block row center>
        <Block flex={1} left>
          <Text bold size={titleSize} color={textColor}>{title}</Text>
        </Block>
        <Block row center right>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={rating}
            starSize={30}
          />
          <Text bold size={ratingTextSize} color={textColor} marginLeft={0.5}>{`(${rating.toFixed(2)}/5)`}</Text>
        </Block>
      </Block>
    </Fragment>
  );
}

export default memo(SubRating);