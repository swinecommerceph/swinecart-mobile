import { action, thunkOn, thunk } from 'easy-peasy';
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

export const BaseForm = () => ({

  // state

  errors: {},
  touched: {},

  // actions

  setErrors: action((state, payload) => {
    state.errors = { ...payload };
  }),

  setValues: action((state, payload) => {
    state.values = { ...payload };
  }),

  setTouched: action((state, payload) => {
    state.touched = { ...payload };
  }),

  setFieldError: action((state, payload) => {
    const { name, value } = payload;
    state.errors[name] = value;
  }),

  setFieldValue: action((state, payload) => {
    const { name, value } = payload;
    state.values[name] = value;
  }),

  setFieldTouched: action((state, payload) => {
    const { name, value } = payload;
    state.touched[name] = value;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = { ...state.isLoading, ...payload };
  }),

  validateField: thunk(async (actions, payload, { getState }) => {

    const { schema, values } = getState();

    const [ error ] = await to(schema.validateAt(payload, values));

    if (error) {
      const { message } = error;
      return message;
    }

    return null;
  }),

  checkFieldError: thunkOn(
    actions => [
      actions.setFieldValue,
      actions.setFieldTouched,
    ],
    async (actions, { payload }) => {
      const { name } = payload;
      const error = await actions.validateField(name);
      actions.setFieldError({ name, value: error });
    }
  ),

});