import { CHAT_URL } from 'react-native-dotenv';

class ChatClient {

  user;
  socket;
  callback;

  connect(user, callback) {
    this.socket = new WebSocket(CHAT_URL);
    this.user = user;
    this.callback = callback;

    this.socket.addEventListener('open', this.onOpen.bind(this));
    this.socket.addEventListener('close', this.onClose.bind(this));
    this.socket.addEventListener('message', this.onMessage.bind(this));
    this.socket.addEventListener('error', this.onError.bind(this));
  }

  onOpen() {
    // console.log('Open');
    const message = {
      connect: true,
      userId: this.user.id,
    };
    this.send(message);
  }

  onClose() {
    // console.log('Close');
    // console.log('Reconnect')
    this.connect(this.user, this.callback);
  }

  onError() {
    // console.log('Error');
  }

  onMessage({ data }) {
    const message = JSON.parse(data);
    this.callback(message);
  }

  send(data) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    }
  }

  closeConnection() {
    if (this.socket) {
      this.socket.removeEventListener('close');
      this.socket.close();
    }
  }

}

export default new ChatClient();