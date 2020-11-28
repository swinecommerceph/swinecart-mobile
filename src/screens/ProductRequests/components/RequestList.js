import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { LoadingView } from 'molecules';
import { List } from 'organisms'

import RequestItem from './RequestItem';

function RequestList() {

  const {
    items,
    isRefreshing,
    isLoadingMore,
    isLoading,
  } = useStoreState(state => state.requests);

  const {
    getItems,
    getMoreItems
  } = useStoreActions(actions => actions.requests);

  const keyExtractor = item => `${item.swineCartId}`;

  const onPressLoadMore = () => {
    getMoreItems();
  };

  const onRefresh = () => {
    getItems({
      isRefresh: true
    });
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
        Component={RequestItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'There are no requests yet.'}
        isRefreshing={isRefreshing}
        onPressLoadMore={onPressLoadMore}
        onRefresh={onRefresh}
        isLoadingMore={isLoadingMore}
      />
    );
  }
}

export default memo(RequestList);