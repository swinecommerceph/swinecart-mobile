import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import { 
  Block, LoadingOverlay
} from 'shared';

import {
  LoginForm, Logo
} from './components';

function Container() {

  const isLoggingIn = useStoreState(state => state.auth.isLoggingIn);

  return (
    <Fragment>
      <LoadingOverlay show={isLoggingIn} />
      <Block flex={1} backgroundColor='white1'>
        <Block flex={1} middle padding={1}>
          <Logo />
          <LoginForm />
        </Block>
      </Block>
    </Fragment>
  );

}

export default memo(Container);