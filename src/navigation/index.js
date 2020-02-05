import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthChecker from 'features/AuthChecker';

import PublicStack from './PublicStack';
import BreederTab from './BreederTab';
import CustomerNavigator from './Customer';

const navigatorConfig = {
  initialRouteName: 'AuthChecker',
};

const routes = {
  Public: PublicStack,
  AuthChecker: AuthChecker,
  Breeder: BreederTab,
  Customer: CustomerNavigator,
};

const RootNavigator = createSwitchNavigator(routes, navigatorConfig);

export default createAppContainer(RootNavigator);