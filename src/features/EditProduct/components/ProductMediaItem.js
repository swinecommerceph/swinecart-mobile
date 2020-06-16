import React, { Fragment, memo, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { ModalService } from 'services';

import { ProductAvatar } from 'molecules';
import { Block, Button } from 'atoms';


function ProductMediaItem({ data }) {

  const { id, link } = data;

  const onPress = () => {
    const source = { uri: link };
    ModalService.showModal('ImageLightBox', { source });
  };

  const onDelete = () => {
    
  };

  const onSetPhoto = () => {

  };

  return (
    <Fragment>
      <Block row backgroundColor='white1' borderBottomWidth={1} borderBottomColor='gray1'>
        <TouchableOpacity
          activeOpacity={0.30}
          onPress={onPress}
        >
          <ProductAvatar
            image={link}
            shape='square'
            size={144}
          />
        </TouchableOpacity>
        <Block flex={1} padding={1} middle>
          <Button size='small' status='info' onPress={onSetPhoto}>
            Set as Display Photo
            </Button>
          <Button size='small' status='danger' marginTop={0.5} onPress={onDelete}>
            Delete Photo
          </Button>
        </Block>
      </Block>
    </Fragment>
  );
}

export default memo(ProductMediaItem);