import React, { Fragment, memo, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { LoadingOverlay } from 'atoms';

import {
  Wizard,
  FormHeader
} from './components';

function Container({ route }) {

  const { mode, id } = route.params;

  useEffect(() => {
    getFarms({ isRefresh: false });
  }, []);

  useFocusEffect(
    useCallback(() => {

      setMode(mode);

      if (mode === 'edit') {
        getProductDetails(id);
      }

      return () => {
        resetForm();
      };
    }, [ route.params ])
  );

  const {
    isLoading: {
      isFetchingDetails,
      isSubmitting,
    }
  } = useStoreState(state => state.productForm);

  const isFetchingFarms = useStoreState(state => state.farms.isLoading);

  const {
    setMode,
    getProductDetails,
    resetForm,
  } = useStoreActions(actions => actions.productForm);

  const getFarms = useStoreActions(actions => actions.farms.getItems);

  return (
    <Fragment>
      <LoadingOverlay show={isSubmitting} />
      <StateScreen
        isLoading={isFetchingFarms || isFetchingDetails}
        hasError={false}
      >
        <FormHeader />
        <Wizard />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);