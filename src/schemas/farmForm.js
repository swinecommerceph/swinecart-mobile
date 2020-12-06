import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup
    .string()
    .trim()
    .required('Please enter the farm name')
    .nullable(),
  addressLine1: Yup
    .string()
    .trim()
    .required('Please enter the farm address')
    .nullable(),
  addressLine2: Yup
    .string()
    .trim()
    .required('Please enter the farm address')
    .nullable(),
  farmType: Yup
    .string()
    .trim()
    .required('Please enter the farm type')
    .nullable(),
  zipCode: Yup
    .string()
    .trim()
    .required('Please enter the farm postal/zip code')
    .nullable(),
  province: Yup
    .object()
    .required('Please select the farm province')
    .nullable(),
  landline: Yup
    .string()
    .trim()
    .nullable(),
  landline: Yup
    .string()
    .trim()
    .nullable(),
  mobile: Yup
    .string()
    .trim()
    .required('Please enter the farm mobile')
    .nullable(),
});

export default schema;