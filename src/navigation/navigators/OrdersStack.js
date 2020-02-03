import { createStackNavigator } from 'react-navigation-stack';

import {
  Orders, ProductRequests
} from 'features';

const navigator = createStackNavigator({
  Orders: Orders,
  ProductRequests: ProductRequests,
}, {
  initialRouteName: 'Orders',
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