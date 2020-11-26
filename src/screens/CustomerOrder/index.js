import React, { Fragment, memo } from 'react';

import { HeaderBar, DrawerButton } from 'molecules';

import { OrdersTabView } from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Orders' accessoryLeft={DrawerButton} />
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);