import React, { memo } from 'react';

import { Block, Text, Icon } from 'atoms';

function MessageBox({ status, message, ...otherProps }) {

  const borderColor = `color-${status}-500`;
  const backgroundColor = `color-${status}-100`;
  const color = `color-${status}-400`;

  return (
    <Block flex={false} padding={1}
      borderRadius={5} alignSelf='flex-start' 
      backgroundColor={backgroundColor}
      borderLeftColor={borderColor}
      borderLeftWidth={5}
      {...otherProps}
    >
      <Text semibold size={12} textAlign='left' color={color} numberOfLines={3}>
        {message}
      </Text>
    </Block>
  );
}

export default memo(MessageBox, () => true);