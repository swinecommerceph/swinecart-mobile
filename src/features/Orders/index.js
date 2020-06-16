import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { HeaderBar, HeaderBarButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import { OrdersTabView } from './components';

const accessoryLeft = () => (
  <HeaderBarButton iconName='menu' />
);

function Container() {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='Orders' accessoryLeft={accessoryLeft} />
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);