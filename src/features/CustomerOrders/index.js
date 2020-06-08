import React, { Fragment, memo } from 'react';

import { HeaderBar } from 'atoms';

import { TransactionsTabView } from './components';

function Container() {

  return (
    <Fragment>
      <HeaderBar title='Transactions' />
      <TransactionsTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);