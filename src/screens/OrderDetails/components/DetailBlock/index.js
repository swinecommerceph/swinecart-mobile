import React, { memo } from 'react';
import { Block } from 'atoms';

function DetailBlock({ children }) {
  return (
    <Block
      backgroundColor='white1'
      marginTop={1}
    >
      {children}
    </Block>
  );
}

export default memo(DetailBlock);