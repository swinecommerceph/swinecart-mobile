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
    getItems();
  }, []);

  const { isLoading } = useStoreState(state => state.farms);
  const { getItems } = useStoreActions(actions => actions.farms);

  return (
    <Fragment>
      <HeaderBar
        title='Farms'
        accessoryLeft={BackButton}
        accessoryRight={AddButton}
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <FarmList />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);