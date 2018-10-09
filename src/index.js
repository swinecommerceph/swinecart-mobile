import React from 'React';
import {
  configure
} from 'mobx';
import { 
  Provider
} from 'mobx-react';
import RootNavigator from './navigation/navigators';

import stores from './mobx/stores/index';

configure({ enforceActions: 'always' });

export default () => (
  <Provider {...stores}>
    <RootNavigator />
  </Provider>
);