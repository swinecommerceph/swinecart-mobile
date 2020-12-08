import * as Yup from 'yup';

export const initialState = {
  name: null,
  type: null,
  minPrice: null,
  maxPrice: null,
  isUnique: false,
  quantity: 1,
  isPureBreed: true,
  breed: null,
  fatherBreed: null,
  motherBreed: null,
  birthWeight: null,
  birthDate: null,
  farmFrom: null,
  houseType: null,
  adg: null,
  fcr: null,
  bft: null,
  lsba: null,
  leftTeats: null,
  rightTeats: null,
  otherDetails: null,
};

export function toRequestFormat(values) {

  const {
      name, type, minPrice, maxPrice, isUnique, quantity,
      breed, fatherBreed, motherBreed,
      birthDate,
      birthWeight,
      farmFrom,
      houseType,
      adg,
      fcr,
      bft,
      lsba,
      leftTeats,
      rightTeats,
      otherDetails,
      isPureBreed,
  } = values;

  const requestData = {
      name,
      type: type.key,
      min_price: minPrice,
      max_price: maxPrice,
      is_unique: isUnique ? 1 : 0,
      quantity: isUnique ? 1 : quantity,
      farm_from_id: farmFrom.id,
      birthdate: birthDate ? formatDate(birthDate, 'yyyy-MM-dd') : null,
      breed: isPureBreed
          ? breed
          : `${fatherBreed.toLowerCase()}+${motherBreed.toLowerCase()}`,
      birth_weight: birthWeight,
      house_type: houseType ? houseType.key : null,
      adg,
      fcr,
      bft,
      lsba,
      left_teats: leftTeats,
      right_teats: rightTeats,
      other_details: otherDetails,
  };

  return requestData;
}

export const schema = Yup.object().shape({
  name: Yup
    .string()
    .trim()
    .required('Please enter the product name')
    .nullable(),
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
    .moreThan(0)
    .nullable(),

  isPureBreed: Yup
    .boolean(),
  breed: Yup
    .string().trim()
    .when('isPureBreed', {
      is: true,
      then: Yup.string().trim().required('Please enter swine breed').nullable(),
    })
    .nullable(),
  fatherBreed: Yup
    .string().trim()
    .when('isPureBreed', {
      is: false,
      then: Yup.string().trim().required('Please enter swine breed').nullable(),
    })
    .nullable(),
  motherBreed: Yup
    .string().trim()
    .when('isPureBreed', {
      is: false,
      then: Yup.string().trim().required('Please enter swine breed').nullable(),
    })
    .nullable(),

  birthDate: Yup
    .date()
    .max(new Date())
    .nullable(),
  farmFrom: Yup
    .object()
    .required('Please select a farm')
    .nullable(),
  houseType: Yup
    .object()
    .nullable(),
  birthWeight: Yup
    .number()
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