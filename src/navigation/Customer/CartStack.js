import { createStackNavigator } from 'react-navigation-stack';

import {
  Cart
} from 'features';

const navigator = createStackNavigator({
  Cart: Cart,
}, {
  initialRouteName: 'Cart',
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