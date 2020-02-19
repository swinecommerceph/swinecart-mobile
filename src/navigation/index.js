import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthChecker from 'features/AuthChecker';

import PublicStack from './PublicStack';
import BreederNavigator from './Breeder';
import CustomerNavigator from './Customer';

const navigatorConfig = {
  initialRouteName: 'AuthChecker',
};

const routes = {
  Public: PublicStack,
  AuthChecker: AuthChecker,
  Breeder: BreederNavigator,
  Customer: CustomerNavigator,
};

const RootNavigator = createSwitchNavigator(routes, navigatorConfig);

export default createAppContainer(RootNavigator);