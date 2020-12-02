import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';

import ReviewListItem from './ReviewListItem';

function ReviewList() {

  const {
    getItems,
    getMoreItems
  } = useStoreActions(actions => actions.reviews);

  const {
    items,
    isRefreshing,
    isLoadingMore,
  } = useStoreState(state => state.reviews);

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => {
    getMoreItems();
  };

  const onRefresh = () => {
    getItems({ isRefresh: true });
  };

  return (
    <List
      data={items}
      Component={ReviewListItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'There are no reviews yet.'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(ReviewList);