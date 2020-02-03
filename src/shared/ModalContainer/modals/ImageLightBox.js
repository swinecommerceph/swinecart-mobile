import React, { memo } from 'react';
import { Image } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Block from '../../Block';
import Button from '../../Button';

function ImageLightBox(props) {

  // Props

  const { data: { source }, hideModal } = props;
  const uploadPhoto = useStoreActions(actions => actions.productMedia.uploadPhoto);

  const onPressPrimaryAction = () => {
    uploadPhoto(source);
  };

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Block>
      <Block row center middle
        width={'100%'}
        height={332}
        backgroundColor='gray2'
      >
        <Image
          style={{
            flex: 1,
            width: null,
            height: '100%'
          }}
          source={source}
          resizeMode='cover'
        />
      </Block>
      <Block row center right padding={1} >
        <Block flex={1} marginRight={1}>
          <Button size='tiny' appearance='ghost' status='primary' onPress={onPressClose}>
            Close
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

export default memo(ImageLightBox);