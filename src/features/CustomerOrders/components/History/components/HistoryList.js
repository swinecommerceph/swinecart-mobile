import React, { memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { List, LoadingView, BlankScreen } from 'shared';

import HistoryItem from './HistoryItem';

function HistoryList() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const { getItems, getMoreItems 
  } = useStoreActions(actions => actions.customerOrderHistory);

  const {
    items, isRefreshing, isLoading, isLoadingMore
  } = useStoreState(state => state.customerOrderHistory);

  const keyExtractor = item => {
    return `${item.id}`;
  };

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
        Component={HistoryItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Items Yet!'}
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

export default memo(HistoryList);