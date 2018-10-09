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

  reactToTokenChange = autorun(() => { console.log('Token: ', this.token) });

}

export default new CommonStore();