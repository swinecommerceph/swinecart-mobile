import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';
import routes from 'constants/routes';
import { ToastService, NotificationService, PushNotificationService, PubSubClient } from 'services';

import { initialState } from '../modelUtils';
const LIMIT = 10;

export default {
  // State
  ...initialState,
  topic: null,

  // Computed Values

  // Actions

  resetState: action((state) => {
    state = initialState;
  }),

  setTopic: action((state, payload) => {
    state.topic = payload;
  }),

  setItems: action((state, payload) => {
    const { items = [], page } = payload;
    state.items = items;
    state.page = page;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setRefreshing: action((state, payload) => {
    state.isRefreshing = payload;
  }),

  setLoadingMore: action((state, payload) => {
    state.isLoadingMore = payload;
  }),

  // Side Effects

  onNotification: thunk((actions, payload, { getStoreActions, getStoreState }) => {
    const { type } = payload;
    console.dir(payload);

    if (type === 'notification') {
      actions.getItems({ isRefresh: true });
    }
    else if (type === 'db-productRequest') {

      const { id, customer_name, name } = payload.body;
      
      const title = 'Product Request';
      const message = `${customer_name} requested for Product ${name}.`;

      PushNotificationService.showLocalNotification(title, message);

      const { currentProduct } = getStoreState().orderRequests;

      if (currentProduct && currentProduct.id === id) {
        getStoreActions().orderRequests.getItems({ isRefresh: true });
      }

      getStoreActions().orders.setCurrentStatus(routes[0]);
      getStoreActions().orders.getOrdersByStatus({ status: 'requested', isRefresh: true });
    }
    else if (type === 'db-rated') {

      const { review_customerName } = payload;

      const title = 'Customer Review';
      const message = `${review_customerName} rated you.`;

      PushNotificationService.showLocalNotification(title, message);
      getStoreActions().ratings.getData();
      getStoreActions().reviews.getItems({ isRefresh: true });
    }
    else if (type === 'sc-reserved') {
      const title = 'Product Reserved';
      const message = `Breeder reserved a product for you.`;

      PushNotificationService.showLocalNotification(title, message);
      // getStoreActions().customerOrders.setCurrentStatus(routes[1]);
      getStoreActions().customerOrders.getItems({ status: 'requested', isRefresh: false });
      getStoreActions().customerOrders.getItems({ status: 'reserved', isRefresh: false });
    }
    else if (type === 'sc-onDelivery') {
      const title = 'Product On Delivery';
      const message = `Product is now on delivery.`;

      PushNotificationService.showLocalNotification(title, message);
      // getStoreActions().customerOrders.setCurrentStatus(routes[2]);
      getStoreActions().customerOrders.getItems({ status: 'reserved', isRefresh: false });
      getStoreActions().customerOrders.getItems({ status: 'onDelivery', isRefresh: false });
    }
    else if (type === 'sc-sold') {
      const title = 'Product Sold';
      const message = `Product Sold`;

      PushNotificationService.showLocalNotification(title, message);
      // getStoreActions().customerOrders.setCurrentStatus(routes[3]);
      getStoreActions().customerOrders.getItems({ status: 'onDelivery', isRefresh: false });
      getStoreActions().customerOrders.getItems({ status: 'sold', isRefresh: false });
    }

  }),

  getTopic: thunk(async (actions, payload, { getStoreActions }) => {
    actions.setTopic(payload);
    PubSubClient.init(payload, actions.onNotification);
  }),

  getItems: thunk(async (actions, payload, { getStoreState }) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const { accountType } = getStoreState().user;

    const [error, data] = await to(NotificationService.getNotifications(accountType, 1, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { notifications } = data.data;

      actions.setItems({
        items: notifications,
        page: 2
      });

    }

    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),

  getMoreItems: thunk(async (actions, payload, { getStoreState, getState }) => {

    const { page: currentPage, items: currentItems } = getState();
    const { accountType } = getStoreState().user;

    actions.setLoadingMore(true);

    const [error, data] = await to(NotificationService.getNotifications(accountType, currentPage, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { notifications } = data.data;

      if (notifications.length > 0) {
        actions.setItems({
          items: [...(currentItems || []), ...notifications],
          page: currentPage + 1
        });
      }
      else {
        ToastService.show('No more notifications to load!', null);
      }

    }

    actions.setLoadingMore(false);

  }),
};