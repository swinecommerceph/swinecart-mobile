import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { Block } from 'atoms';

function Container() {

  return (
    <Fragment>
      <Block flex={1}>

      </Block>
    </Fragment>
  );
}

export default memo(Container, () => true);