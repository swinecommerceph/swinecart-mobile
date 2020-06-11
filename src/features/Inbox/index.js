import React, { Fragment, memo } from 'react';
import { HeaderBar, HeaderBarButton } from 'molecules';

import { InboxTabView } from './components';

const accessoryLeft = () => (
  <HeaderBarButton iconName='menu' />
);

function Container() {

  return (
    <Fragment>
      <HeaderBar title='Inbox' accessoryLeft={accessoryLeft} />
      <InboxTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);