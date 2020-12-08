import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';

import CartItem from '../CartItem';

function CartList() {

  const {
    getItems,
    getMoreItems
  } = useStoreActions(actions => actions.cart);

  const {
    items,
    isLoading: {
      isFetchingMore,
      isRefreshing,
    }
  } = useStoreState(state => state.cart);

  const keyExtractor = item => `${item.id}`;
  const onPressLoadMore = () => getMoreItems();
  const onRefresh = () => getItems({ isRefresh: true });

  return (
    <List
      data={items}
      Component={CartItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'There are no items in your cart yet.'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoadingMore={isFetchingMore}
    />
  );
}

export default memo(CartList);