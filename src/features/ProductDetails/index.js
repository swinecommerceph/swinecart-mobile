import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { HeaderBar, BackButton, LoadingView, BlankScreen } from 'shared';

import {
  Details
} from './components';

function Container() {

  const isLoading = useStoreState(state => state.productDetails.isLoading);
  const currentId = useStoreState(state => state.productDetails.currentId);
  const data = useStoreState(state => state.productDetails.data);
  const getDetails = useStoreActions(actions => actions.productDetails.getData);

  useEffect(() => {
    getDetails();
  }, [currentId]);

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading && data) {
    return (
      <Fragment>
        <HeaderBar
          title='Details'
          leftControl={<BackButton />}
        />
        <Details />
      </Fragment>
    );
  }
  else {
    return (
      <BlankScreen />
    )
  }
}

export default memo(Container, () => true);