import {
  observable, computed, action, configure
} from 'mobx';

import {
  AsyncStorage
} from 'react-native';

class UserStore {

  @observable currentUser;
  @observable loadinguser;
  @observable updatingUser;

  @action getUser() {

  }

}

export default new UserStore();