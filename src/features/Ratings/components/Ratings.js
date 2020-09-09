import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { Block, Text, StarRating } from 'atoms';

import SubRating from './SubRating';

function Ratings() {

  const ratings = useStoreState(state => state.ratings.data);

  return (
    <Fragment>
      <Block minHeight={200} backgroundColor='white1' borderRadius={5} marginHorizontal={1} marginTop={1} shadow='shadow2' padding={1}>
        <Block center middle marginBottom={1}>
          <Text bold size={16} color='black1'>Overall Average Rating</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={ratings.overall}
            starSize={55}
          />
          <Text bold size={10} color='gray8'>{`(${ratings.overall.toFixed(2)}/5.00)`}</Text>
        </Block>
        <SubRating title='Delivery' rating={ratings.delivery} />
        <SubRating title='Transaction' rating={ratings.transaction} />
        <SubRating title='Product Quality' rating={ratings.productQuality} />
      </Block>
    </Fragment>
  );
}

export default memo(Ratings);