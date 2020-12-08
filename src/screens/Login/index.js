import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';

import {
  Block, LoadingOverlay
} from 'atoms';

import {
  LoginForm, Logo
} from './components';

function Container() {

  const {
    isSubmitting
  } = useStoreState(state => state.loginForm.isLoading);

  return (
    <Fragment>
      <LoadingOverlay show={isSubmitting} />
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