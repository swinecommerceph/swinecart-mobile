import React, { memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  Wizard, FormHeader
} from './components';

function Container() {

  // const isFetching = useStoreState(state => state.farms.isLoading);
  const isLoading = useStoreState(state => state.productForm.isLoading);
  const getFarms = useStoreActions(actions => actions.farms.getItems);

  // useEffect(() => {
  //   getFarms();
  // }, []);

  return (
    <StateScreen isLoading={false} hasError={false}>
      <LoadingOverlay show={isLoading} />
      <FormHeader />
      <Wizard />
    </StateScreen>
  )
}

export default memo(Container, () => true);