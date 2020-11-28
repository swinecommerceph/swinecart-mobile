import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { HeaderBar, DrawerButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import { OrdersTabView } from './components';

function Container() {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='Orders' accessoryLeft={DrawerButton} />
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container);