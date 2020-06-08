import React, { Fragment, memo, useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Block, Button, Text, HeaderBar } from 'atoms';

import {
  RequestProduct
} from './components';

function Container({ navigation }) {

  const data = navigation.getParam('data');

  return (
    <Fragment>
      <HeaderBar title='Request Product' />
      <RequestProduct data={data} />
    </Fragment>
  );
}

export default memo(Container, () => true);