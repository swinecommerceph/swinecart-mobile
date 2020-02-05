import { createBottomTabNavigator } from 'react-navigation-tabs';

import CartStack from './CartStack';
import ShopStack from './ShopStack';
import TransactionsStack from './TransactionsStack';
import InboxStack from '../InboxStack';

import { CustomerTabBar } from 'shared';

const navigatorConfig = {
  initialRouteName: 'ShopStack',
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
  'TransactionsStack': {
    screen: TransactionsStack,
  },
  // 'InboxStack': {
  //   screen: InboxStack,
  // },
  // 'BreederProfileStack': {
  //   screen: CartStack,
  // },
};

const navigator = createBottomTabNavigator(routes, navigatorConfig);

export default navigator;