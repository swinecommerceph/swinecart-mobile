import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { 
  HeaderBar,
} from 'molecules';

import { LoadingOverlay } from 'atoms';

import { OfficeInfo, Settings } from './components';

function Container() {

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = useStoreActions(actions => actions.breederProfile.getData);
  const isLoggingOut = useStoreState(state => state.auth.isLoggingOut);

  return (
    <Fragment>
      <LoadingOverlay show={isLoggingOut} /> 
      <HeaderBar
        title='Profile'
        rightControls={<Settings />}
      />
      <OfficeInfo />
    </Fragment>
  )

}

export default memo(Container);