import uuid from 'react-native-uuid';
import UserStore from '../stores/UserStore';
import MessageStore from '../stores/MessageStore';

class Message {

  constructor(props) {
    this.GCFormat = Message.toGCFormat(props);
    this.DBFormat = Message.toDBFormat(props);
  }

  static toGCFormat(message) {
    const { message: text, from, from_id } = message;

    return {
      _id: uuid.v4(),
      text,
      user: {
        _id: from_id,
        name: from
      }
    }
  }

  static toDBFormat(message) {
    const { text } = message;
    const userRole = UserStore.userRole;
    const userId = UserStore.userId;
    const { id: selectedUserId } = MessageStore.selectedUser;
    
    return {
      message: text,
      direction: userRole === 'Breeder' ? 1 : 0,
      from: `${userId}`,
      to: `${selectedUserId}`
    };
  }

}

export default Message;