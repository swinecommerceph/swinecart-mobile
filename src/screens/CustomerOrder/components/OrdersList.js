import React, { memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { List } from 'organisms';
import { LoadingView, BlankScreen } from 'molecules';

import OrderItem from './OrderItem';

function OrdersList({ status }) {

  useEffect(() => {
    getItems({ status, isRefresh: false });
  }, []);

  const { getItems, getMoreItems } = useStoreActions(actions => actions.customerOrders);

  const {
    items, isRefreshing, isLoading, isLoadingMore
  } = useStoreState(state => state.customerOrders.ordersByStatus[status]);

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
        emptyListMessage={'There are no orders placed yet.'}
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