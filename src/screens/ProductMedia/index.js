import React, { Fragment, memo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { StateScreen } from 'organisms';
import { HeaderBar, BackButton } from 'molecules';
import { LoadingOverlay } from 'atoms';

import {
  MediaList,
  AddPhoto
} from './components'

function Container({ route }) {

  const productId = route.params.id;

  useFocusEffect(
    useCallback(() => {
      setId(productId);
      getItems({ isRefresh: false });
      return () => {
        setLoading(true);
      };
    }, [ route.params.id ])
  );

  const {
    isLoading,
    isUploading,
    isDeleting,
    isSetting,
  } = useStoreState(state => state.productMedia);

  const {
    setId,
    getItems,
    setLoading,
  } = useStoreActions(actions => actions.productMedia);

  return (
    <Fragment>
      <LoadingOverlay
        show={isUploading || isDeleting || isSetting}
      />
      <HeaderBar
        title='Edit Product Media'
        accessoryLeft={BackButton}
        accessoryRight={AddPhoto}
      />
      <StateScreen isLoading={isLoading} hasError={false}>
        <MediaList />
      </StateScreen>
    </Fragment>
  );
}

export default memo(Container);