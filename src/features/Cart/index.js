import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import { HeaderBar } from 'shared';

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
      <HeaderBar title='SwineCart' />
      <CartList />
    </Fragment>
  );
}

export default memo(Container, () => true);