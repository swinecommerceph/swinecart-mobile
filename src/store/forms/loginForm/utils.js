import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Please enter your email address!')
    .email('Please enter a valid email address!')
    .nullable(),
  password: Yup.string()
    .trim()
    .required('Please enter your password!')
    .nullable(),
});

export const initialState = {
  // email: 'patsy84@ullrich.net',
  email: 'ykautzer@steuber.com',
  password: 'secret12',
};