import {
  observable, action, toJS, autorun, runInAction, computed
} from 'mobx';

import {
  Auth
} from '../../services';
class UserStore {

  @observable user;
  @observable loadinguser;
  @observable updatingUser;

  @action async getUser() {
    const { data: { user }  } = await Auth.me();
    runInAction(() => {
      this.user = user;
    });
  }
  
  @computed get userRole() {
    const role = this.user.userable_type.split('\\')[2];
    return role;
  }

  reactToUserChange = autorun(() => { console.log('User:', toJS(this.user)) });

}

export default new UserStore();