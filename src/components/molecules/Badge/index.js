import React, { memo } from 'react';
import { Block, Text } from 'atoms';

function Badge({ text, ...otherProps }) {
  return (
    <Block
      alignSelf='flex-start'
      center middle padding={0.25}
      borderRadius={50}
      {...otherProps}
    >
      <Text bold color='white1' size={14}>
        {text}
      </Text>
    </Block>
  );

}

export default memo(Badge);