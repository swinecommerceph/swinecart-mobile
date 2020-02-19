import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { List, LoadingView, BlankScreen } from 'shared';

import ProductListItem from './ProductListItem';

function ProductList() {

  const getProducts = useStoreActions(actions => actions.products.getItems);
  const getMoreProducts = useStoreActions(actions => actions.products.getMoreItems);

  const products = useStoreState(state => state.products.items);
  const isRefreshing = useStoreState(state => state.products.isRefreshing);
  const isLoadingMore = useStoreState(state => state.products.isLoadingMore);
  const isLoading = useStoreState(state => state.products.isLoading);

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => getMoreProducts();
  const onRefresh = () => getProducts({ isRefresh: true });

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