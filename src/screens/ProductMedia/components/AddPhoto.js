import React, { memo } from 'react';
import ImagePicker from 'react-native-image-picker';
import { useStoreActions } from 'easy-peasy';

import { HeaderBarButton } from 'molecules';

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
      }
      else if (response.didCancel) {

      }
      else {
        uploadPhoto(response);
      }
    });
  };

  return (
    <HeaderBarButton
      iconName='plus'
      onPress={onPressOpenPicker}
    />
  );
}

export default memo(AddPhoto, () => true);