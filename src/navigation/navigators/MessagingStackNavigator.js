import {
  createStackNavigator
} from 'react-navigation';

import Chat from '../../features/Chat';
import Conversations from '../../features/Conversations';

const navigator = createStackNavigator({
  Conversations: Conversations,
  Chat: Chat
}, {
    initialRouteName: 'Conversations',
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;