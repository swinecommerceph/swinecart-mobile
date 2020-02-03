import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import { HeaderBar, HeaderBarButton } from 'shared';

import { NavigationService } from 'services';

import { ProductList } from './components';

function Container() {

  const getProducts = useStoreActions(actions => actions.products.getItems);

  useEffect(() => {
    getProducts({ isRefresh: false });
  }, []);

  const onPressAdd = () => {
    NavigationService.navigate('EditProduct');
  };

  return (
    <Fragment>
      <HeaderBar 
        title='My Products'
        leftControl={
          <HeaderBarButton 
            iconName='plus'
            onPress={onPressAdd}
          />
        }
      />
      <ProductList />
    </Fragment>
  );
}

export default memo(Container, () => true);