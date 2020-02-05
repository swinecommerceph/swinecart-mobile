import React, { memo } from 'react';

import { Button, Icon } from 'atoms';

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