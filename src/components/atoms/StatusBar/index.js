import React, { memo } from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { colors } from 'constants/theme';

function StatusBar() {
  return (
    <RNStatusBar 
      backgroundColor={colors['color-primary-700']}
    />
  );
}

export default memo(StatusBar);