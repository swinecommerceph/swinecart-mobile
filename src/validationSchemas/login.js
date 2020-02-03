import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email address!')
    .email('Please enter a valid email address!'),
  password: Yup.string()
    .required('Please enter your password!'),
});