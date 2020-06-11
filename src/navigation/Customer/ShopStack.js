import { createStackNavigator } from 'react-navigation-stack';

// import {
//   Shop
// } from 'features';

import Shop from 'features/Shop';

const navigator = createStackNavigator({
  Shop: Shop,
}, {
  initialRouteName: 'Shop',
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