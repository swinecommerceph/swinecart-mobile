import {
  createSwitchNavigator
} from 'react-navigation';

import AuthChecker from '../../features/AuthChecker';

import BreederTabNavigator from '../navigators/BreederTabNavigator';
import PublicStackNavigator from '../navigators/PublicStackNavigator';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Public: PublicStackNavigator,
  Breeder: BreederTabNavigator
}, {
  initialRouteName: 'AuthChecker'
});

export default RootNavigator;