import { CHAT_URL } from 'react-native-dotenv';

class ChatClient {

  init(onReceivedMessage, user) {
    this.socket = new WebSocket(CHAT_URL);
    this.onReceivedMessage = onReceivedMessage;
    this.user = user;

    this.socket.addEventListener('message', this.onMessage.bind(this));
    this.socket.addEventListener('open', this.onOpen.bind(this));
    this.socket.addEventListener('close', this.onClose.bind(this));
    this.socket.addEventListener('error', this.onError.bind(this));
  }

  onOpen() {
    const message = {
      from: this.user.id,
      to: null,
      message: 'Connection established.',
      direction: null
    };

    this.send(message);
  }

  onClose(data) {
    // console.dir('Close', data);
  }

  onError(data) {
    // console.dir('Error', data);
  }

  onMessage({ data }) {
    const message = JSON.parse(data);
    this.onReceivedMessage(message);
  }

  send(data) {
    if (this.socket) {
      this.socket.send(JSON.stringify(data));
    }
  }

}

export default new ChatClient();