import {
  View
} from 'react-native';
import {
  createSwitchNavigator
} from 'react-navigation';

import AuthChecker from '../../features/AuthChecker';
import Shop from '../../features/Shop';
import Login from '../../features/Login';
import Register from '../../features/Register';

import BreederTabNavigator from '../navigators/BreederTabNavigator';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  PublicShop: Shop,
  Breeder: BreederTabNavigator,
  Login: Login,
  Register: Register
}, {
  initialRouteName: 'AuthChecker'
});

export default RootNavigator;