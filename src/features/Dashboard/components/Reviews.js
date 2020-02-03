import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy'
import { Block, Button, Text, LoadingView, BlankScreen } from 'shared';
import { NavigationService } from 'services';

import ReviewItem from './ReviewItem';

function Reviews() {

  const isLoading = useStoreState(state => state.reviews.isLoading);
  const reviews = useStoreState(state => state.reviews.items);
  const sampleReviews = useStoreState(state => state.reviews.sampleReviews);
  const totalCount = useStoreState(state => state.reviews.totalCount);

  const onSeeAll = () => {
    NavigationService.navigate('Reviews');
  };

  if (isLoading) {
    return (
      <Block minHeight={200} borderRadius={5} margin={1}>
        <LoadingView />
      </Block>
    );
  }
  else if (!isLoading && reviews) {
    return (
      <Fragment>
        <Block flexGrow={-1} backgroundColor='white1' borderRadius={5} marginHorizontal={1} marginTop={1} shadow='shadow2' padding={1}>
          <Block center middle>
            <Text bold size={14} color='gray3' textAlign='center'>
              Total Customer Reviews
            </Text>
            <Text bold size={20} color='black1' textAlign='center'>
              {totalCount}
            </Text>
          </Block>
        </Block>
        {
          sampleReviews.map(review => (
            <ReviewItem key={review.id} data={review} />
          ))
        }
        <Block marginHorizontal={1} marginTop={1} center middle backgroundColor='gray2'>
          <Button
            size='tiny'
            onPress={onSeeAll}
          >
            See all reviews
          </Button> 
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

export default memo(Reviews);