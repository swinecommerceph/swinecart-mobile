import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';

import MediaItem from './MediaItem';

function MediaList() {

  const {
    getItems
  } = useStoreActions(actions => actions.productMedia);

  const {
    items, isRefreshing, isLoadingMore
  } = useStoreState(state => state.productMedia);

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => { };

  const onRefresh = () => {
    getItems({ isRefresh: true });
  };

  return (
    <List
      data={items}
      Component={MediaItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'No Photos yet'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(MediaList);