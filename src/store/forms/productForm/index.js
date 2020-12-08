import { action, computed, thunk } from 'easy-peasy';
import clamp from 'lodash/clamp';
import to from 'await-to-js';

import { types, houseTypes } from 'constants/enums';

import { findElement } from 'utils/helpers';

import {
  ToastService,
  NavigationService,
  ProductsService,
} from 'services';

import {
  validate,
  BaseForm,
} from '../utils';

import {
  toRequestFormat,
  initialState,
  schema,
} from './utils';

export default {

  ...(BaseForm()),

  // state
  schema,
  values: { ...initialState },
  mode: 'add',

  currentStep: 1,
  maxSteps: 2,

  typeOptions: types,
  houseOptions: houseTypes,

  isLoading: {
    isSubmitting: false,
    isFetchingDetails: false,
  },

  // computed
  isFirstStep: computed(state => state.currentStep === 1),
  isLastStep: computed(state => state.currentStep === state.maxSteps),

  // actions

  setMode: action((state, payload) => {
    state.mode = payload;
  }),

  setStep: action((state, payload) => {
    state.currentStep = clamp(payload, 0, state.maxSteps);
  }),

  nextStep: action((state, payload) => {
    state.currentStep = clamp(state.currentStep + 1, 0, state.maxSteps);
  }),

  prevStep: action((state, payload) => {
    state.currentStep = clamp(state.currentStep - 1, 0, state.maxSteps);
  }),

  // thunks

  resetForm: thunk(async (actions, payload) => {
    actions.setValues(initialState);
    actions.setStep(1);
    actions.setTouched({});
    actions.setErrors({});
  }),

  submit: thunk(async (actions, payload, { getState, getStoreActions }) => {

    actions.setLoading({ isSubmitting: true });

    const { values, mode } = getState();

    const formErrors = await actions.validateForm();

    if (!formErrors) {

      const requestData = toRequestFormat(values);

      const [ error, data ] = await to(
        mode === 'add'
          ? ProductsService.addProduct(requestData)
          : ProductsService.updateProduct(values.id, requestData)
      );

      if (error) {
        ToastService.show('Please try again later!');
        actions.setLoading({ isSubmitting: false });
      }
      else {
        getStoreActions().manageProducts.getItems({ isRefresh: false });
        NavigationService.back();
        ToastService.show(
          mode === 'add' ? 'Product added!' : 'Product updated!',
          () => {
            actions.setLoading({ isSubmitting: false });
          }
        );
      }
    }

    actions.setLoading({ isSubmitting: false });

  }),

  getProductDetails: thunk(async (actions, payload, { getState, getStoreState }) => {

    actions.setLoading({ isFetchingDetails: true });

    const [error, data] = await to(ProductsService.getProductDetails(payload));

    if (error) {

    }
    else {

      const { typeOptions, houseOptions } = getState();
      const { items: farmOptions } = getStoreState().farms;

      const details = data.data;
      const { product } = details
      const { productInfo, swineInfo, farm, otherDetails } = product;

      const {
        name,
        type,
        isUnique,
        quantity,
        birthDate,
        breed,
      } = productInfo;

      const {
        minPrice,
        maxPrice,
        houseType,
        birthWeight,
        adg,
        fcr,
        bft,
        lsba,
        leftTeats,
        rightTeats,
      } = swineInfo;

      const breedArray = breed.split(' x ');
      const isPureBreed = breedArray.length === 1;

      actions.setValues({
        id: payload,
        name: name,
        type: findElement(typeOptions, { key: type }),
        minPrice: minPrice,
        maxPrice: maxPrice,
        isUnique: isUnique,
        quantity: quantity,
        isPureBreed: isPureBreed,
        breed: isPureBreed ? breed : '',
        fatherBreed: !isPureBreed ? breedArray[0] : '',
        motherBreed: !isPureBreed ? breedArray[1] : '',
        birthWeight: birthWeight,
        birthDate: birthDate === '0000-00-00' ? null : new Date(birthDate),
        farmFrom: findElement(farmOptions, { id: farm.id }),
        houseType: findElement(houseOptions, { key: houseType }),
        adg: adg,
        fcr: fcr,
        bft: bft,
        lsba: lsba,
        leftTeats: leftTeats,
        rightTeats: rightTeats,
        otherDetails: otherDetails,
      });
    }

    actions.setLoading({ isFetchingDetails: false });

  }),

};