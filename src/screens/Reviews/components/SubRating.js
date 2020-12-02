import React, { Fragment, memo } from 'react';

import { Block, Text, StarRating } from 'atoms';

function SubRating(props) {

  const {
    title, rating
  } = props;

  return (
    <Fragment>
      <Block row center>
        <Block flex={1} left>
          <Text bold size={12} color=''>{title}</Text>
        </Block>
        <Block row center right>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={rating}
            starSize={20}
          />
          <Text
            bold
            size={10}
            color=''
            marginLeft={0.5}
          >
            {`(${rating}/5)`}
          </Text>
        </Block>
      </Block>
    </Fragment>
  );
}

export default memo(SubRating);