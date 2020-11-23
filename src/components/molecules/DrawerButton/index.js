import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';

import HeaderBarButton from '../HeaderBarButton';

function DrawerButton() {

  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.openDrawer();
  };

  return (
    <HeaderBarButton
      onPress={onPressBack}
      iconName='menu'
    />
  )

}

export default memo(DrawerButton);