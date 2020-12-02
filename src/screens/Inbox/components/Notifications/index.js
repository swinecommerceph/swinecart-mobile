import React, { Fragment, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';

import {
  NotificationList,
} from './components'

function Notifications() {

  useEffect(() => {
    getItems({ isRefresh: false });
  }, []);

  const {
    isLoading,
  } = useStoreState(state => state.notifications);

  const {
    getItems
  } = useStoreActions(actions => actions.notifications);

  return (
    <Fragment>
      <StateScreen isLoading={isLoading} hasError={false}>
        <NotificationList />
      </StateScreen>
    </Fragment>
  );

}

export default Notifications;