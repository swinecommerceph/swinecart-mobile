import React, { Fragment, memo } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { NavigationService } from 'services';

import { Block, Text } from 'atoms';

import StatCard from './StatCard';

function OrderOverview() {

  const stats = useStoreState(state => state.stats.data);
  const setIndex = useStoreActions(actions => actions.orders.setIndex);

  const onPressRequested = () => {
    setIndex(0);
    NavigationService.navigate('Orders');
  };

  const onPressReserved = () => {
    setIndex(1);
    NavigationService.navigate('Orders');
  };

  const onPressDelivery = () => {
    setIndex(2);
    NavigationService.navigate('Orders');
  };

  const onPressSold = () => {
    setIndex(3);
    NavigationService.navigate('Orders');
  };

  return (
    <Fragment>
      <Text bold size={18} textAlign='center' marginTop={1} color='primary'>
        Order Overview
      </Text>
      <Block row paddingHorizontal={1} marginTop={1}>
        <Block flex={1} marginRight={1}>
          <StatCard
            title='Requested'
            data={stats.requested}
            onPress={onPressRequested}
          />
        </Block>
        <Block flex={1}>
          <StatCard
            title='Reserved'
            data={stats.reserved}
            onPress={onPressReserved}
          />
        </Block>
      </Block>
      <Block row row paddingHorizontal={1} marginTop={1}>
        <Block flex={1} marginRight={1}>
          <StatCard
            title='On Delivery'
            data={stats.onDelivery}
            onPress={onPressDelivery}
          />
        </Block>
        <Block flex={1}>
          <StatCard
            title='Sold'
            data={stats.sold}
            onPress={onPressSold}
          />
        </Block>
      </Block>
    </Fragment>
  )
}

export default memo(OrderOverview);