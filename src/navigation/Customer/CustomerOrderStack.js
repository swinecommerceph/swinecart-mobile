import { createStackNavigator } from 'react-navigation-stack';

import {
  CustomerOrders
} from 'features';

const navigator = createStackNavigator({
  CustomerOrders: CustomerOrders,
}, {
  initialRouteName: 'CustomerOrders',
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