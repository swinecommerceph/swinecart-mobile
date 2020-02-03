import React, { Fragment, memo } from 'react';
import { HeaderBar, BackButton } from 'shared';

import {
  ReviewList
} from './components'

function Container() {
  return (
    <Fragment>
      <HeaderBar title='Reviews' leftControl={<BackButton />} />
      <ReviewList />
    </Fragment>
  );
}

export default memo(Container, () => true);