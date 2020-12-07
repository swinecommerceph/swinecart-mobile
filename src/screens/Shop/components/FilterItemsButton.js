import React, { memo } from 'react';

import { NavigationService } from 'services';

import { HeaderBarButton } from 'molecules';

function FilterItemsButton() {

  const onPress = () => {
    NavigationService.navigate('FilterItems');
  };

  return (
    <HeaderBarButton
      iconName='search'
      onPress={onPress}
    />
  );
}

export default memo(FilterItemsButton);