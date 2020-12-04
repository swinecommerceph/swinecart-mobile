import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

import { ChatView } from './components';

function Container({ route }) {

  useFocusEffect(
    useCallback(() => {
      getItems({ otherUser, isRefresh: false });
      return () => {
        setLoading(true);
      };
    }, [])
  );

  const { otherUser } = route.params;

  const {
    isLoading,
  } = useStoreState(state => state.chat);

  const {
    getItems,
    setLoading,
  } = useStoreActions(actions => actions.chat);

  return (
    <Fragment>
      <HeaderBar title={`${otherUser.name}`} accessoryLeft={BackButton} />
      <StateScreen isLoading={isLoading} hasError={false}>
        <ChatView otherUser={otherUser} />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);