import React, { memo } from 'react';

import { Block } from 'atoms';

function Card({ children }) {
  return (
    <Block
      flex={1}
      row padding={1}
      backgroundColor='white1'
      borderBottomWidth={2}
      borderBottomColor='gray1'
    >
      {children}
    </Block>
  );
}

export default memo(Card, () => true);