import { createStackNavigator } from 'react-navigation-stack';


import OrderHistory from 'features/OrderHistory';
import HistoryDetails from 'features/HistoryDetails';


const navigatorConfig = {
  initialRouteName: 'OrderHistory',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  OrderHistory: OrderHistory,
  HistoryDetails: HistoryDetails,
};

const navigator = createStackNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;