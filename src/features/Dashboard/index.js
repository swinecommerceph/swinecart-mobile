import React, { Fragment, memo } from 'react';

import { HeaderBar, HeaderBarButton } from 'molecules';

import {
  DashboardTabView
} from './components';

const accessoryLeft = () => (
  <HeaderBarButton iconName='menu' />
);

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Dashboard' accessoryLeft={accessoryLeft} />
      <DashboardTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);