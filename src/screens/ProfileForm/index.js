import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  Form
} from './components';

function Container() {

  useFocusEffect(
    useCallback(() => {

      const values = {
        accountType,
        ...profileDetails,
        ...accountType === 'Breeder'
          ? {
            contactPersonName: profileDetails.contactPerson.name,
            contactPersonMobile: profileDetails.contactPerson.mobile,
          } : {} ,
      }

      setValues(values);
    }, [])
  );

  const accountType = useStoreState(state => state.user.accountType);

  const profileDetails = useStoreState(state => state.profile.data);

  const {
    isLoading: {
      isSubmitting
    }
  } = useStoreState(state => state.profileForm);

  const {
    setValues,
  } = useStoreActions(actions => actions.profileForm);

  return (
    <Fragment>
      <LoadingOverlay show={isSubmitting} />
      <HeaderBar
        title='Edit Profile Details'
        accessoryLeft={BackButton}
      />
      <StateScreen
        isLoading={false}
        hasError={false}
      >
        <Form />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);