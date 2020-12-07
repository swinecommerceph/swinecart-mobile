import React, { memo } from 'react';

import { NavigationService } from 'services';

import HeaderBarButton from '../HeaderBarButton';

function BackButton() {

  const onPressBack = () => {
    NavigationService.back();
  };

  return (
    <HeaderBarButton
      onPress={onPressBack}
      iconName='arrow-back'
    />
  )

}

export default memo(BackButton);