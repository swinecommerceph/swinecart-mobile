import uuid from 'react-native-uuid';
import UserStore from '../stores/UserStore';
import MessageStore from '../stores/MessageStore';

class Message {

  constructor(props) {
    this.GCFormat = Message.toGCFormat(props);
    this.DBFormat = Message.toDBFormat(props);
  }

  static toGCFormat(message) {

    if(message.from) {
      const { message: text, from_id } = message;
      return {
        _id: uuid.v4(),
        text,
        user: {
          _id: from_id
        }
      }
    }
    else {
      const { message: text, direction, customer_id, breeder_id } = message;
      const senderId = direction === 0? customer_id : breeder_id;
      return {
        _id: uuid.v4(),
        text,
        user: {
          _id: senderId
        }
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