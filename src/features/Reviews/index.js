import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton } from 'molecules';

import {
  ReviewList
} from './components'

function Container() {

  const getItems = useStoreActions(actions => actions.reviews.getItems);

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  return (
    <Fragment>
      <HeaderBar title='Reviews' accessoryLeft={BackButton} />
      <ReviewList />
    </Fragment>
  );
}

export default memo(Container, () => true);