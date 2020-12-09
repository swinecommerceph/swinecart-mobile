import React, { Fragment, memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { HeaderBar, DrawerButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import { OrdersTabView } from './components';

function Container() {


  return (
    <Fragment>
      <LoadingOverlay show={false} />
      <HeaderBar title='Orders' accessoryLeft={DrawerButton} />
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container);