import React, { Fragment, memo, useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';

import { LoadingOverlay } from 'atoms';

import {
  Form,
} from './components';

function Container({ route }) {

  const isLoading = useStoreState(
    state => state.reservations.isLoading
  );

  const data = route.params;

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='Request Product' accessoryLeft={BackButton} />
      <Form data={data} />
    </Fragment>
  );
}

export default memo(Container);