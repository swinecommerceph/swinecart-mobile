import { action, computed, thunk } from 'easy-peasy';
import clamp from 'lodash/clamp';
import to from 'await-to-js';

import { ProductsService, NavigationService, ToastService } from 'services';

import { types, houseTypes } from 'constants/enums';

import { findElement } from 'utils/helpers';

import { formInitialState, toRequestDataFormat } from './utils';

const titles = [
  'Product Information',
  'Swine Information',
];

export default {
  // State
  isLoading: false,
  isFetchingDetails: false,
  currentStep: 1,
  maxSteps: 2,
  mode: 'add',
  data: { ...formInitialState },
  typeOptions: types,
  houseOptions: houseTypes,

  // Computed
  currentTitle: computed(state => titles[state.currentStep - 1]),
  isFirstStep: computed(state => state.currentStep === 1),
  isLastStep: computed(state => state.currentStep === state.maxSteps),

  // Actions

  resetForm: action((state, payload) => {
    state.data = { ...formInitialState };
  }),

  setMode: action((state, payload) => {
    state.mode = payload;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setFetchingDetails: action((state, payload) => {
    state.isFetchingDetails = payload;
  }),

  setData: action((state, payload) => {
    state.data = { ...payload };
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

  // Thunk

  addProduct: thunk(async (actions, payload, { getStoreActions }) => {

    const { values, resetForm: resetFormikForm } = payload;

    const requestData = toRequestDataFormat(values);

    actions.setLoading(true);

    const [error, data] = await to(ProductsService.addProduct(requestData));

    if (error) {
      actions.setLoading(false);
    }
    else {
      ToastService.show('Product successfully added!', () => {
        actions.resetForm();
        resetFormikForm();
        getStoreActions().manageProducts.getItems({ isRefresh: false });
        actions.setStep(1);
        actions.setLoading(false);
        NavigationService.back();
      });
    }

  }),

  editProduct: thunk(async (actions, payload, { getStoreActions, getState }) => {

    const id = getState().data.id;
    const { values, resetForm: resetFormikForm } = payload;

    const requestData = toRequestDataFormat(values);

    actions.setLoading(true);

    const [error, data] = await to(ProductsService.updateProduct(id, requestData));

    if (error) {
      actions.setLoading(false);
    }
    else {
      ToastService.show('Product successfully edited!', () => {
        actions.resetForm();
        resetFormikForm();
        getStoreActions().manageProducts.getItems({ isRefresh: false });
        actions.setStep(1);
        actions.setLoading(false);
        NavigationService.back();
      });
    }

  }),

  getProductDetails: thunk(async (actions, payload, { getState, getStoreState }) => {

    actions.setFetchingDetails(true);

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

      actions.setData({
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

    actions.setFetchingDetails(false);

  }),

};