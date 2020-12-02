import React, { memo } from 'react';
import { useWindowDimensions  } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { ModalService } from 'services';

import { Block, Button } from 'atoms';

import SliderImage from './SliderImage';

function MediaItem({ data: { id, link } }) {

  const { width } = useWindowDimensions();

  const imageHeight = ~~(width / 2);

  const priImageId = useStoreState(state => state.productMedia.primaryImageId);

  const onPressSet = () => {
    ModalService.showModal('SetPrimary', { id });
  };

  const onPressDelete = () => {
    ModalService.showModal('DeletePhoto', { id });
  };

  const isPrimaryImage = id === priImageId;

  return (
    <Block
      flex={1}
      backgroundColor='white1'
      borderTopWidth={0.5}
      borderTopColor='gray8'
    >
      <SliderImage
        imageUrl={link}
        height={imageHeight}
      />
      <Block row padding={0.5} alignSelf='center'>
        <Button
          size='small'
          status='primary'
          onPress={onPressSet}
          disabled={isPrimaryImage}
          marginRight={1}
        >
          Set Primary
        </Button>
        <Button
          size='small'
          status={isPrimaryImage ? 'primary' : 'basic'}
          onPress={onPressDelete}
          disabled={isPrimaryImage}
        >
          Delete Photo
        </Button>
      </Block>
    </Block>
  );
}

export default memo(MediaItem);