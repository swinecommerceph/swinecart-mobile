import React, { memo } from 'react';

import { Block } from 'atoms';

function Card({ children }) {
  return (
    <Block
      row padding={1}
      backgroundColor='white1'
      borderBottomWidth={2}
      borderBottomColor='gray2'
    >
      {children}
    </Block>
  );
}

export default memo(Card, () => true);