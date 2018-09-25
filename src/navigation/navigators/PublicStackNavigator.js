import {
  createStackNavigator
} from 'react-navigation';

import Shop from '../../features/Shop';
import Login from '../../features/Login';

const navigator = createStackNavigator({
  Shop: Shop,
  Login: Login
}, {
  initialRouteName: 'Shop',
  navigationOptions: ({ navigation }) => {
    return {
      header: null
    }
  }
});

export default navigator;