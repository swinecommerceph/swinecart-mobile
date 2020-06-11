import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, HeaderBarButton } from 'molecules';
// import { LoadingOverlay } from 'atoms';

// import {
//   ShopList
// } from './components';

const accessoryLeft = () => (
  <HeaderBarButton iconName='menu' />
);

function Container() {

  // const getItems = useStoreActions(actions => actions.shop.getItems);

  useEffect(() => {
    // getItems({ isRefresh:false });
  }, []);

  return (
    <Fragment>
      <HeaderBar title='Shop' accessoryLeft={accessoryLeft} />
      {/* <ShopList /> */}
    </Fragment>
  );
}

export default memo(Container, () => true);