import { createBottomTabNavigator } from 'react-navigation-tabs';

import BreederProfileStack from './BreederProfileStack';
import OrdersStack from './OrdersStack';
import InboxStack from './InboxStack';
import DashboardStack from './DashboardStack';
import BreederProductsStack from './BreederProductsStack';

import { BreederTabBar } from 'shared';

const navigator = createBottomTabNavigator({
  'BreederProductsStack': {
    screen: BreederProductsStack,
  },
  'OrdersStack': {
    screen: OrdersStack,
  },
  'DashboardStack': {
    screen: DashboardStack,
  },
  'InboxStack': {
    screen: InboxStack,
  },
  'BreederProfileStack': {
    screen: BreederProfileStack,
  },
},
  {
    initialRouteName: 'BreederProductsStack',
    tabBarComponent: BreederTabBar,
    defaultNavigationOptions: ({ navigation }) => {
    },
    lazy: true,
  });

export default navigator;