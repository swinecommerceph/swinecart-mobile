import React, { Fragment, memo } from 'react';

import { Block, Text, StarRating } from 'atoms';

function SubRating(props) {

  const { title, rating } = props;

  return (
    <Fragment>
      <Block row center>
        <Block flex={1} left>
          <Text semibold size={12} color='black1'>{title}</Text>
        </Block>
        <Block row center right>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={rating}
            starSize={24}
          />
          <Text semibold size={10} color='gray8' marginLeft={0.5}>{`(${rating.toFixed(2)}/5.00)`}</Text>
        </Block>
      </Block>
    </Fragment>
  );
}

export default memo(SubRating);