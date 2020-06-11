import { createStackNavigator } from 'react-navigation-stack';


import CustomerOrders from 'features/CustomerOrders';


const navigatorConfig = {
  initialRouteName: 'CustomerOrders',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  CustomerOrders: CustomerOrders,
};

const navigator = createStackNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;