import {
  observable, computed, action, configure
} from 'mobx';

import {
  AsyncStorage
} from 'react-native';


class AuthStore {

  @observable loading = false;

  @observable values = {
    email: '',
    password: ''
  };

  @action setEmail(email) {
    this.values.email = email;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  @action resetValues() {
    this.values.email = '';
    this.values.password = '';
  }

  @action login() {
    this.loading = true;
  }

}

export default new AuthStore();