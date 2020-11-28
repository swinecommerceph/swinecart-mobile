import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import { RequestList } from './components';

function Container({ route }) {

  const isLoading = useStoreState(state => state.reservations.isLoading);

  const {
    getItems,
    setLoading,
    setCurrentProduct,
  } = useStoreActions(actions => actions.requests);

  const product = route.params.product;

  useFocusEffect(
    useCallback(() => {
      setCurrentProduct(product);
      getItems({ isRefresh: false });
      return () => {
        setLoading(true);
      };
    }, [route.params.product])
  );

  return (
    <Fragment>
      <LoadingOverlay show={isLoading} />
      <HeaderBar
        title='Product Requests'
        accessoryLeft={BackButton}
      />
      <RequestList product={product} />
    </Fragment>
  );
}

export default memo(Container);