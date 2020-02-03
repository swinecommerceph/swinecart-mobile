import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { Block, Text, StarRating, LoadingView, BlankScreen } from 'shared';

import SubRating from './SubRating';

function Ratings() {

  const isLoading = useStoreState(state => state.ratings.isLoading);
  const ratings = useStoreState(state => state.ratings.data);

  if (isLoading) {
    return (
      <Block minHeight={200} borderRadius={5} margin={1}>
        <LoadingView />
      </Block>
    );
  }
  else if (!isLoading && ratings) {
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
            <Text bold size={10} color='gray3'>{`(${ratings.overall.toFixed(2)}/5)`}</Text>
          </Block>
          <SubRating title='Delivery' titleSize={14} textColor='gray3' ratingTextSize={10} rating={ratings.delivery} />
          <SubRating title='Transaction' titleSize={14} textColor='gray3' ratingTextSize={10} rating={ratings.transaction} />
          <SubRating title='Product Quality' titleSize={14} textColor='gray3' ratingTextSize={10} rating={ratings.productQuality} />
        </Block>
      </Fragment>
    );
  }
  else {
    return (
      <BlankScreen />
    );
  }

  
}

export default memo(Ratings);