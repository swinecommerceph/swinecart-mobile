import React, { memo, useEffect, Fragment } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  Details
} from './components'

function Container({ navigation }) {

  const isLoading = useStoreState(state => state.orderDetails.isLoading);

  const { id, status, statusTime } = navigation.getParam('order');

  const {
    getOrder, setLoading
  } = useStoreActions(actions => actions.orderDetails);

  useEffect(() => {

    getOrder(id);

    return () => {
      setLoading(true);
    };

  }, [navigation]);

  return (
    <Fragment>
      <HeaderBar
        title='Order Details'
        accessoryLeft={BackButton}
      />
      <StateScreen isLoading={isLoading}>
        <Details
          status={status}
          statusTime={statusTime}
        />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);