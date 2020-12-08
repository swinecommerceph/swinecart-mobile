import * as Yup from 'yup';

export const initialState = {
  keyword: null,
  type: null,
  breed: null,
  breeder: null,
};

export const schema = Yup.object().shape({
  keyword: Yup
    .string()
    .trim()
    .nullable(),
  type: Yup
    .array()
    .of(Yup.object())
    .nullable(),
  breed: Yup
    .array()
    .of(Yup.object())
    .nullable(),
  breeder: Yup
    .array()
    .of(Yup.object())
    .nullable(),
});
