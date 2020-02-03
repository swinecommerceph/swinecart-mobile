import { createStackNavigator } from 'react-navigation-stack';

import {
  Dashboard, Reviews
} from 'features';

const navigator = createStackNavigator({
  Dashboard: Dashboard,
  Reviews: Reviews,
}, {
    initialRouteName: 'Dashboard',
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