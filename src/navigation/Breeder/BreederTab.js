import { createBottomTabNavigator } from 'react-navigation-tabs';

import OrdersStack from './OrdersStack';
import InboxStack from '../Navigators/MainApp/InboxStack';
import ManageProductsStack from './ManageProductsStack';

import BreederTabBar from 'organisms/BreederTabBar';

import {
  Dashboard
} from 'features';

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
  'Dashboard': {
    screen: Dashboard,
  },
  'InboxStack': {
    screen: InboxStack,
  },
};

const navigator = createBottomTabNavigator(routes, navigatorConfig);

export default navigator;