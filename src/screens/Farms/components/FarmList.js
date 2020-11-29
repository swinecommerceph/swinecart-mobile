import React, { memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { List } from 'organisms';

import FarmListItem from './FarmListItem';

function FarmList() {

  const {
    getItems,
  } = useStoreActions(actions => actions.farms);

  const {
    items,
    isRefreshing,
    isLoadingMore,
  } = useStoreState(state => state.farms);

  const keyExtractor = item => `${item.id}`;

  const onPressLoadMore = () => { };

  const onRefresh = () => { getItems({ isRefresh: true }); };

  return (
    <List
      data={items}
      Component={FarmListItem}
      keyExtractor={keyExtractor}
      emptyListMessage={'There are no farms yet.'}
      isRefreshing={isRefreshing}
      onPressLoadMore={onPressLoadMore}
      onRefresh={onRefresh}
      isLoadingMore={isLoadingMore}
    />
  );
}

export default memo(FarmList);