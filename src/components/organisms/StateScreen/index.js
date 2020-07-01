import React, { Fragment, memo } from 'react';

import { LoadingView, BlankScreen } from 'molecules';

function StateScreen({ isLoading, hasError, children }) {
  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (hasError) {
    return (
      <LoadingView />
    );
  }
  else if (!isLoading) {
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
  else {
    return (
      <BlankScreen />
    )
  }
}

export default memo(StateScreen);