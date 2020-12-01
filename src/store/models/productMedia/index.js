import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { ProductsService, ToastService } from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {
  ...BaseModel(),

  id: null,
  primaryImageId: null,

  isUploading: false,
  // Computed Values

  // Actions

  setId: action((state, payload) => {
    state.id = payload;
  }),

  setPrimaryImageId: action((state, payload) => {
    state.primaryImageId = payload;
  }),

  setIsUploading: action((state, payload) => {
    state.isUploading = payload;
  }),

  removeItem: action((state, payload) => {
    state.items = state.items.filter(item => item.id !== payload);
  }),

  // Side Effects
  deletePhoto: thunk(async (actions, payload, { getState }) => {

    const { currentProduct: { id } } = getState();

    const [error, data] = await to(ProductsService.deleteMedia(id, {
      mediaId: payload
    }));

    if (error) {

    }
    else {
      actions.removeItem(payload);
    }


  }),
  uploadPhoto: thunk(async (actions, payload, { getState }) => {

    actions.setIsUploading(true);

    const { id, items } = getState();

    const [error, data] = await to(ProductsService.addMedia(id, payload));

    if (error) {
      console.log(error);
      actions.setIsUploading(false);
    }
    else {
      ToastService.show('Upload success!', () => {
        actions.getItems({ isRefresh: false });
        actions.setIsUploading(false);
      });
    }

  }),
  getItems: thunk(async (actions, payload, { getState }) => {

    const { id } = getState();

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ProductsService.getProductMedia(id));

    if (error) {
      console.log(error);
    }
    else {
      const { images, primaryImageId } = data.data;
      actions.setPrimaryImageId(primaryImageId);
      actions.setItems({ items: images });
    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);
  }),
};