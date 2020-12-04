import { action, thunk } from 'easy-peasy';
import map from 'lodash/map';
import to from 'await-to-js';

import {
  ToastService,
  ChatService,
  ChatClient
} from 'services';

import { BaseModel } from '../../utils';

const LIMIT = 10;

export default {
  // State
  ...BaseModel(),

  // Computed Values

  // Actions

  addMessages: thunk((actions, payload, { getState }) => {
    const { items, page } = getState();
    actions.setItems({
      items: [...payload, ...(items || [])],
      page
    });
  }),

  sendMessage: thunk((actions, payload, { getStoreState }) => {

    const {
      data: user,
      accountType
    } = getStoreState().user;

    const {
      otherUser,
      messages,
    } = payload;

    messages.map(message => {

      const outgoingMessage = {
        from_id: user.id,
        to_id: otherUser.id,
        message: message.text,
        direction: accountType === 'Breeder' ? 1 : 0,
        media_url: "",
        media_type: "",
      };

      ChatClient.send(outgoingMessage);

    });

    actions.addMessages(messages);
  }),

  onMessage: thunk((actions, payload, { getStoreState }) => {

    const user = getStoreState().user.data;

    const message = {
      _id: payload.id,
      id: payload.id,
      content: payload.message,
      text: payload.message,
      user: {
        _id: payload.from_id === user.id ? user.id: payload.to_id,
        id: payload.from_id === user.id ? user.id: payload.to_id,
      }
    };

    actions.addMessages([ message ]);
  }),

  getItems: thunk(async (actions, payload, { getStoreState }) => {

    const user = getStoreState().user.data;

    const { isRefresh, otherUser } = payload;

    isRefresh
      ? actions.setRefreshing(true)
      : actions.setLoading(true);

    const [error, data] = await to(ChatService.getMessages(otherUser.id, 1, 1000));

    if (error) {
      actions.setFetchingError(false);
    }
    else {
      const { messages } = data.data;

      const convertedMessages = messages.map(message => {

        message._id = message.id;
        message.text = message.content;

        message.user = {
          _id: message.fromId === user.id ? user.id: otherUser.id,
          id: message.fromId === user.id ? user.id: otherUser.id,
          name: message.fromId === user.id ? user.name: otherUser.name,
        };

        return message;
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