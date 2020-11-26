import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { NavigationService } from 'services';

import { StateScreen } from 'organisms';
import { HeaderBar, DrawerButton, HeaderBarButton } from 'molecules';

import { ProductList } from './components';

const addButton = () => {

  const onPressAdd = () => {
    NavigationService.navigate('ProductForm', { mode: 'add' });
  };

  return (
    <HeaderBarButton
      iconName='plus'
      onPress={onPressAdd}
    />
  );
};

function Container() {

  const {
    isLoading, hasFetchingError
  } = useStoreState(state => state.manageProducts);

  const getItems = useStoreActions(actions => actions.manageProducts.getItems);

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  return (
    <Fragment>
      <HeaderBar
        title='My Products'
        accessoryLeft={DrawerButton}
        accessoryRight={addButton}
      />
      <StateScreen
        isLoading={isLoading}
        hasError={hasFetchingError}
      >
        <ProductList />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);