import {
  View
} from 'react-native';
import {
  createBottomTabNavigator
} from 'react-navigation';

import BreederScreen from '../../features/BreederScreen';

const navigator = createBottomTabNavigator({
  'home' : BreederScreen
},
{
  initialRouteName: 'home'
});

export default navigator;