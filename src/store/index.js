import { createStore } from 'easy-peasy';

import * as models from './models';

const store = createStore({...models});

export default store;