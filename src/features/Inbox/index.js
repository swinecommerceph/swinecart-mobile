import React, { Fragment, memo } from 'react';
import { HeaderBar } from 'shared';

import { InboxTabView } from './components';

function Container() {

  return (
    <Fragment>
      <HeaderBar title='Inbox' />
      <InboxTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);