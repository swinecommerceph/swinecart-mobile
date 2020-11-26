import React, { Fragment, memo, useCallback, useEFfect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import {
  Details
} from './components';

function Container({ route }) {

  const isLoading = useStoreState(state => state.productView.isLoading);

  const {
    getData, setLoading
  } = useStoreActions(actions => actions.productView);

  const productId = route.params.id;

  useFocusEffect(
    useCallback(() => {
      getData(productId);
      return () => {
        setLoading(true);
      };
    }, [ productId ])
  );

  return (
    <Fragment>
      <HeaderBar
        title='Product Details'
        accessoryLeft={BackButton}
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <Details />
      </StateScreen>
    </Fragment>
  );

}

export default memo(Container);