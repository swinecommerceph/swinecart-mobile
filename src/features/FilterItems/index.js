import React, { Fragment, memo, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import { Form } from './components';

function Container() {

  const getFilterOptions = useStoreActions(
    actions => actions.filterItems.getFilterOptions
  );
  const isLoading = useStoreState(state => state.filterItems.isLoading);

  useState(() => {
    getFilterOptions();
  }, []);

  return (
    <Fragment>
      <HeaderBar title='Search Products' accessoryLeft={BackButton} />
      <StateScreen isLoading={isLoading} hasError={false}>
        <Form />
      </StateScreen>
    </Fragment>
  );

  
}

export default memo(Container);