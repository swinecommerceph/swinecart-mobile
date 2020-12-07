import { createStore } from 'easy-peasy';

import * as models from './models';
import * as forms from './forms';

const store = createStore({
  ...models,
  ...forms,
});

export default store;