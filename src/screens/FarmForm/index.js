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

  useFocusEffect(
    useCallback(() => {
      setMode(mode);

      if (mode === 'edit') {
        setValues(farmDetails);
      }

      return () => {
        resetForm();
      }
    }, [ route.params ])
  );

  const { mode } = route.params;

  const {
    isLoading: {
      isSubmitting
    },
  } = useStoreState(state => state.farmForm);

  const farmDetails = useStoreState(state => state.farmDetails.data);

  const {
    setValues,
    setMode,
    resetForm,
  } = useStoreActions(actions => actions.farmForm);

  return (
    <Fragment>
      <LoadingOverlay show={isSubmitting} />
      <HeaderBar
        title={mode === 'add' ? 'Add Farm' : 'Edit Farm Details'}
        accessoryLeft={BackButton}
      />
      <StateScreen
        isLoading={false}
        hasError={false}
      >
        <Form
          mode={mode}
        />
      </StateScreen>
    </Fragment>
  );

}

export default memo(FarmForm);
