import { action, computed, thunk } from 'easy-peasy';
import clamp from 'lodash/clamp';
import to from 'await-to-js';

import { ProductsService, NavigationService, ToastService } from 'services';

import { types, houseTypes } from 'constants/enums';

import { formInitialState } from './utils';

const titles = [
  'Product Information',
  'Swine Information',
];

export default {
  // State
  isLoading: false,
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

    const {
      name, type, minPrice, maxPrice, isUnique, quantity,
      isPureBreed, breed, fatherBreed, motherBreed,
      birthDate, birthWeight, farmFrom, houseType,
      adg,
      fcr,
      bft,
      lsba,
      leftTeats,
      rightTeats,
      otherDetails,
    } = payload.values;

    const requestData = {
      farm_from_id: farmFrom.id,
      name,
      type: type.key,
      birthdate: birthDate,
      breed: isPureBreed ? breed : `${fatherBreed.toLowerCase()}+${motherBreed.toLowerCase()}`,
      min_price: minPrice,
      max_price: maxPrice,
      left_teats: leftTeats,
      right_teats: rightTeats,
      birthweight: birthWeight,
      house_type: houseType.key,
      is_unique: isUnique ? 1 : 0,
      quantity: isUnique ? 1 : quantity,
      adg,
      fcr,
      bft,
      lsba,
      other_details: otherDetails,
    };

    actions.setLoading(true);

    const [error, data] = await to(ProductsService.addProduct(requestData));

    if (error) {
      actions.setLoading(false);
    }
    else {
      const { product } = data.data;
      // ToastService.show('Product successfully added!', () => {
        actions.resetForm();
        getStoreActions().manageProducts.getItems({ isRefresh: false });
        actions.setStep(0);
        actions.setLoading(false);
        NavigationService.back();
      // });
    }

  }),

  getProductDetails: thunk(async (actions, payload) => {

    const [error, data] = await to(ProductsService.getProductDetails(payload));

    if (error) {

    }

    else {
      const product = data.data;
      console.log(product);
    }

  }),

};