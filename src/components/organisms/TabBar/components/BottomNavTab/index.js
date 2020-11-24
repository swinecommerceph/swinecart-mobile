import React, { memo, useMemo } from 'react';
import {
  BottomNavigationTab as UKBottomNavigationTab
} from '@ui-kitten/components';

import { Text, Icon } from 'atoms';

function BottomNavTab(props) {

  const { title, style, selected, iconName, onSelect } = props;

  const color = useMemo(() => selected ? 'primary' : 'gray8', [ selected ]);

  const renderIcon = () => <Icon name={iconName} color={color} size={22} />

  return (
    <UKBottomNavigationTab
      title={<Text bold size={12} color={color}>{title}</Text>}
      icon={renderIcon}
      style={style}
      onSelect={onSelect}
    />
  );
};

export default memo(BottomNavTab);