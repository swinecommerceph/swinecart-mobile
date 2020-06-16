import { createStackNavigator } from 'react-navigation-stack';

import {
  ProductView,
  HistoryDetails,
  FilterItems
} from 'features';

import CustomerTab from './CustomerTab';

const navigatorConfig = {
  initialRouteName: 'CustomerTab',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  CustomerTab: CustomerTab,
  ProductView: ProductView,
  HistoryDetails: HistoryDetails,
  FilterItems: FilterItems,
};

const navigator = createStackNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;