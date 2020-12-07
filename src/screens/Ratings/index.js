import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { HeaderBar, BackButton, LoadingView } from 'molecules';

import { Ratings } from './components';

function Container() {

  const isLoading = useStoreState(state => state.ratings.isLoading);
  const getRatings = useStoreActions(actions => actions.ratings.getData);

  useEffect(() => {
    getRatings();
  }, [])

  return (
    <Fragment>
      <HeaderBar title='Ratings' accessoryLeft={BackButton} />
      {
        isLoading
          ? <LoadingView />
          : <Ratings />
      }
    </Fragment>
  );
}

export default memo(Container);