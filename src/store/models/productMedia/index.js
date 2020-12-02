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
  isDeleting: false,
  isSetting: false,
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
  setIsDeleting: action((state, payload) => {
    state.isDeleting = payload;
  }),
  setIsSetting: action((state, payload) => {
    state.isSetting = payload;
  }),


  removeItem: action((state, payload) => {
    state.items = state.items.filter(item => item.id !== payload);
  }),

  // Side Effects
  deletePhoto: thunk(async (actions, payload, { getState }) => {

    actions.setIsDeleting(true);

    const { id: productId } = getState();

    const [error, data] = await to(ProductsService.deleteMedia(productId, {
      mediaId: payload
    }));

    if (error) {
      actions.setIsDeleting(false);
    }
    else {
      ToastService.show('Photo Successfully deleted!', () => {
        actions.removeItem(payload);
        actions.setIsDeleting(false);
      });
    }

  }),
  uploadPhoto: thunk(async (actions, payload, { getState }) => {

    actions.setIsUploading(true);

    const { id, items } = getState();

    const [error, data] = await to(ProductsService.addMedia(id, payload));

    if (error) {
      actions.setIsUploading(false);
    }
    else {
      ToastService.show('Photo Successfully uploaded!', () => {
        actions.getItems({ isRefresh: false });
        actions.setIsUploading(false);
      });
    }

  }),
  setPrimary: thunk(async (actions, payload, { getState }) => {

    actions.setIsSetting(true);

    const { id } = getState();

    const [error, data] = await to(
      ProductsService.setPrimaryPicture(id, {
        imageId: payload
      })
    );

    if (error) {
      actions.setIsUploading(false);
    }
    else {
      actions.setPrimaryImageId(payload);
    }

    actions.setIsSetting(false);
  }),
  getItems: thunk(async (actions, payload, { getState }) => {

    const { id } = getState();

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ProductsService.getProductMedia(id));

    if (error) {
      actions.setFetchingError(true);
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