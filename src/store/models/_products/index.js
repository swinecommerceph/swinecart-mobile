import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';

export default {
  // State
  items: {},
  // Computed Values

  // Actions

  addItem: action((state, payload) => {
    state.items[payload.id] = payload;
  }),

};