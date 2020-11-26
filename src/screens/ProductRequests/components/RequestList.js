import React, { useEffect, memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { LoadingView } from 'molecules';
import { List } from 'organisms'

import RequestItem from './RequestItem';

function RequestList() {

  const getRequests = useStoreActions(actions => actions.requests.getItems);
  const getMoreRequests = useStoreActions(actions => actions.requests.getMoreItems);
  const currentProduct = useStoreState(state => state.requests.currentProduct);

  useEffect(() => {
    if (currentProduct) {
      getRequests({ isRefresh: false });
    }
  }, [currentProduct]);

  const requests = useStoreState(state => state.requests.items);
  const isRefreshing = useStoreState(state => state.requests.isRefreshing);
  const isLoadingMore = useStoreState(state => state.requests.isLoadingMore);
  const isLoading = useStoreState(state => state.requests.isLoading);

  const keyExtractor = item => `${item.swineCartId}`;

  const onPressLoadMore = () => {
    getMoreRequests();
  };

  const onRefresh = () => {
    getRequests({ isRefresh: true });
  };

  if (isLoading) {
    return (
      <LoadingView />
    );
  }

  else if (!isLoading && requests) {
    return (
      <List
        data={requests}
        Component={RequestItem}
        keyExtractor={keyExtractor}
        emptyListMessage={'There are no requests yet.'}
        isRefreshing={isRefreshing}
        onPressLoadMore={onPressLoadMore}
        onRefresh={onRefresh}
        isLoadingMore={isLoadingMore}
      />
    );
  }
}

export default memo(RequestList);