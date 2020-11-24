import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { Block, Text } from 'atoms';

function Container() {

  return (
    <Fragment>
      <Block flex={1}>
        <Text>Customer</Text>
      </Block>
    </Fragment>
  );
}

export default memo(Container, () => true);