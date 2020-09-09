import React, { Fragment, memo } from 'react';

import { HeaderBar, DrawerButton } from 'molecules';

import {
  DashboardStats
} from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Dashboard' accessoryLeft={DrawerButton} />
      <DashboardStats />
    </Fragment>
  );
}

export default memo(Container, () => true);