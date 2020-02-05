import React, { memo } from 'react';
import { Avatar } from '@ui-kitten/components';

import { Block } from 'atoms';

function ProductAvatar(props) {

  const { image, shape = 'round', size = 96 } = props;

  const imageStyle = [
    {
      width: size,
      height: size
    }
  ];

  const source = {
    uri: image
  };

  const borderRadius = shape === 'round'
    ? size * 0.5
    : shape === 'rounded'
      ? size * 0.3
      : 0;

  return (
    <Block
      overflow='hidden'
      flex={false} borderWidth={1}
      backgroundColor='gray2'
      borderColor='gray2' height={size} width={size}
      borderRadius={borderRadius}
    >
      <Avatar
        shape={shape}
        source={source}
        style={imageStyle}
      />
    </Block>
  );
}

export default memo(ProductAvatar);