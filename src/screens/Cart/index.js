import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, DrawerButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  CartList
} from './components';

function Container() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const {
    isRemovingItem,
    isLoading,
  } = useStoreState(state => state.cart);

  const {
    getItems
  } = useStoreActions(actions => actions.cart);

  return (
    <Fragment>
      <LoadingOverlay show={isRemovingItem} />
      <HeaderBar title='SwineCart' accessoryLeft={DrawerButton} />
      <StateScreen isLoading={isLoading} hasError={false}>
        <CartList />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);