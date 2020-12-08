import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Block } from 'atoms';

function Card({ children, isPressable, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.30}
      disabled={!isPressable}
      onPress={onPress}
    >
      <Block
      flex={1}
      row padding={1}
      backgroundColor='white1'
      borderTopWidth={0.5}
      borderTopColor='gray8'
      // borderBottomWidth={0.5}
      // borderBottomColor='gray8'
    >
      {children}
    </Block>
    </TouchableOpacity>
  );
}

export default memo(Card);