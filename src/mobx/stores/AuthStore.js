import {
  observable, action, toJS
} from 'mobx';

import {
  Auth
} from '../../services';

import CommonStore from './CommonStore';
import UserStore from './UserStore';

class AuthStore {

  @observable loading = false;

  @observable values = {
    email: 'dean.wilkinson@kutch.org',
    password: 'secret12'
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
      const { data: { data: { access_token : token } } } = await Auth.login(this.values);
      await CommonStore.setToken(token);
      await UserStore.getUser();
    }
    catch(e) {
      console.error(e);
    }
  }

}

export default new AuthStore();