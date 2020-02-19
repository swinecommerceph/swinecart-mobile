import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { List, LoadingView, BlankScreen } from 'shared';

import MediaItem from './MediaItem';

function MediaList() {

  const { getItems, getMoreItems } = useStoreActions(actions => actions.productMedia);

  const {
    items, isRefreshing, isLoading, isLoadingMore
  } = useStoreState(state => state.productMedia);

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
        Component={MediaItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No items yet'}
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

export default memo(MediaList);