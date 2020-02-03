import React, { memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { List, LoadingView, BlankScreen } from 'shared';

import NotificationItem from './NotificationItem';

function NotificationList() {

  useEffect(() => {
    getNotificationList({ isRefresh: false });
  }, []);

  const getNotificationList = useStoreActions(actions => actions.notifications.getItems);
  const getMoreNotificationList = useStoreActions(actions => actions.notifications.getMoreItems);

  const chats = useStoreState(state =>
    state.notifications.items
  );

  const isRefreshing = useStoreState(state =>
    state.notifications.isRefreshing
  );

  const isLoadingMore = useStoreState(state =>
    state.notifications.isLoadingMore
  );

  const isLoading = useStoreState(state =>
    state.notifications.isLoading
  );

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => {
    getMoreNotificationList();
  };

  const onRefresh = () => {
    getNotificationList({ isRefresh: true });
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
        Component={NotificationItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'No Notifications!'}
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

export default memo(NotificationList, () => true);