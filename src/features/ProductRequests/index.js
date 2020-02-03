import React, { Fragment, memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { HeaderBar, BackButton, LoadingOverlay } from 'shared';

import { RequestList } from './components';

function Container() {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar 
        title='Product Requests'
        leftControl={<BackButton />}
      />
      <RequestList />
    </Fragment>
  );
}

export default memo(Container, () => true);