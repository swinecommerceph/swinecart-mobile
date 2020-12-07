import to from 'await-to-js';

const validateOptions = {
  abortEarly: false,
};

export async function validate(schema, values) {

  const [ errors ] = await to(schema.validate(values, validateOptions));

  if (errors && errors.inner) {
    return errors.inner.reduce((acc, error) => {
      const { path, message } = error;
      acc[path] = message;
      return acc;
    }, {});
  }

  return null;

}