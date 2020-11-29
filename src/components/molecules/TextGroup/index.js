import React, { memo } from 'react';

import {
  Block,
  Text,
} from 'atoms';

function TextGroup(props) {

  const { label, data } = props;

  return (
    <Block
      paddingVertical={0.5}
      paddingHorizontal={1}
      borderBottomWidth={1}
      borderBottomColor='gray2'
    >
      <Text semibold color='gray5'>
        {label}
      </Text>
      <Text semibold>
        {data}
      </Text>
    </Block>
  )
}

export default memo(TextGroup);