import React, { memo } from 'react';

import { Block, Text } from 'atoms';

function EmptyListMessage({ message }) {
  return (
    <Block flex={1} center middle backgroundColor='gray2'>
      <Text bold color='gray4' size={20}>
        {message}
      </Text>
    </Block>
  );
}

export default memo(EmptyListMessage, () => true);