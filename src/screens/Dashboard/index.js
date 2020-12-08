import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';

import {
  HeaderBar,
  DrawerButton,
  ContainerView
} from 'molecules';

import {
  OrderOverview,
  ProductInventory,
} from './components';

function Container() {

  useFocusEffect(
    useCallback(() => {
      getData();
      return () => {
        setLoading(true);
      }
    }, [])
  );

  const isLoading = useStoreState(state => state.stats.isLoading);

  const {
    getData,
    setLoading,
  } = useStoreActions(actions => actions.stats);

  return (
    <Fragment>
      <HeaderBar title='Dashboard' accessoryLeft={DrawerButton} />
      <StateScreen isLoading={isLoading} hasError={false}>
        <ContainerView>
          <OrderOverview />
          <ProductInventory />
        </ContainerView>
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);