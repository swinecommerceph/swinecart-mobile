import React, { memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { List } from 'organisms';

import ChatItem from './ChatItem';

function ChatList() {

  const {
    items,
    isLoadingMore,
    isRefreshing,
  } = useStoreState(state => state.messaging);

  const {
    getItems,
    getMoreItems,
  } = useStoreActions(actions => actions.messaging);

  const keyExtractor = item => `${item.user.id}`;
  const onPressLoadMore = () => getMoreItems();
  const onRefresh = () => getItems({ isRefresh: true });

  return (
    <List
      data={items}
      Component={ChatItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'There are no messages yet.'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(ChatList);