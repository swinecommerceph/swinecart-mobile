import React, { Fragment, memo } from 'react';

import { HeaderBar, DrawerButton } from 'molecules';

import {
  DashboardTabView
} from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Dashboard' accessoryLeft={DrawerButton} />
      <DashboardTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);