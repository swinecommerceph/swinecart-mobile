import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { HeaderBar, LoadingOverlay } from 'shared';

import {
  ShopList
} from './components';

function Container() {

  const getItems = useStoreActions(actions => actions.shop.getItems);

  useEffect(() => {
    getItems({ isRefresh:false });
  }, []);

  return (
    <Fragment>
      <HeaderBar title='Shop' hasShadow />
      <ShopList />
    </Fragment>
  );
}

export default memo(Container, () => true);