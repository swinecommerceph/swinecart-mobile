import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthChecker from 'features/AuthChecker';

import PublicStack from './PublicStack';
// import BreederNavigator from './Breeder';
import CustomerNavigator from './Customer';

import { TestScreen } from 'features';

const navigatorConfig = {
  initialRouteName: 'Public',
};

const routes = {
  Public: PublicStack,
  AuthChecker: AuthChecker,
  // Breeder: BreederNavigator,
  Customer: CustomerNavigator,
  TestScreen: TestScreen
};

const RootNavigator = createSwitchNavigator(routes, navigatorConfig);

export default createAppContainer(RootNavigator);