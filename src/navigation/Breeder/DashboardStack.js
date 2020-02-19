import { createStackNavigator } from 'react-navigation-stack';

import {
  Dashboard, Reviews
} from 'features';

const navigatorConfig = {
  initialRouteName: 'Dashboard',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  Dashboard: Dashboard,
  Reviews: Reviews,
};

const navigator = createStackNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;