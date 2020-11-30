import React, { memo, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { LoadingOverlay } from 'atoms';

import {
  Wizard, FormHeader
} from './components';

function Container({ route }) {

  useFocusEffect(
    useCallback(() => {

      getFarms();

      const { mode, id } = route.params;

      setMode(mode);

      if (mode === 'edit') {
        getProductDetails(id);
      }

      return () => {
        setLoadingFarms(false);
        resetForm();
      };

    }, [route.params])
  );


  const {
    isLoading,
    isFetchingDetails
  } = useStoreState(state => state.productForm);

  const isFetchingFarms = useStoreState(state => state.farms.isLoading);

  const {
    setMode,
    getProductDetails,
    resetForm,
  } = useStoreActions(actions => actions.productForm);

  const {
    getItems: getFarms,
    setLoading: setLoadingFarms,
  } = useStoreActions(actions => actions.farms);

  return (
    <StateScreen
      isLoading={isFetchingFarms || isFetchingDetails}
      hasError={false}
    >
      <LoadingOverlay show={isLoading} />
      <FormHeader />
      <Wizard />
    </StateScreen>
  );
}

export default memo(Container);