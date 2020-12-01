import React, { memo } from 'react';

import { Block } from 'atoms';

function Card({ children }) {
  return (
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
  );
}

export default memo(Card);