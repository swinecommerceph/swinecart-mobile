import {
  API_URL
} from 'react-native-dotenv';

import UserStore from '../mobx/stores/UserStore';
import MessageStore from '../mobx/stores/MessageStore';

export default function()  {
  const userId = UserStore.userId;

  if(userId) {
    const ws = new WebSocket('ws://swinecart.test/chat');

    ws.onopen = () => {
      console.log('WebSocket:', 'Opened!');

      const message = {
        from: userId,
        to: null,
        message: 'Connection established.',
        direction: null
      };

      MessageStore.setSocket(ws);
      ws.send(JSON.stringify(message));
    }

    ws.onmessage = ({ data }) => {
      const message = JSON.parse(data);
      const { to } = message;
      if(userId === parseInt(to)) {
        MessageStore.handleReceivedMessage(message);
      }

    }

    ws.onerror = e => {
      console.log('WebSocket:', e.message);
    }

    ws.onclose = () => {
      console.log('WebSocket:', 'Closed');
    }
  }
}