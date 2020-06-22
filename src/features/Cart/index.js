import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import { HeaderBar, DrawerButton } from 'molecules';

import {
  CartList
} from './components';

function Container() {

  const getCartItems = useStoreActions(actions => actions.cart.getItems);

  useEffect(() => {
    getCartItems({ isRefresh: false });
  }, []);

  return (
    <Fragment>
      <HeaderBar title='SwineCart' accessoryLeft={DrawerButton} />
      <CartList />
    </Fragment>
  );
}

export default memo(Container, () => true);