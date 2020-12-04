import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  CartScreen,
  ShopScreen,
  InboxScreen,
  CustomerOrderScreen,
} from 'screens';

import TabBar from 'organisms/TabBar';

const Tab = createBottomTabNavigator();

const tabBarRoutes = [
  { name: 'Shop', component: ShopScreen, iconName: 'shopping-bag' },
  { name: 'SwineCart', component: CartScreen, iconName: 'shopping-cart' },
  { name: 'Orders', component: CustomerOrderScreen, iconName: 'car' },
  { name: 'Inbox', component: InboxScreen, iconName: 'email' },
];

const tabBar = props => (
  <TabBar {...props} tabBarRoutes={tabBarRoutes} />
);

function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName='Inbox'
      tabBar={tabBar}
      lazy='true'
    >
      {tabBarRoutes.map(({ name, component }, index) => (
        <Tab.Screen name={name} component={component} key={index} />
      ))}
    </Tab.Navigator>
  );
}

export default Navigator;