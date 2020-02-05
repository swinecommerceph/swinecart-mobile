import React, { Fragment, memo, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useFormik } from 'formik';

import {
  Input
} from 'shared';

import { LoginSchema } from 'validationSchemas';

import LoginButton from './LoginButton';

function LoginForm() {
  
  const isLoggingIn = useStoreState(state => state.auth.isLoggingIn);
  const loginUser = useStoreActions(actions => actions.auth.login);

  const { values, handleSubmit, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      email: 'serenity65@yahoo.com',
      password: 'secret12',
    // email: '',
    // password: ''
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
        errors={errors}
        touched={touched}
        values={values}
        onChange={setFieldValue}
      />
      <Input
        name='password'
        label='Password'
        placeholder='Enter your password here...'
        errors={errors}
        touched={touched}
        values={values}
        onChange={setFieldValue}
        isPassword={true}
      />
      <LoginButton
        disabled={isLoggingIn}
        onSubmit={handleSubmit}
      />
    </Fragment>
  );

}

export default memo(LoginForm);