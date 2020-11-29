import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';

function Container() {

  const { getItems } = useStoreActions(actions => actions.farms);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Fragment>
      <HeaderBar title='Farms' accessoryLeft={BackButton} />
    </Fragment>
  );
}

export default memo(Container);