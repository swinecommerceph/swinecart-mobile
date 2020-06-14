import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import { HeaderBar, HeaderBarButton } from 'molecules';

import {
  CartList
} from './components';

const accessoryLeft = () => (
  <HeaderBarButton iconName='menu' />
);

function Container() {

  const getCartItems = useStoreActions(actions => actions.cart.getItems);

  useEffect(() => {
    getCartItems({ isRefresh: false });
  }, []);

  return (
    <Fragment>
      <HeaderBar title='SwineCart' accessoryLeft={accessoryLeft} />
      <CartList />
    </Fragment>
  );
}

export default memo(Container, () => true);