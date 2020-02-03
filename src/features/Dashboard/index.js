import React, { Fragment, memo } from 'react';
import { HeaderBar } from 'shared';

import {
  DashboardTabView
} from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Dashboard' />
      <DashboardTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);