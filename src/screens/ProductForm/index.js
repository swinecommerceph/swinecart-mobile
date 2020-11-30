import React, { memo, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { LoadingOverlay } from 'atoms';

import {
  Wizard, FormHeader
} from './components';

function Container({ route }) {

  useEffect(() => {
    getFarms();
  }, []);

  useFocusEffect(
    useCallback(() => {

      const { mode, id } = route.params;

      setMode(mode);

      if (mode === 'edit') {
        getProductDetails(id);
      }
      else {

      }

      return () => {

      };

    }, [route.params])
  );


  const isLoading = useStoreState(state => state.productForm.isLoading);
  const isFetchingFarms = useStoreState(state => state.farms.isLoading);

  const {
    setMode,
    getProductDetails,
  } = useStoreActions(actions => actions.productForm);

  const getFarms = useStoreActions(actions => actions.farms.getItems);

  return (
    <StateScreen isLoading={isFetchingFarms} hasError={false}>
      <LoadingOverlay show={isLoading} />
      <FormHeader />
      <Wizard />
    </StateScreen>
  );
}

export default memo(Container);