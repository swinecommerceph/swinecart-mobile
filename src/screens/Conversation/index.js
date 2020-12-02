import React, { Fragment, memo, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { HeaderBar, BackButton, LoadingView } from 'molecules';

import { ChatView } from './components';

function Container() {

  const getMessages = useStoreActions(actions => actions.chat.getItems);
  const currentUser = useStoreState(state => state.chat.currentUser);

  useEffect(() => {
    getMessages({ isRefresh: false });
  }, [currentUser]);

  return (
    <Fragment>
      {
        !currentUser && <LoadingView />
      }
      {
        currentUser &&
        <Fragment>
          <HeaderBar title={`${currentUser.name}`} accessoryLeft={BackButton} />
          <ChatView />
        </Fragment>
      }
    </Fragment>
  );
}

export default memo(Container);