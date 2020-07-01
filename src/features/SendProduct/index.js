import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import { SendProductForm } from './components';

function Container({ navigation }) {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  const product = navigation.getParam('product');
  const reservation = navigation.getParam('reservation');


  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='Send Product' accessoryLeft={BackButton} />
      <SendProductForm product={product} orderDetails={reservation} />
    </Fragment>
  );
}

export default memo(Container);