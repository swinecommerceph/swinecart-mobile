import React, { Fragment, memo, useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';

import { LoadingOverlay } from 'atoms';

import {
  RequestProductForm,
} from './components';

function Container({ route, navigation }) {

  const isLoading = useStoreState(state => state.customerOrders.isRequestingItem);

  const data = route.params;

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='Request Product' accessoryLeft={BackButton} />
      <RequestProductForm data={data} />
    </Fragment>
  );
}

export default memo(Container, () => true);