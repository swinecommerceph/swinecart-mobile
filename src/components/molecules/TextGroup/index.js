import React, { memo } from 'react';

import {
  Block,
  Text,
} from 'atoms';

function TextGroup(props) {

  const {
    label,
    data,
    isItalicized = false,
    hasBorder = true
  } = props;

  return (
    <Block
      paddingVertical={0.5}
      paddingHorizontal={1}
      borderBottomWidth={hasBorder ? 1 : 0}
      borderBottomColor='gray2'
    >
      <Text semibold color='gray5' size={14}>
        {label}
      </Text>
      {
        isItalicized
          ?
            (
              <Text semibold size={12} italic color='gray5'>
                {data}
              </Text>
            )
          :
            (
              <Text semibold size={12}>
                {data}
              </Text>
            )
      }
    </Block>
  )
}

export default memo(TextGroup);