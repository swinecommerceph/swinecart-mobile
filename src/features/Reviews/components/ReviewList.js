import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { LoadingView, BlankScreen } from 'molecules';
import { List } from 'organisms';

import ReviewItem from './ReviewItem';

function ReviewList() {

  const { 
    getItems, getMoreItems
  } = useStoreActions(actions => actions.reviews);

  const {
    items, isRefreshing, isLoadingMore, isLoading
  } = useStoreState(state => state.reviews);

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => {
    getMoreItems();
  };

  const onRefresh = () => {
    getItems({ isRefresh: true });
  };

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading && items) {
    return (
      <List
        data={items}
        Component={ReviewItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'There are no reviews yet.'}
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