import {
  observable, action, toJS, runInAction
} from 'mobx';


class MessageStore {

  @observable messages = [];

  @action addMessage(messages) {
    this.messages.unshift(...messages);
  }

}

export default new MessageStore();