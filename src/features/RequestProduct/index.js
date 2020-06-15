import React, { Fragment, memo, useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';

import { LoadingOverlay } from 'atoms';

import {
  RequestForm,
} from './components';

function Container({ navigation }) {

  const isLoading = useStoreState(state => state.customerOrders.isRequestingItem);

  const data = navigation.getParam('data');

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='Request Product' accessoryLeft={BackButton} />
      <RequestForm data={data} />
    </Fragment>
  );
}

export default memo(Container, () => true);