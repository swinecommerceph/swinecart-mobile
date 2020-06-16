import React, { Fragment, memo } from 'react';

import { HeaderBar, BackButton } from 'molecules';

function Container() {

  return (
    <Fragment>
      <HeaderBar title='' accessoryLeft={BackButton} />
    </Fragment>
  );
}

export default memo(Container, () => true);