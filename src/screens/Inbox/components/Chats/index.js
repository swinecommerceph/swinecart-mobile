import React, { Fragment, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';

import {
  ChatList,
} from './components'

function Chats() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const {
    isLoading,
  } = useStoreState(state => state.messaging);

  const {
    getItems
  } = useStoreActions(actions => actions.messaging);

  return (
    <Fragment>
      <StateScreen isLoading={isLoading} hasError={false}>
        <ChatList />
      </StateScreen>
    </Fragment>
  );

}

export default Chats;