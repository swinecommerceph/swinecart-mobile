import React, { Fragment, memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  Form
} from './components';

function FarmForm({ route }) {

  const { mode } = route.params;

  return (
    <Fragment>
      <LoadingOverlay show={false} />
      <HeaderBar
        title={mode === 'add' ? 'Add Farm' : 'Edit Farm Details'}
        accessoryLeft={BackButton}
      />
      <StateScreen isLoading={false} hasError={false}>
        <Form />
      </StateScreen>
    </Fragment>
  );

}

export default FarmForm;
