import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  Details,
  EditButton,
} from './components'

function Container({ route }) {

  const { id } = route.params;

  useFocusEffect(
    useCallback(() => {
      getItem(id);
      return () => {
        setLoading(true);
      }
    }, [route.params.id])
  );

  const {
    setLoading,
    getItem,
  } = useStoreActions(actions => actions.farmDetails);

  const {
    isLoading,
    hasFetchingError
  } = useStoreState(state => state.farmDetails);

  return (
    <Fragment>
      <HeaderBar
        title='Farm Details'
        accessoryLeft={BackButton}
        accessoryRight={EditButton}
      />
      <StateScreen isLoading={isLoading} hasError={hasFetchingError}>
        <Details />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);