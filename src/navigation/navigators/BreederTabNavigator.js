import {
  View
} from 'react-native';
import {
  createBottomTabNavigator
} from 'react-navigation';

import BreederScreen from '../../features/BreederScreen';

const BreederTabNavigator = createBottomTabNavigator({
  'home' : BreederScreen
},
{
  initialRouteName: 'home'
});

export default BreederTabNavigator;