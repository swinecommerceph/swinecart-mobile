import React, { Fragment, memo } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { LoadingView } from 'shared';

function ChatView() {

  const messages = useStoreState(state => state.chat.items); 
  const loggedInUser = useStoreState(state => state.user.currentUserGCFormat);
  const sendMessage = useStoreActions(actions => actions.chat.sendMessage);

  const onSend = (newMessages = []) => {
    if (newMessages.length > 0) {
      sendMessage(newMessages);
    }
  };

  const renderLoading = () => <LoadingView />;

  return (
    <GiftedChat
      messages={messages}
      isAnimated={true}
      onSend={onSend}
      user={loggedInUser}

      renderLoading={renderLoading}

    />
  );
}

export default memo(ChatView);