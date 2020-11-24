import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomerScreen from 'screens/CustomerScreen';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator initialRouteName='Home1'>
      <Tab.Screen name="Home1" component={CustomerScreen} />
      <Tab.Screen name="Home2" component={CustomerScreen} />
      <Tab.Screen name="Home3" component={CustomerScreen} />
      <Tab.Screen name="Home4" component={CustomerScreen} />
      <Tab.Screen name="Home5" component={CustomerScreen} />
    </Tab.Navigator>
  );
}

export default Navigator;