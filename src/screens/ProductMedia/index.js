import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { Block, Text } from 'atoms';

import {
  MediaList, AddPhoto
} from './components'

function Container() {

  const getItems = useStoreActions(actions => actions.productMedia.getItems);

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  return (
    <Fragment>
      <AddPhoto />
      <MediaList />
    </Fragment>
  );
}

export default memo(Container, () => true);