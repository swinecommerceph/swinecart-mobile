import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HistoryList } from './components';

function Container() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const { getItems, getMoreItems
  } = useStoreActions(actions => actions.customerOrderHistory);

  return (
    <HistoryList />
  );
}

export default memo(Container, () => true);