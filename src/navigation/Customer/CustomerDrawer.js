import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomerDrawer from 'organisms/CustomerDrawer';

import {
  Farms,
  CustomerProfile,
  ProductView,
  HistoryDetails,
  OrderHistory,
  FilterItems
} from 'features';

import CustomerTab from './CustomerTab';

const navigatorConfig = {
  initialRouteName: 'CustomerTab',
  contentComponent: CustomerDrawer,
  defaultNavigationOptions: {
  },
  lazy: true,
};

const routes = {
  // OrderHistory: OrderHistory,
  Farms: Farms,
  CustomerProfile: CustomerProfile,

  ProductView: ProductView,
  HistoryDetails: HistoryDetails,
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