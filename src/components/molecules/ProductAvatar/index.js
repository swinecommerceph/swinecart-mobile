import React, { memo, useMemo } from 'react';

import { Block, Image } from 'atoms';

const borderRadMultiplier = {
  'round' : 0.5,
  'rounded' : 0.3,
  'square': 0
};

const fallbackUrls = {
  'boar': 'https://swinecart.work/images/product/medium/boar_default.jpg',
  'sow': 'https://swinecart.work/images/product/medium/sow_default.jpg',
  'semen': 'https://swinecart.work/images/product/medium/semen_default.jpg',
  'gilt': 'https://swinecart.work/images/product/medium/gilt_default.jpg',
};

function ProductAvatar(props) {

  const { 
    image: productImageUrl,
    type = 'boar',
    shape = 'rounded',
    size = 96
  } = props;

  const imageStyle = [
    {
      width: size,
      height: size,
      overflow: 'hidden'
    }
  ];

  const borderRadius = useMemo(
    () => size * borderRadMultiplier[shape],
    [ shape, size ]
  );

  const imageSource = useMemo(
    () => ({ uri: productImageUrl }), 
    [ productImageUrl ]
  );

  const fallbackSource = useMemo(
    () => ({ uri: fallbackUrls[type] }),
    [ type ]
  );

  return (
    <Block
      overflow='hidden'
      flex={false} borderWidth={1}
      backgroundColor='white1'
      borderColor='gray4' height={size} width={size}
      borderRadius={borderRadius}
    >
      <Image
        imageSource={imageSource}
        fallbackSource={fallbackSource}
        resizeMode='contain'
        style={imageStyle}
      />
    </Block>
  );
}

export default memo(ProductAvatar);