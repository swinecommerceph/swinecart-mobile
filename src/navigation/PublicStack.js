import { createStackNavigator } from 'react-navigation-stack';

import Login from 'features/Login';


const navigator = createStackNavigator({
  Login: Login,
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
});

export default navigator;