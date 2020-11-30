import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup
    .string()
    .trim()
    .required('Please enter the product name'),
  type: Yup
    .object()
    .required('Please select the product type')
    .nullable(),
  minPrice: Yup
    .number()
    .nullable(),
  maxPrice: Yup
    .number()
    .nullable(),
  isUnique: Yup
    .boolean(),
  quantity: Yup
    .number()
    .positive()
    .integer('Invalid Input')
    .moreThan(0),

  isPureBreed: Yup
    .boolean(),
  breed: Yup
    .string().trim()
    .when('isPureBreed', {
      is: true,
      then: Yup.string().trim().required('Please enter swine breed'),
    })
    .nullable(),
  fatherBreed: Yup
    .string().trim()
    .when('isPureBreed', {
      is: false,
      then: Yup.string().trim().required('Please enter swine breed'),
    })
    .nullable(),
  motherBreed: Yup
    .string().trim()
    .when('isPureBreed', {
      is: false,
      then: Yup.string().trim().required('Please enter swine breed'),
    })
    .nullable(),

  // birthDate: Yup
  //   .date()
  //   .max(new Date()),
  birthWeight: Yup
    .number()
    .nullable(),
  farmFrom: Yup
    .object()
    .required('Please select a farm')
    .nullable(),
  houseType: Yup
    .object()
    .nullable(),

  adg:  Yup
    .number()
    .nullable(),
  fcr:  Yup
    .number()
    .nullable(),
  bft:  Yup
    .number()
    .nullable(),
  lsba:  Yup
    .number()
    .nullable(),
  leftTeats: Yup
    .number()
    .positive()
    .integer('Invalid Input')
    .nullable(),
  rightTeats: Yup
    .number()
    .positive()
    .integer('Invalid Input')
    .nullable(),

  otherDetails: Yup
    .string()
    .trim()
    .nullable(),
});

export default schema;