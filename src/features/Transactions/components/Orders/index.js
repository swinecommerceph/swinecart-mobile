import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
// import { Block, Text } from 'shared';

import {
  OrdersTabView
} from './components';

function Container() {

  return (
    <Fragment>
      <OrdersTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);