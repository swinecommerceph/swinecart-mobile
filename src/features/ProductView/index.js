import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar } from 'atoms';

import { LoadingView, BlankScreen } from 'shared';

import {
  Details
} from './components';

function Container() {

  const isLoading = useStoreState(state => state.productView.isLoading);
  const currentId = useStoreState(state => state.productView.currentId);
  const data = useStoreState(state => state.productView.data);
  const getDetails = useStoreActions(actions => actions.productView.getData);

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