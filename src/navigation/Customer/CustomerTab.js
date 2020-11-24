import { createBottomTabNavigator } from 'react-navigation-tabs';

import CartStack from './CartStack';
import ShopStack from './ShopStack';
import CustomerOrdersStack from './CustomerOrderStack';
import InboxStack from '../Navigators/MainApp/InboxStack';

import CustomerTabBar from 'organisms/CustomerTabBar';

const navigatorConfig = {
  initialRouteName: 'CustomerOrdersStack',
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
};

const navigator = createBottomTabNavigator(routes, navigatorConfig);

export default navigator;