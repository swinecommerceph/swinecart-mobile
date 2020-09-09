import { createStackNavigator } from 'react-navigation-stack';

import {
  Orders, ProductRequests
} from 'features';

const navigatorConfig = {
  initialRouteName: 'Orders',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  Orders: Orders,
  ProductRequests: ProductRequests,
};

const navigator = createStackNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;