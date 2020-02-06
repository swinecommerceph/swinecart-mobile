import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { HeaderBar, LoadingOverlay } from 'shared';

import { TransactionsTabView } from './components';

function Container() {

  return (
    <Fragment>
      <TransactionsTabView />
    </Fragment>
  );
}

export default memo(Container, () => true);