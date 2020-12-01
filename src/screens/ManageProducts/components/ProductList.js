import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';

import ProductListItem from './ProductListItem';

function ProductList() {

  const {
    getItems,
    getMoreItems
  } = useStoreActions(actions => actions.manageProducts);

  const {
    items,
    isRefreshing,
    isLoadingMore,
  } = useStoreState(state => state.manageProducts);

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => getMoreItems();
  const onRefresh = () => getItems({ isRefresh: true });

  return (
    <List
      data={items}
      Component={ProductListItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'No Products!'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(ProductList);