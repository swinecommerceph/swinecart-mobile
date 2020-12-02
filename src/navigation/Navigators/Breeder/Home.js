import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  ManageProductsScreen,
  OrdersScreen,
  DashboardScreen,
  InboxScreen,
} from 'screens';

import TabBar from 'organisms/TabBar';

const Tab = createBottomTabNavigator();

const tabBarRoutes = [
  { name: 'Products', component: ManageProductsScreen, iconName: 'shopping-bag' },
  { name: 'Orders', component: OrdersScreen, iconName: 'car' },
  { name: 'Dashboard', component: DashboardScreen, iconName: 'grid' },
  { name: 'Inbox', component: InboxScreen, iconName: 'email' },
];

const tabBar = props => (
  <TabBar {...props} tabBarRoutes={tabBarRoutes} />
);

function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName='Products'
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