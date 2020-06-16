import { createBottomTabNavigator } from 'react-navigation-tabs';

import OrdersStack from './OrdersStack';
import InboxStack from '../InboxStack';
import DashboardStack from './DashboardStack';
import ManageProductsStack from './ManageProductsStack';

import BreederTabBar from 'organisms/BreederTabBar';

const navigatorConfig = {
  initialRouteName: 'OrdersStack',
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
};

const navigator = createBottomTabNavigator(routes, navigatorConfig);

export default navigator;