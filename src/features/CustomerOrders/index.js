import React, { Fragment, memo } from 'react';

import { HeaderBar, DrawerButton } from 'molecules';

import { TransactionsTabView } from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Order Tracking' accessoryLeft={DrawerButton} />
      <TransactionsTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);