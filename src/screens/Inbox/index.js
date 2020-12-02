import React, { Fragment, memo } from 'react';

import { HeaderBar, DrawerButton} from 'molecules';
import { LoadingOverlay } from 'atoms';

import { InboxTabView } from './components';

function Container() {
  return (
    <Fragment>
      <LoadingOverlay show={false} />
      <HeaderBar title='Inbox' accessoryLeft={DrawerButton} />
      <InboxTabView />
    </Fragment>
  );
}

export default memo(Container);