import { createBottomTabNavigator } from 'react-navigation-tabs';

import CartStack from './CartStack';
import ShopStack from './ShopStack';
import TransactionsStack from './TransactionsStack';
import InboxStack from './InboxStack';

import { CustomerTabBar } from 'shared';

const navigator = createBottomTabNavigator({
  'ShopStack': {
    screen: ShopStack,
  },
  'CartStack': {
    screen: CartStack,
  },
  'TransactionsStack': {
    screen: TransactionsStack,
  },
  'InboxStack': {
    screen: InboxStack,
  },
  // 'BreederProfileStack': {
  //   screen: CartStack,
  // },
},
  {
    initialRouteName: 'TransactionsStack',
    tabBarComponent: CustomerTabBar,
    defaultNavigationOptions: ({ navigation }) => {
    },
    lazy: true,
  });

export default navigator;