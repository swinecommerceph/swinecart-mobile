import React, { Fragment, memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import routes from 'constants/routes';
import { Text } from 'shared';
import { NavigationService } from 'services';

import StatCard from './StatCard';

function ProductInventoryStats() {

  const stats = useStoreState(state => state.stats.data);

  const setCurrentStatus = useStoreActions(actions => actions.orders.setCurrentStatus);

  const onPressRequested = () => {
    setCurrentStatus(routes[0]);
    NavigationService.navigate('OrdersStack');
  };

  const onPressReserved = () => {
    setCurrentStatus(routes[1]);
    NavigationService.navigate('OrdersStack');
  };

  const onPressDelivery = () => {
    setCurrentStatus(routes[2]);
    NavigationService.navigate('OrdersStack');
  };

  const onPressSold = () => {
    setCurrentStatus(routes[3]);
    NavigationService.navigate('OrdersStack');
  };

  return (
    <Fragment>
      <Text bold size={18} textAlign='center' marginTop={1} color='primary'>
        Product Inventory and Status
      </Text>
      <StatCard title='Requested' data={stats.requested} onPress={onPressRequested} />
      <StatCard title='Reserved' data={stats.reserved} onPress={onPressReserved} />
      <StatCard title='On Delivery' data={stats.onDelivery} onPress={onPressDelivery} />
      <StatCard title='Sold' data={stats.sold} onPress={onPressSold} />
    </Fragment>
  )
}

export default memo(ProductInventoryStats);