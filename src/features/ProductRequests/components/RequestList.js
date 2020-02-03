import React, { useEffect, memo } from 'react';
import { withNavigation } from 'react-navigation';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { List, LoadingView } from 'shared';

import RequestItem from './RequestItem';

function RequestList() {

  const getRequests = useStoreActions(actions => actions.orderRequests.getItems);
  const getMoreRequests = useStoreActions(actions => actions.orderRequests.getMoreItems);
  const currentProduct = useStoreState(state => state.orderRequests.currentProduct);

  useEffect(() => {
    if (currentProduct) {
      getRequests({ isRefresh: false });
    }
  }, [currentProduct]);

  const requests = useStoreState(state => state.orderRequests.items);
  const isRefreshing = useStoreState(state => state.orderRequests.isRefreshing);
  const isLoadingMore = useStoreState(state => state.orderRequests.isLoadingMore);
  const isLoading = useStoreState(state => state.orderRequests.isLoading);

  const keyExtractor = item => `${item.customerId}`;

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
        emptyListMessage={'No Requests!'}
        isRefreshing={isRefreshing}
        onPressLoadMore={onPressLoadMore}
        onRefresh={onRefresh}
        isLoadingMore={isLoadingMore}
      />
    );
  }
}

export default withNavigation(memo(RequestList));