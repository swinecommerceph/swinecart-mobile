import * as Yup from 'yup';

const schema = Yup.object().shape({
  keyword: Yup
    .string()
    .trim()
    .nullable()
});

export default schema;