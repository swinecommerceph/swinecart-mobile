import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Messages
} from '../../services';

import Message from '../models/Message';
class MessageStore {

  socket = null;

  @observable threads = [];
  @observable messages = [];
  @observable selectedUser = {};

  @action async getThreads() {
    const { data: { data: threads } } = await Messages.getThreads();
    runInAction(() => {
      this.threads = threads;
    });
  }

  @action async getMessages() {
    const { id } = this.selectedUser;
    const { data: { data: messages } } = await Messages.getMessages(id);
    const ms = messages.map(message => {
      const m = new Message(message);
      return m.GCFormat;
    });
    runInAction(() => {
      this.messages.unshift(...ms);
    });
  }

  @action addMessage(messages) {
    this.messages.unshift(...messages);
    messages.map(message => {
      const m = new Message(message);
      this.socket.send(JSON.stringify(m.DBFormat));
    });
  }

  @action setSelectedUser(selectedUser) {
    this.selectedUser = selectedUser;
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