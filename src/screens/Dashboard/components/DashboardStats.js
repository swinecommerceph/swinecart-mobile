import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { ContainerView, LoadingView, BlankScreen } from 'molecules';

import ProductInventoryStats from './ProductInventoryStats';
import ProductManagementStats from './ProductManagementStats';

function DashboardStats() {

  const getStats = useStoreActions(actions => actions.stats.getData);
  const isLoading = useStoreState(state => state.stats.isLoading);
  const stats = useStoreState(state => state.stats.data);

  useEffect(() => {
    getStats();
  }, []);

  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading && stats) {
    return (
      <Fragment>
        <ContainerView>
          <ProductInventoryStats />
          <ProductManagementStats />
        </ContainerView>
      </Fragment>
    );
  }
  else {
    return (
      <BlankScreen />
    )
  }
}

export default memo(DashboardStats);