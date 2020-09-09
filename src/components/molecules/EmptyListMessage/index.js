import React, { memo } from 'react';

import { Block, Text } from 'atoms';

function EmptyListMessage({ message }) {
  return (
    <Block flex={1} center middle backgroundColor='gray6' padding={1}>
      <Text bold color='gray8' size={16} textAlign='center'>
        {message}
      </Text>
    </Block>
  );
}

export default memo(EmptyListMessage, () => true);