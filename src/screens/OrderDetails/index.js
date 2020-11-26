import React, { memo, useEffect, Fragment, useMemo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  Details
} from './components'

function Container({ route }) {

  const isLoading = useStoreState(state => state.orderDetails.isLoading);

  const { id, status, statusTime } = useMemo(
    () => route.params.order,
    [route.params.order]
  );

  const {
    getOrder, setLoading
  } = useStoreActions(actions => actions.orderDetails);

  useFocusEffect(
    useCallback(() => {
      getOrder(id);
      return () => {
        setLoading(true);
      };
    }, [ route.params.order ])
  );

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