import React, { memo } from 'react';

import Button from '../Button';
import Icon from '../Icon';

function IconButton({ iconName, iconSize, iconColor, ...otherProps }) {
  const renderIcon = () => (
    <Icon
      name={iconName}
      size={iconSize}
      color={iconColor}
    />
  );

  return (
    <Button 
      icon={renderIcon}
      {...otherProps}
    />
  );

}

export default memo(IconButton);