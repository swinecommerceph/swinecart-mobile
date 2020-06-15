import React, { Fragment, memo } from 'react';

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