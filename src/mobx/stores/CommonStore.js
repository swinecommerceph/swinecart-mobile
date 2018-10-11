import {
  observable, runInAction, action, autorun
} from 'mobx';

import {
  AsyncStorage
} from 'react-native';

import {
  Auth
} from '../../services';


class CommonStore {

  @observable token = null;

  @action async setToken(token) {
    await AsyncStorage.setItem('token', token);
    runInAction(() => {
      this.token = token;
    });
  }

  @action async removeToken() {
    await AsyncStorage.removeItem('token');
    runInAction(() => {
      this.token = null;
    });
  }

  reactToTokenChange = autorun(() => { console.log('Token: ', this.token) });

}

export default new CommonStore();