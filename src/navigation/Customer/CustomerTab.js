import { createBottomTabNavigator } from 'react-navigation-tabs';

import CartStack from './CartStack';
import ShopStack from './ShopStack';
import CustomerOrdersStack from './CustomerOrderStack';
import InboxStack from '../InboxStack';

import CustomerTabBar from 'shared/CustomerTabBar';

const navigatorConfig = {
  initialRouteName: 'InboxStack',
  tabBarComponent: CustomerTabBar,
  defaultNavigationOptions: ({ navigation }) => {
  },
  lazy: true,
};

const routes = {
  'ShopStack': {
    screen: ShopStack,
  },
  'CartStack': {
    screen: CartStack,
  },
  'CustomerOrdersStack': {
    screen: CustomerOrdersStack,
  },
  'InboxStack': {
    screen: InboxStack,
  },
  // // 'BreederProfileStack': {
  //   screen: CartStack,
  // },
};

const navigator = createBottomTabNavigator(routes, navigatorConfig);

export default navigator;