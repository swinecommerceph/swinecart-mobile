import { action, thunk } from 'easy-peasy';
import map from 'lodash/map';
import to from 'await-to-js';

import { ToastService, MessagingService, ChatClient } from 'services';

import { initialState } from '../modelUtils';

const LIMIT = 10;

export default {
  // State
  ...initialState,
  
  currentUser: null,

  // Computed Values

  // Actions

  resetState: action((state) => {
    state = initialState;
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

  setCurrentUser: action((state, payload) => {
    const { id, name } = payload;
    state.currentUser = {
      _id: id,
      name
    };
  }),

  addMessage: thunk((actions, payload, { getState }) => {
    const { items, page } = getState();
    actions.setItems({
      items: [...payload, ...(items || [])],
      page
    });
  }),

  sendMessage: thunk((actions, payload, { getStoreState, getState }) => {

    const { accountType } = getStoreState().user;
    const { currentUser } = getState();

    payload.map(message => {

      const {
        text, user
      } = message;

      ChatClient.send({
        from: user. _id,
        to: currentUser._id,
        direction: accountType === 'Breeder' ? 1 : 0,
        message: text
      });
    });

    actions.addMessage(payload);

  }),

  onMessage: thunk((actions, payload, { getStoreState, getState }) => {

    const { currentUserGCFormat } = getStoreState().user;
  
    const {
      id, created_at, message, from_id, from, to, to_id, direction,
    } = payload;

    const user = direction === 0
      ? { name: from, _id: from_id }
      : currentUserGCFormat;

    const newMessage = {
      _id: id,
      text: message,
      createdAt: created_at,
      user
    };

    actions.addMessage([newMessage]);

  }),

  getItems: thunk(async (actions, payload, { getStoreState, getState }) => {

    const { isRefresh } = payload;
    const { currentUserGCFormat, accountType } = getStoreState().user;
    const { currentUser } = getState();
    
    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(MessagingService.getMessages(accountType, currentUser._id, 1, LIMIT));

    if (error) {

    }
    else {
      const { messages } = data.data;

      const convertedMessages = map(messages, message => {
        const {
          id, content, created_at, from_id
        } = message;

        const messageUser = from_id === currentUserGCFormat._id 
          ? currentUserGCFormat 
          : currentUser;

          return {
          _id: id,
          text: content,
          createdAt: created_at,
          user: messageUser
        };
      });

      actions.setItems({
        items: convertedMessages,
        page: 2
      });
    }


    isRefresh
      ? actions.setRefreshing(false)
      : actions.setLoading(false);

  }),

};