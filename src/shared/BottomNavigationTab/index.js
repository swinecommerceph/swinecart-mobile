import React, { memo, useMemo, useCallback } from 'react';
import { 
  BottomNavigationTab as UKBottomNavigationTab, withStyles
} from '@ui-kitten/components';

import { colors } from 'constants/theme';

import { computeLineHeight } from 'utils';

import Icon from '../Icon';

function BottomNavigationTab(props) {

  const {
    title, style, selected, iconName,
    onSelect, themedStyle
  } = props;

  const renderIcon = useCallback(() => (
    <Icon
      name={iconName}
      color={selected ? colors.primary : colors.gray4}
      size={24}
    />
  ), [ selected ]);

  const titleStyle = useMemo(() => {
    return [
      themedStyle.tabText,
      {
        color: selected ? colors.primary : colors.gray4,
      }
    ]
  }, [ selected ]);

  return (
    <UKBottomNavigationTab
      title={title}
      titleStyle={titleStyle}
      icon={renderIcon}
      style={[style, themedStyle.tabStyle]}
      onSelect={onSelect}
    />
  );
};

export default withStyles(memo(BottomNavigationTab), () => ({
  tabText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    lineHeight: computeLineHeight(12)
  }
}));