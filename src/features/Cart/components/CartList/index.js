import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';
import { LoadingView, BlankScreen } from 'molecules';


import CartItem from '../CartItem';

function CartList() {

  const { getItems, getMoreItems } = useStoreActions(actions => actions.cart);

  const {
    items, isRefreshing, isLoading, isLoadingMore
  } = useStoreState(state => state.cart);

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
        Component={CartItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Items Yet'}
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

export default memo(CartList);