import {
  observable, action, toJS, runInAction
} from 'mobx';

import Message from '../models/Message';
class MessageStore {

  socket = null;

  @observable messages = [];
  @observable selectedUser = {
    id: 21
  }


  @action addMessage(messages) {
    this.messages.unshift(...messages);
    messages.map(message => {
      const m = new Message(message);
      console.log('Message: ', JSON.stringify(m.DBFormat));
      this.socket.send(JSON.stringify(m.DBFormat));
    });
  }

  @action handleReceivedMessage(message) {
    const m = new Message(message);
    console.log(m.GCFormat);
    this.messages.unshift(m.GCFormat);
    console.log('Message Store:', 'New Message!', message);
  }

  setSocket(socket) {
    this.socket = socket; 
  }
}

export default new MessageStore();