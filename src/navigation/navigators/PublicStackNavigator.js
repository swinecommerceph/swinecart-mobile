import {
  createStackNavigator
} from 'react-navigation';

import Shop from '../../features/Shop';
import Login from '../../features/Login';
import Register from '../../features/Register';

const navigator = createStackNavigator({
  Shop: Shop,
  Login: Login,
  Register: Register
}, {
  initialRouteName: 'Login',
  navigationOptions: ({ navigation }) => {
    return {
      header: null
    }
  }
});

export default navigator;