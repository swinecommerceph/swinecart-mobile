import React, { Fragment, memo, useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';

import { LoadingOverlay } from 'atoms';

import {
  Form,
} from './components';

function Container({ route }) {

  const isRequestingItem = useStoreState(
    state => state.customerOrders.isRequestingItem
  );

  const data = route.params;

  return (
    <Fragment>
      <LoadingOverlay show={isRequestingItem} />
      <HeaderBar title='Request Product' accessoryLeft={BackButton} />
      <Form data={data} />
    </Fragment>
  );
}

export default memo(Container);