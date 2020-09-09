import React, { Fragment, memo, useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import { useStoreState, useStoreActions } from 'easy-peasy';

import { ModalService } from 'services';

import { Block, Button } from 'atoms';

import ProductMediaList from './ProductMediaList';

function ProductMedia() {

  const currentProduct = useStoreState(state => state.productMedia.currentProduct);
  const getPhotos = useStoreActions(actions => actions.productMedia.getItems);

  useEffect(() => {
    if (currentProduct) {
      getPhotos({ isRefresh: false });
    }
  }, [currentProduct]);

  const onChoosePhoto = () => {

    const options = {
      noData: true,
      mediaType: 'photo'
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = { uri: response.uri };
        ModalService.showModal('ChoosePhoto', { source });
      }
    });
  };

  return (
    <Fragment>
      <Block padding={1}>
        <Button size='large' status='primary' onPress={onChoosePhoto}>
          Choose Photo
        </Button>
      </Block>
      <ProductMediaList />
    </Fragment>
  );
}

export default memo(ProductMedia);