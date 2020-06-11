import React, { memo } from 'react';
import { 
  BottomNavigationTab as UKBottomNavigationTab
} from '@ui-kitten/components';

import { Text, Icon } from 'atoms';

function BottomNavigationTab(props) {

  const { title, style, selected, iconName, onSelect } = props;

  const color = selected ? 'primary' : 'gray4';

  const renderIcon = () => <Icon name={iconName} color={color} size={22} />;

  return (
    <UKBottomNavigationTab
      title={<Text bold size={12} color={color}>{title}</Text>}
      icon={renderIcon}
      style={style}
      onSelect={onSelect}
    />
  );
};

export default memo(BottomNavigationTab);