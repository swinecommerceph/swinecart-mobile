import React, { memo } from 'react';

import { Block, Text } from 'atoms';

function MessageBox({ status, children, ...otherProps }) {

  const backgroundColor = `color-${status}-100`;
  const color = `color-${status}-400`;

  return (
    <Block flex={false} padding={1}
      borderRadius={5} alignSelf='flex-start' 
      backgroundColor={backgroundColor}
      {...otherProps}
    >
      <Text semibold size={12} textAlign='center' color={color} numberOfLines={3}>
        {children}
      </Text>
    </Block>
  );
}

export default memo(MessageBox, () => true);