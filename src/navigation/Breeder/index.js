import { createStackNavigator } from 'react-navigation-stack';

import {
  ProductView, HistoryDetails
} from 'features';

import BreederTab from './BreederTab';

const navigatorConfig = {
  initialRouteName: 'BreederTab',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  BreederTab: BreederTab,
  ProductView: ProductView,
  HistoryDetails: HistoryDetails,
};

const navigator = createStackNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;