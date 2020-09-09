import { createStackNavigator } from 'react-navigation-stack';

import {
  BreederProfile
} from 'features';

const navigatorConfig = {
  initialRouteName: 'Profile',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  Profile: BreederProfile,
};

const navigator = createStackNavigator(routes, navigatorConfig);

export default navigator;