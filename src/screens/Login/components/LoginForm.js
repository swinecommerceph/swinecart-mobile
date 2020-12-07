import React, { Fragment, memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Input } from 'molecules';

import LoginButton from './LoginButton';

function LoginForm() {

  const {
    values,
    errors,
    touched,
  } = useStoreState(state => state.loginForm);

  const {
    submit,
    setFieldValue,
    setFieldTouched,
  } = useStoreActions(actions => actions.loginForm);

  const onPressSubmit = () => {
    submit();
  };

  const formControl = {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  };

  return (
    <Fragment>
      <Input
        name='email'
        label='Email'
        placeholder='Enter your email here...'
        formControl={formControl}
      />
      <Input
        name='password'
        label='Password'
        placeholder='Enter your password here...'
        isPassword={true}
        formControl={formControl}
      />
      <LoginButton
        onSubmit={onPressSubmit}
      />
    </Fragment>
  );

}

export default memo(LoginForm);