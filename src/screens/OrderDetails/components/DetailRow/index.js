import React, { memo } from 'react';

import { Text, Block } from 'atoms';

function DetailRow({ label, value }) {
  return (
    <Block row space='between'>
      <Text
        bold size={12}
        color='gray4'
      >
        {label}
      </Text>
      <Text
        bold size={12}
        color='black1'
        textAlign='center' numberOfLines={2}
      >
        {value}
      </Text>
    </Block>
  );
}

export default memo(DetailRow);