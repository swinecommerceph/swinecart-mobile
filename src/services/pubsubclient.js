import { PUSHER_URL } from 'react-native-dotenv';

const types = [
  'welcome',
  'prefix',
  'call',
  'callresult',
  'callerror',
  'subscribe',
  'unsubscribe',
  'publish',
  'event',
];

const typesByIndex = types.reduce((acc, element, index) => {
  acc[element] = index;
  return acc;
}, {});

class PubSubClient {

  timeout = 1000;

  init(topic, onNotification) {
    this.topic = topic;

    this.socket = new WebSocket(PUSHER_URL);
    this.onNotification = onNotification;

    this.socket.addEventListener('message', this.onMessage.bind(this));
    this.socket.addEventListener('open', this.onOpen.bind(this));
    this.socket.addEventListener('close', this.onClose.bind(this));
    this.socket.addEventListener('error', this.onError.bind(this));
  }

  onOpen(data) {
    // console.dir('Open', data);
  }

  onClose(data) {
    console.dir('Close', data);
  }

  onError(data) {
  }

  onMessage(message) {
    const { data } = message;
    const [typeIndex, ...messageData] = JSON.parse(data);
    const type = types[typeIndex];

    if (type === 'welcome') {
      this.send([typesByIndex['subscribe'], this.topic]);
    }
    else if (type === 'event') {
      this.onNotification(JSON.parse(messageData[1]));
    }

  }

  send(data) {
    this.socket.send(JSON.stringify(data));
  }

}


export default new PubSubClient();