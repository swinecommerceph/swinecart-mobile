import React, { Fragment, memo } from 'react';

import { HeaderBar, BackButton } from 'molecules';

import {
  ReviewList
} from './components'

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Reviews' accessoryLeft={BackButton} />
      <ReviewList />
    </Fragment>
  );
}

export default memo(Container, () => true);