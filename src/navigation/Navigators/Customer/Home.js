import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomerScreen from 'screens/CustomerScreen';

import TabBar from 'organisms/TabBar';

const Tab = createBottomTabNavigator();

const tabBarRoutes = [
  { name: 'Shop', component: CustomerScreen, iconName: 'shopping-bag' },
  { name: 'SwineCart', component: CustomerScreen, iconName: 'shopping-cart' },
  { name: 'Orders', component: CustomerScreen, iconName: 'car' },
  { name: 'Messages', component: CustomerScreen, iconName: 'email' },
];

const tabBar = props => (
  <TabBar {...props} tabBarRoutes={tabBarRoutes} />
);

function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home1'
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