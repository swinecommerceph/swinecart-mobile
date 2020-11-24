import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { HeaderBar, DrawerButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  CartList
} from './components';

function Container() {

  const isLoading = useStoreState(state => state.cart.isRemovingItem);
  const getCartItems = useStoreActions(actions => actions.cart.getItems);

  useEffect(() => {
    getCartItems({ isRefresh: false });
  }, []);

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar title='SwineCart' accessoryLeft={DrawerButton} />
      <CartList />
    </Fragment>
  );
}

export default memo(Container, () => true);