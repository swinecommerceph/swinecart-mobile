import {
  observable, computed, action, configure, toJS
} from 'mobx';

import {
  AsyncStorage
} from 'react-native';

import {
  Auth
} from '../../services';

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

  @action async login() {
    this.loading = true;
    try {
      const data = await Auth.login(this.values);
      console.log(toJS(this.values));
    }
    catch(e) {
      console.error(e);
    }
  }

}

export default new AuthStore();