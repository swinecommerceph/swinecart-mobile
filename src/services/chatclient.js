import { CHAT_URL } from 'react-native-dotenv';

class ChatClient {

  connect(user) {
    this.socket = new WebSocket(CHAT_URL);
    this.user = user;

    this.socket.addEventListener('open', this.onOpen.bind(this));
    this.socket.addEventListener('close', this.onClose.bind(this));
    this.socket.addEventListener('error', this.onError.bind(this));

    return this.socket;
  }

  onOpen() {
    const message = {
      connect: true,
      userId: this.user.id,
    };
    this.send(message);
  }

  onClose(data) {
    console.log('Close', data);
  }

  onError(data) {
    console.log('Error', data);
  }

  onMessage({ data }) {
  }

  send(data) {
    if (this.socket) {
      this.socket.send(JSON.stringify(data));
    }
  }

}

export default new ChatClient();