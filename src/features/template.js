import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { HeaderBar, LoadingOverlay } from 'shared';

function Container() {

  return (
    <Fragment>
      <HeaderBar title='Orders' />
    </Fragment>
  );
}

export default memo(Container, () => true);