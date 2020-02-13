import React, { memo } from 'react';

import Block from '../Block';
import Text from '../Text';

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