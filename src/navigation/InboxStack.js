import { createStackNavigator } from 'react-navigation-stack';

import {
  Inbox, Chat
} from 'features';

const navigator = createStackNavigator({
  Inbox: Inbox,
  Chat: Chat,
}, {
    initialRouteName: 'Inbox',
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