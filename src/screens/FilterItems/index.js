import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import { Form } from './components';

function Container() {

  useEffect(() => {
    getFilterOptions();
  }, []);

  const {
    isLoading: {
      isSubmitting,
      isFetchingOptions
    }
  } = useStoreState(state => state.searchShopForm);

  const {
    getFilterOptions
  } = useStoreActions(actions => actions.searchShopForm);

  return (
    <Fragment>
      <LoadingOverlay show={isSubmitting} />
      <HeaderBar title='Search Products' accessoryLeft={BackButton} />
      <StateScreen isLoading={isFetchingOptions} hasError={false}>
        <Form />
      </StateScreen>
    </Fragment>
  );

}

export default memo(Container);