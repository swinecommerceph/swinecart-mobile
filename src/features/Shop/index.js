import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { NavigationService } from 'services';

import { HeaderBar, HeaderBarButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  ShopList
} from './components';

const accessoryLeft = () => (
  <HeaderBarButton iconName='menu' />
);

const accessoryRight = () => {

  const onPress = () => {
    NavigationService.navigate('FilterItems');
  };

  return (
    <HeaderBarButton
      iconName='search'
      onPress={onPress}
    />
  );
};

function Container() {

  const getItems = useStoreActions(actions => actions.shop.getItems);
  const isLoading = useStoreState(state => state.cart.isAddingItem);

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar
        title='Shop'
        accessoryLeft={accessoryLeft}
        accessoryRight={accessoryRight}
      />
      <ShopList />
    </Fragment>
  );
}

export default memo(Container, () => true);