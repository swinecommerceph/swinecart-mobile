import React, { memo } from 'react';
import { withNavigation } from 'react-navigation';

import HeaderBarButton from '../HeaderBarButton';

function DrawerButton({ navigation }) {

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

export default withNavigation(memo(DrawerButton));