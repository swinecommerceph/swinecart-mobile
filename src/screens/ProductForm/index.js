import React, { memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { LoadingOverlay } from 'atoms';

import {
  Wizard, FormHeader
} from './components';

function Container({ route }) {

  const { setMode, getProductDetails } = useStoreActions(actions => actions.productForm);

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

  return (
    <StateScreen isLoading={false} hasError={false}>
      {/* <LoadingOverlay show={isLoading} /> */}
      <FormHeader />
      <Wizard />
    </StateScreen>
  );
}

export default memo(Container);