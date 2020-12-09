import * as Yup from 'yup';

export const initialState = {
  accountType: null,
  addressLine1: null,
  addressLine2: null,
  zipCode: null,
  province: null,
  landline: null,
  mobile: null,
  contactPersonName: null,
  contactPersonMobile: null,
  website: null,
  produce: null,
};

export function toRequestFormat(values) {
  return {
    ...values,
    province: values.province.text,
  };
}

export const schema = Yup.object().shape({
  accountType: Yup
    .string()
    .trim()
    .required('Please enter the address')
    .nullable(),
  addressLine1: Yup
    .string()
    .trim()
    .required('Please enter the address')
    .nullable(),
  addressLine2: Yup
    .string()
    .trim()
    .required('Please enter the address')
    .nullable(),
  zipCode: Yup
    .string()
    .trim()
    .required('Please enter the postal/zip code')
    .nullable(),
  province: Yup
    .object()
    .required('Please select the province')
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
  contactPersonName: Yup
    .string()
    .trim()
    .when('accountType', {
      is: 'Breeder',
      then: Yup.string().trim().required(
        'Please enter the contact person\'s name'
      ).nullable(),
    }),
  contactPersonMobile: Yup
    .string()
    .trim()
    .when('accountType', {
      is: 'Breeder',
      then: Yup.string().trim().required(
        'Please enter the contact person\'s mobile'
      ).nullable(),
    }),
  website: Yup
    .string()
    .trim()
    .when('accountType', {
      is: 'Breeder',
      then: Yup.string().trim().nullable(),
    }),
  produce: Yup
    .string()
    .trim()
    .when('accountType', {
      is: 'Breeder',
      then: Yup.string().trim().nullable(),
    }),
});