import React, { memo, useState } from 'react';
import { withStyles } from '@ui-kitten/components';
import RNModal from 'react-native-modal';

import { sizes } from 'constants/theme';

function Modal(props) {

  const [ isVisible, setVisible ] = useState(true);

  const { themedStyle, destroyModal, ModalComponent, data } = props;

  const hideModal = () => {
    setVisible(false);
  };

  const onBackdropPress = () => {
    hideModal();
  };

  const onBackButtonPress = () => {
    hideModal();
  };

  const onModalHide = () => {
    destroyModal();
  };

  return (
    <RNModal
      hideModalContentWhileAnimating={true}
      coverScreen={true}
      isVisible={isVisible}
      backdropOpacity={0.60}
      useNativeDriver={true}
      propagateSwipe={true}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      onModalHide={onModalHide}
      avoidKeyboard={true}
      style={themedStyle.modal}
    >
      <ModalComponent hideModal={hideModal} data={data} />
    </RNModal>
  );

}

export default withStyles(memo(Modal), () => ({
  modal: {
    flex: 1,
    margin: sizes.margin
  }
}));