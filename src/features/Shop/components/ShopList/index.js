import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { LoadingView, BlankScreen } from 'shared';

import { List } from 'organisms';

import ShopItem from '../ShopItem';

function ShopList() {

  const { getItems, getMoreItems } = useStoreActions(actions => actions.shop);

  const {
    items, isRefreshing, isLoading, isLoadingMore
  } = useStoreState(state => state.shop);

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
        Component={ShopItem}
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

export default memo(ShopList);