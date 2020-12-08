import * as Yup from 'yup';

export const initialState = {
  name: null,
  addressLine1: null,
  addressLine2: null,
  farmType: null,
  zipCode: null,
  province: null,
  landline: null,
  mobile: null,
};

export function toRequestFormat(values) {
  return {
    ...values,
    province: values.province.text,
  };
}

export const schema = Yup.object().shape({
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
  mobile: Yup
    .string()
    .trim()
    .required('Please enter the farm mobile')
    .nullable(),
});