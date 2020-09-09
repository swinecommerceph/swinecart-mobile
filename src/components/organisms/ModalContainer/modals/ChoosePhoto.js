import React, { memo } from 'react';
import { Image } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Block, Button, Text } from 'atoms';

function ChoosePhoto(props) {

  // Props

  const { data: { source }, hideModal } = props;

  const uploadPhoto = useStoreActions(actions => actions.productMedia.uploadPhoto);

  const onPressPrimaryAction = () => {
    uploadPhoto(source);
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block backgroundColor='white1' borderRadius={5}>
      <Block padding={1}>
        <Block row center middle
          overflow='hidden'
          width={'100%'}
          height={332}
          borderRadius={5}
          backgroundColor='gray2'
        >
          <Image
            style={{
              flex: 1,
              width: null,
              height: 332
            }}
            source={source}
            resizeMode='cover'
          />
        </Block>
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny'  status='basic' onPress={onPressClose}>
            Cancel
          </Button>
        </Block>
        <Block flex={1}>
          <Button size='tiny' status='info' onPress={onPressPrimaryAction}>
            Upload Photo
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(ChoosePhoto);