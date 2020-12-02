import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  ReviewList
} from './components'

function Container() {

  useFocusEffect(
    useCallback(() => {
      getItems({ isRefresh: false })
      return () => {
        setLoading(true);
      }
    }, [])
  );

  const isLoading = useStoreState(state => state.reviews.isLoading);

  const {
    getItems,
    setLoading,
  } = useStoreActions(actions => actions.reviews);

  return (
    <Fragment>
      <HeaderBar title='Reviews' accessoryLeft={BackButton} />
      <StateScreen isLoading={isLoading} hasError={false}>
        <ReviewList />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);