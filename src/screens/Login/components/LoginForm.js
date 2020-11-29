import React, { Fragment, memo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useFormik } from 'formik';

import { Input } from 'molecules';

import { LoginSchema } from 'schemas';

import LoginButton from './LoginButton';

function LoginForm() {

  const isLoggingIn = useStoreState(state => state.auth.isLoggingIn);
  const loginUser = useStoreActions(actions => actions.auth.login);

  const { handleSubmit, ...formControl } = useFormik({
    initialValues: {
      // email: 'ykautzer@steuber.com', // breeder
      email: 'patsy84@ullrich.net', // customer
      password: 'secret12',
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      loginUser({ email, password });
    },
  });

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
        disabled={isLoggingIn}
        onSubmit={handleSubmit}
      />
    </Fragment>
  );

}

export default memo(LoginForm);