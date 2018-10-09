import React, { Component } from 'react';
import {
  createSwitchNavigator
} from 'react-navigation';

import Navigation from '../../services/navigation';

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

class Root extends Component {
  state = {};
  render() {
    return <RootNavigator ref={r => Navigation.setTopLevelNavigator(r)} />;
  }
}

export default Root;