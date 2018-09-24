import {
  View
} from 'react-native';
import {
  createSwitchNavigator
} from 'react-navigation';

import AuthChecker from '../../features/AuthChecker';
import Shop from '../../features/Shop';

import BreederTabNavigator from '../navigators/BreederTabNavigator';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Shop: Shop,
  Breeder: BreederTabNavigator
}, {
  initialRouteName: 'AuthChecker'
});

export default RootNavigator;