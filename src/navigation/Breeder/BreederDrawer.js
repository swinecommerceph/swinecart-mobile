import { createDrawerNavigator } from 'react-navigation-drawer';

import BreederDrawer from 'organisms/BreederDrawer';

import {
  ProductView,
  SendProduct,
  Reviews,
  Ratings,
  Farms,
  BreederProfile,
} from 'features';

import BreederTab from './BreederTab';

const navigatorConfig = {
  initialRouteName: 'BreederTab',
  contentComponent: BreederDrawer, 
  defaultNavigationOptions: {
  },
  lazy: true,
};

const routes = {
  Reviews: Reviews,
  Ratings: Ratings,
  Farms: Farms,
  Profile: BreederProfile,

  ProductView: ProductView,
  SendProduct: SendProduct,
  // ProductMedia: ProductMedia,
  BreederTab: BreederTab,
};

const navigator = createDrawerNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;