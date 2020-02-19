import { createBottomTabNavigator } from 'react-navigation-tabs';

import ProfileStack from './ProfileStack';
import OrdersStack from './OrdersStack';
import InboxStack from '../InboxStack';
import DashboardStack from './DashboardStack';
import ManageProductsStack from './ManageProductsStack';

import { BreederTabBar } from 'shared';

const navigatorConfig = {
  initialRouteName: 'ManageProductsStack',
  tabBarComponent: BreederTabBar,
  defaultNavigationOptions: ({ navigation }) => {
  },
  lazy: true,
};

const routes = {
  'ManageProductsStack': {
    screen: ManageProductsStack,
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
  'ProfileStack': {
    screen: ProfileStack,
  },
};

const navigator = createBottomTabNavigator(routes, navigatorConfig);

export default navigator;