import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';

import NotificationItem from './NotificationItem';

function NotificationList() {

  const {
    items,
    isLoadingMore,
    isRefreshing,
  } = useStoreState(state => state.notifications);

  const {
    getItems,
    getMoreItems,
  } = useStoreActions(actions => actions.notifications);

  const keyExtractor = item => `${item.id}`;
  const onPressLoadMore = () => getMoreItems();
  const onRefresh = () => getItems({ isRefresh: true });

  return (
    <List
      data={items}
      Component={NotificationItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'There are no notifications yet.'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(NotificationList);