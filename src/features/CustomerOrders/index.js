import React, { Fragment, memo } from 'react';

import { HeaderBar, HeaderBarButton } from 'molecules';

// import { TransactionsTabView } from './components';

const accessoryLeft = () => (
  <HeaderBarButton iconName='menu' />
);

function Container() {

  return (
    <Fragment>
      <HeaderBar title='Transactions' accessoryLeft={accessoryLeft} />
      {/* <TransactionsTabView /> */}
    </Fragment>
  );
}

export default memo(Container, () => true);