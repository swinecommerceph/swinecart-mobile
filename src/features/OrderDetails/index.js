import React, { memo } from 'react';

import {
  Details
} from './components'

function Container({ navigation }) {

  const order = navigation.getParam('order');

  return (
    <Details
      order={order}
    />
  );
}

export default memo(Container);