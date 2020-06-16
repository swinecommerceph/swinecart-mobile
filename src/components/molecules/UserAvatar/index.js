import React, { memo } from 'react';

import { Block, Text } from 'atoms';

import { getInitials } from 'utils/helpers';

function UserAvatar({ userName, size = 64, textSize = 24 }) {
  return (
    <Block
      center
      middle
      borderWidth={1}
      borderColor='gray1'
      backgroundColor='primary'
      width={size}
      height={size}
      borderRadius={size / 2}
    >
      <Text
        size={textSize}
        color='white1'
        normal
      >
        {getInitials(userName)}
      </Text>
    </Block>
  );
}

export default memo(UserAvatar, () => true);