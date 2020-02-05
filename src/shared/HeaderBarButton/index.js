import React, { memo } from 'react';
import { TopNavigationAction, Icon } from '@ui-kitten/components';

function HeaderBarButton(props) {

  const { iconName, onPress } = props;

  const renderIcon = () => (
    <Icon 
      name={iconName} 
      fill='#ffffff'
      width={26}
      height={26}
    />
  );

  return (
    null
    // <TopNavigationAction
    //   icon={renderIcon}
    //   onPress={onPress}
    // />
  );

}

export default memo(HeaderBarButton, () => true);