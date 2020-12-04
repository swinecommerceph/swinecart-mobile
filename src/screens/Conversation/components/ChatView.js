import React, { memo } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { LoadingView } from 'molecules';

function ChatView({ otherUser }) {

  const user = useStoreState(state => state.user.data);
  const messages = useStoreState(state => state.chat.items);
  const sendMessage = useStoreActions(actions => actions.chat.sendMessage);

  const onSend = (newMessages = []) => {
    if (newMessages.length > 0) {
      sendMessage({
        messages: newMessages,
        otherUser
      });
    }
  };

  const renderLoading = () => <LoadingView />;

  return (
    <GiftedChat
      messages={messages}
      isAnimated={true}
      onSend={onSend}
      user={{
        _id: user.id,
        name: user.name
      }}
      renderLoading={renderLoading}
      renderAvatar={null}
    />
  );
}

export default memo(ChatView);