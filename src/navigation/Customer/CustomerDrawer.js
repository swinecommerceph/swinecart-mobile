import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomerDrawer from 'organisms/CustomerDrawer';

import {
  Farms,
  CustomerProfile,
  ProductView,
  FilterItems,
} from 'features';

import CustomerTab from './CustomerTab';
import OrderHistoryStack from './OrderHistoryStack';

const navigatorConfig = {
  initialRouteName: 'CustomerTab',
  contentComponent: CustomerDrawer,
  defaultNavigationOptions: {
  },
  lazy: true,
};

const routes = {
  OrderHistoryStack: OrderHistoryStack,
  Farms: Farms,
  CustomerProfile: CustomerProfile,

  ProductView: ProductView,
  FilterItems: FilterItems,
  CustomerTab: CustomerTab,
};

const navigator = createDrawerNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;