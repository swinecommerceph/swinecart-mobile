import { createStackNavigator } from 'react-navigation-stack';

import {
  Inbox, Chat
} from 'features';


const navigatorConfig = {
  initialRouteName: 'Inbox',
  headerMode: 'none',
  defaultNavigationOptions: {
  }
};

const routes = {
  Inbox: Inbox,
  Chat: Chat,
};

const navigator = createStackNavigator(routes, navigatorConfig);

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;