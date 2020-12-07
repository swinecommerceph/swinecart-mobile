import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, DrawerButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  ShopList,
  FilterItemsButton,
} from './components';

function Container() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const isAddingItem = useStoreState(state => state.cart.isAddingItem);

  const {
    isLoading,
  } = useStoreState(state => state.shop);

  const {
    getItems,
  } = useStoreActions(actions => actions.shop);

  return (
    <Fragment>
      <LoadingOverlay show={isAddingItem} />
      <HeaderBar
        title='Shop'
        accessoryLeft={DrawerButton}
        accessoryRight={FilterItemsButton}
      />
      <StateScreen
        isLoading={isLoading}
        hasError={false}
      >
        <ShopList />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);