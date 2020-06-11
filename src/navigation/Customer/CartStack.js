import { createStackNavigator } from 'react-navigation-stack';

// import {
//   Cart, RequestProduct
// } from 'features';

import Cart from 'features/Cart';

const navigator = createStackNavigator({
  Cart: Cart,
  // RequestProduct: RequestProduct,
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