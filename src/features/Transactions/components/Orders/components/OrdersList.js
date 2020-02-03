import React, { memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { List, LoadingView, BlankScreen } from 'shared';

import OrderItem from './OrderItem';


function OrdersList({ status }) {

  useEffect(() => {
    getItems({ status, isRefresh: false });
  }, []);

  const { getItems, getMoreItems } = useStoreActions(actions => actions.transactions);

  const {
    items, isRefreshing, isLoading, isLoadingMore
  } = useStoreState(state => state.transactions.ordersByStatus[status]);

  const keyExtractor = item => {
    return `${item.id}`;
  };

  const onPressLoadMore = () => {
    getMoreItems({ status });
  };

  const onRefresh = () => {
    getItems({ status, isRefresh: true });
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
        Component={OrderItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Orders Yet!'}
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

export default memo(OrdersList);