import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';
import routes from 'constants/routes';
import { ToastService, NotificationService, PushNotificationService, PubSubClient } from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {
  // State
  ...BaseModel(),
  topic: null,

  // Computed Values

  // Actions

  setTopic: action((state, payload) => {
    state.topic = payload;
  }),


  // Side Effects

  onNotification: thunk((actions, payload, { getStoreActions, getStoreState }) => {
    const { type } = payload;

    if (type === 'notification') {
      actions.getItems({ isRefresh: true });
    }
    else if (type === 'db-productRequest') {

      const { id, customer_name, name } = payload.body;

      const title = 'Product Request';
      const message = `${customer_name} requested for Product ${name}.`;

      PushNotificationService.showLocalNotification(title, message);

      const { currentProduct } = getStoreState().requests;

      if (currentProduct && currentProduct.id === id) {
        getStoreActions().requests.getItems({ isRefresh: true });
      }

      getStoreActions().orders.setIndex(0);
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
      getStoreActions().customerOrders.setIndex(1);
      getStoreActions().customerOrders.getItems({ status: 'requested', isRefresh: false });
      getStoreActions().customerOrders.getItems({ status: 'reserved', isRefresh: false });
    }
    else if (type === 'sc-onDelivery') {
      const title = 'Product On Delivery';
      const message = `Product is now on delivery.`;

      PushNotificationService.showLocalNotification(title, message);
      getStoreActions().customerOrders.setIndex(2);
      getStoreActions().customerOrders.getItems({ status: 'reserved', isRefresh: false });
      getStoreActions().customerOrders.getItems({ status: 'onDelivery', isRefresh: false });
    }
    else if (type === 'sc-sold') {
      const title = 'Product Sold';
      const message = `Product Sold`;

      PushNotificationService.showLocalNotification(title, message);
      getStoreActions().customerOrders.setIndex(3);
      getStoreActions().customerOrders.getItems({ status: 'onDelivery', isRefresh: false });
      getStoreActions().customerOrders.getItems({ status: 'sold', isRefresh: false });
    }
    else if (type === 'sc-cancelTransaction') {
      const title = 'Transaction Cancelled';
      const message = `A breeder cancelled a transaction with you.`;

      PushNotificationService.showLocalNotification(title, message);
      // getStoreActions().customerOrders.setIndex(3);
      // getStoreActions().customerOrders.getItems({ status: 'onDelivery', isRefresh: false });
      // getStoreActions().customerOrders.getItems({ status: 'sold', isRefresh: false });
    }

  }),

  getTopic: thunk(async (actions, payload) => {
    actions.setTopic(payload);
    PubSubClient.init(payload, actions.onNotification);
  }),

  getItems: thunk(async (actions, payload) => {

    const { isRefresh } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(NotificationService.getNotifications(1, LIMIT));

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

  getMoreItems: thunk(async (actions, payload, { getState }) => {

    const { page: currentPage, items: currentItems } = getState();

    actions.setLoadingMore(true);

    const [error, data] = await to(NotificationService.getNotifications(currentPage, LIMIT));

    if (error) {
      ToastService.show('Please try again later!', null);
    }
    else {
      const { notifications } = data.data;

      actions.setItems({
        items: [...(currentItems || []), ...notifications],
        page: currentPage + 1
      });

    }

    actions.setLoadingMore(false);

  }),
};