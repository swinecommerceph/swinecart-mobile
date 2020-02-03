import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { List, LoadingView, BlankScreen } from 'shared';

import ReviewItem from './ReviewItem';

function ReviewList() {

  const getReviews = useStoreActions(actions => actions.reviews.getItems);
  const getMoreReviews = useStoreActions(actions => actions.reviews.getMoreItems);

  const reviews = useStoreState(state =>
    state.reviews.items
  );

  const isRefreshing = useStoreState(state =>
    state.reviews.isRefreshing
  );

  const isLoadingMore = useStoreState(state =>
    state.reviews.isLoadingMore
  );

  const isLoading = useStoreState(state =>
    state.reviews.isLoading
  );

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => {
    getMoreReviews();
  };

  const onRefresh = () => {
    getReviews({ isRefresh: true });
  };

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading && reviews) {
    return (
      <List
        data={reviews}
        Component={ReviewItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Reviews'}
        isRefreshing={isRefreshing}
        onPressLoadMore={onPressLoadMore}
        onRefresh={onRefresh}
        isLoadingMore={isLoadingMore}
      />
    );
  }
  else {
    return (
      <BlankScreen />
    );
  }
}

export default memo(ReviewList);