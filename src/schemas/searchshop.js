import * as Yup from 'yup';

const schema = Yup.object().shape({
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

export default schema;