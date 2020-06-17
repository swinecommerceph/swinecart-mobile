import React, { memo } from 'react';

import { NavigationService } from 'services';

import HeaderBarButton from '../HeaderBarButton';

function DrawerButton() {

  const onPressBack = () => {
  };

  return (
    <HeaderBarButton
      onPress={onPressBack}
      iconName='menu'
    />
  )

}

export default memo(DrawerButton, () => true);