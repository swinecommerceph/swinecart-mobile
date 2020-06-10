import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, Text } from 'atoms';

function Container() {

  return (
    <Fragment>
      <HeaderBar title='SwineCart' />
    </Fragment>
  );
}

export default memo(Container, () => true);