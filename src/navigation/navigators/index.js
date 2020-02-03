import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthChecker from 'features/AuthChecker';

import PublicStack from './PublicStack';
import BreederTab from './BreederTab';
import CustomerTab from './CustomerTab';

const RootNavigator = createSwitchNavigator({
  Public: PublicStack,
  AuthChecker: AuthChecker,
  Breeder: BreederTab,
  Customer: CustomerTab,
}, {
    initialRouteName: 'AuthChecker'
});

export default createAppContainer(RootNavigator);