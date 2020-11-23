import React, { Fragment, memo, useEffect } from 'react';
import { Spinner } from '@ui-kitten/components';

import { Block } from 'atoms';

function Container() {
  return (
    <Fragment>
      <Block flex={1} center middle backgroundColor='primary'>
        <Spinner size='giant' status='basic' />
      </Block>
    </Fragment>
  );
}

export default memo(Container);