import React, { useState, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import OrdersList from './OrdersList';
import StatusPicker from './StatusPicker';

import orderRoutes from 'constants/routes';

const requestedRoute = () => <OrdersList status='requested' />;
const reservedRoute = () => <OrdersList status='reserved' />;
const onDeliveryRoute = () => <OrdersList status='onDelivery' />;
const soldRoute = () => <OrdersList status='sold' />;

function OrdersTabView() {

  const [ index, setIndex ] = useState(0);
  const [ routes ] = useState(orderRoutes);

  const navigationState = useMemo(
    () => ({ index, routes })
  , [ index ]);

  const renderScene = SceneMap({
    requested: requestedRoute,
    reserved: reservedRoute,
    onDelivery: onDeliveryRoute,
    sold: soldRoute,
  });

  const renderTabBar = ({ jumpTo }) => (
    <StatusPicker jumpTo={jumpTo} />
  );

  return (
    <TabView
      navigationState={navigationState}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      lazy={true}
      lazyPreloadDistance={0}
      swipeEnabled={false}
    />
  );


}

export default OrdersTabView;