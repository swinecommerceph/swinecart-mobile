import {
  observable, action, toJS, runInAction, computed
} from 'mobx';

import {
  Notifications
} from '../../services';

class NotificationStore {

  @observable notifs = [];

  @action async getNotifs() {
    const { data: { data: notifs } } = await Notifications.getNotifs();
    runInAction(() => {
      this.notifs = notifs;
    });
    console.log(notifs);
  }

  @computed get unreadCount() {
    const unread = this.notifs.filter(n => !n.read_at);
    return unread.length;
  }


}

export default new NotificationStore();