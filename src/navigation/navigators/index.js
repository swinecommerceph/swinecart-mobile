import {
  View
} from 'react-native';
import {
  createSwitchNavigator
} from 'react-navigation';

import AuthChecker from '../../features/AuthChecker';
import Products from '../../features/Products';

import BreederTabNavigator from '../navigators/BreederTabNavigator';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Products: Products,
  Breeder: BreederTabNavigator
}, {
  initialRouteName: 'AuthChecker'
});

export default RootNavigator;