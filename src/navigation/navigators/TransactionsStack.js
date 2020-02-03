import { createStackNavigator } from 'react-navigation-stack';

import {
  Transactions
} from 'features';

const navigator = createStackNavigator({
  Transactions: Transactions,
}, {
  initialRouteName: 'Transactions',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
});

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;