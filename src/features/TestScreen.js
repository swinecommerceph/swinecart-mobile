import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, Button, Block } from 'atoms';

function Container() {

  return (
    <Fragment>
      <HeaderBar title='SwineCart' />
      <Block flex={1} padding={1}>
        <Button size='small' appearance='filled' marginBottom={1}>Login</Button>
        <Button status='basic' marginBottom={1}>Login</Button>
        <Button appearance='outline' marginBottom={1}>Login</Button>
        <Button appearance='ghost' marginBottom={1}>Login</Button>
      </Block>
    </Fragment>
  );
}

export default memo(Container, () => true);