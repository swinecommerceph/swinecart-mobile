import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { LoadingOverlay } from 'atoms';
import { LoadingView, BlankScreen } from 'molecules';

import {
  Wizard, FormHeader
} from './components';

function Container() {

  const isFetching = useStoreState(state => state.farms.isLoading);
  const isLoading = useStoreState(state => state.productForm.isLoading);
  const farms = useStoreState(state => state.farms.items);
  const getFarms = useStoreActions(actions => actions.farms.getItems);

  useEffect(() => {
    getFarms();
  }, []);

  if (isFetching) {
    return (
      <LoadingView />
    );
  }
  else if (!isFetching && farms) {
    return (
      <Fragment>
        <LoadingOverlay show={isLoading} />
        <FormHeader />
        <Wizard />
      </Fragment>
    );
  }
  else {
    return (
      <BlankScreen />
    );
  }
}

export default memo(Container, () => true);