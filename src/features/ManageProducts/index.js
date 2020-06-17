import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import { NavigationService } from 'services';

import { HeaderBar, DrawerButton } from 'molecules';

import { ProductList } from './components';

function Container() {

  const getProducts = useStoreActions(actions => actions.manageProducts.getItems);

  useEffect(() => {
    getProducts({ isRefresh: false });
  }, []);

  const onPressAdd = () => {
    NavigationService.navigate('EditProduct');
  };

  return (
    <Fragment>
      <HeaderBar
        title='Products'
        accessoryLeft={DrawerButton}
      />
      <ProductList />
    </Fragment>
  );
}

export default memo(Container, () => true);