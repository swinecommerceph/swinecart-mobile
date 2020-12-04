import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  FarmList,
  AddButton
} from './components';

function Container() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const { isLoading } = useStoreState(state => state.farms);
  const accountType = useStoreState(state => state.user.accountType);
  const { getItems } = useStoreActions(actions => actions.farms);

  return (
    <Fragment>
      <HeaderBar
        title='Farms'
        accessoryLeft={BackButton}
        accessoryRight={
          accountType === 'Customer'
            ? AddButton
            : null
        }
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <FarmList />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);