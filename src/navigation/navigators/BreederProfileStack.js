import { createStackNavigator } from 'react-navigation-stack';

import {
  BreederProfile
} from 'features';

const navigator = createStackNavigator({
  Profile: BreederProfile,
}, {
  initialRouteName: 'Profile',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
});

export default navigator;