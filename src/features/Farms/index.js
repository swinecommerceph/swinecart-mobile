import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Farms' accessoryLeft={BackButton} />
    </Fragment>
  );
}

export default memo(Container, () => true);