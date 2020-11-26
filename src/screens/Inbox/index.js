import React, { Fragment, memo } from 'react';
import { HeaderBar, DrawerButton } from 'molecules';

import { InboxTabView } from './components';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Inbox' accessoryLeft={DrawerButton} />
      <InboxTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);