import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  Form
} from './components';

function FarmForm({ route }) {

  const { mode } = route.params;

  useFocusEffect(
    useCallback(() => {
      setLoading(false);
      return () => {
        setLoading(true);
        resetForm();
      };

    }, [ route.params ])
  );

  const {
    isLoading
  } = useStoreState(state => state.farmForm);

  const {
    setLoading,
    resetForm,
  } = useStoreActions(actions => actions.farmForm);

  return (
    <Fragment>
      <LoadingOverlay show={false} />
      <HeaderBar
        title={mode === 'add' ? 'Add Farm' : 'Edit Farm Details'}
        accessoryLeft={BackButton}
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <Form mode={mode} />
      </StateScreen>
    </Fragment>
  );

}

export default FarmForm;
