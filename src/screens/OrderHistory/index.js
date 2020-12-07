import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';

import { HistoryList } from './components';

function Container() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const getItems = useStoreActions(actions => actions.customerOrderHistory.getItems);

  return (
    <Fragment>
      <HeaderBar title='Order History' accessoryLeft={BackButton} />
      <HistoryList />
    </Fragment>
  );
}

export default memo(Container);