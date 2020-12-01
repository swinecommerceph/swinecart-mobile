import React, { memo } from 'react';
import ImagePicker from 'react-native-image-picker';
import { useStoreActions } from 'easy-peasy';

import { Block, Button } from 'atoms';

const options = {
  title: 'Select Photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


function AddPhoto() {

  const uploadPhoto = useStoreActions(actions => actions.productMedia.uploadPhoto);

  const onPressOpenPicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else {
        uploadPhoto(response);
      }
    });
  };

  return (
    <Block height={100} padding center middle backgroundColor='white1'>
      <Button size='small' status='primary' onPress={onPressOpenPicker}>
        Add Photo
      </Button>
    </Block>
  );
}

export default memo(AddPhoto, () => true);