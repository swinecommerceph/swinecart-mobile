import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { HeaderBar, LoadingOverlay } from 'shared';

import { OrdersTabView } from './components';

function Container() {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='Orders' />
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);