import React, { memo } from 'react';
import { TopNavigationAction } from '@ui-kitten/components';

import { Icon } from 'atoms';

function HeaderBarButton(props) {

  const { iconName, onPress } = props;

  const renderIcon = () => (
    <Icon
      name={iconName}
      color='#ffffff'
      size={26}
    />
  );

  return (
    <TopNavigationAction
      icon={renderIcon}
      onPress={onPress}
    />
  );

}

export default memo(HeaderBarButton, () => true);