import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';
import { LoadingView, BlankScreen } from 'molecules';

import ProductListItem from './ProductListItem';

function ProductList() {
  
  const { 
    getItems,
    getMoreItems
  } = useStoreActions(actions => actions.manageProducts);

  const {
    items: products,
    isRefreshing,
    isLoadingMore,
    isLoading
  } = useStoreState(state => state.manageProducts);

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => getMoreItems();
  const onRefresh = () => getItems({ isRefresh: true });

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading && products) {
    return (
      <List
        data={products}
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
  else {
    return (
      <BlankScreen />
    );
  }
}

export default memo(ProductList, () => true);