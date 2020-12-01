import React, { memo } from 'react';
import { useWindowDimensions  } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Button } from 'atoms';

import SliderImage from './SliderImage';

function MediaItem({ data: { id, link } }) {

  const { width } = useWindowDimensions();

  const imageHeight = ~~(width / 2);

  const {
    primaryImageId
  } = useStoreState(state => state.productMedia);

  const {
    deletePhoto
  } = useStoreActions(actions => actions.productMedia);

  const onPressSet = () => {

  };

  const onPressDelete = () => {
    deletePhoto(id);
  };

  const isPrimaryImage = id === primaryImageId;

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

export default memo(MediaItem, () => true);