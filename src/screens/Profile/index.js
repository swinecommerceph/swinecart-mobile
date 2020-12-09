import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  UserDetails,
  EditButton,
} from './components';

function Container() {

  const { isLoading } = useStoreState(state => state.profile);
  const { getProfile } = useStoreActions(actions => actions.profile);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
      <HeaderBar
        title='Profile'
        accessoryLeft={BackButton}
        accessoryRight={EditButton}
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <UserDetails />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);