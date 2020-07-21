import React, { memo } from 'react';
import { Block } from 'atoms';

function DetailBlock({ children }) {
  return (
    <Block
      backgroundColor='white1'
      padding={1}
      marginBottom={1}
    >
      {children}
    </Block>
  );
}

export default memo(DetailBlock);