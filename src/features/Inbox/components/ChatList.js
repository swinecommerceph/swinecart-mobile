import React, { memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { List, LoadingView, BlankScreen } from 'shared';

import ChatItem from './ChatItem';

function ChatList() {

  useEffect(() => {
    getChatList({ isRefresh: false });
  }, []);

  const getChatList = useStoreActions(actions => actions.messaging.getItems);
  const getMoreChatList = useStoreActions(actions => actions.messaging.getMoreItems);

  const chats = useStoreState(state =>
    state.messaging.items
  );

  const isRefreshing = useStoreState(state =>
    state.messaging.isRefreshing
  );

  const isLoadingMore = useStoreState(state =>
    state.messaging.isLoadingMore
  );

  const isLoading = useStoreState(state =>
    state.messaging.isLoading
  );

  const keyExtractor = item => `${item.user.id}`;

  const onPressLoadMore = () => {
    getMoreChatList();
  };

  const onRefresh = () => {
    getChatList({ isRefresh: true });
  };

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading && chats) {
    return (
      <List
        data={chats}
        Component={ChatItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Messages'}
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

export default memo(ChatList, () => true);