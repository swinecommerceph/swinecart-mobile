import RNPushNotification from 'react-native-push-notification';

class PushNotification {

  showLocalNotification = (title, message)  => {
    RNPushNotification.localNotification({
      title,
      message,
    });
  }

}

export default new PushNotification();