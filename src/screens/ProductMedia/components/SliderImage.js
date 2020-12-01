import React, { memo } from 'react';
import { withStyles } from '@ui-kitten/components';

import { Block, Image } from 'atoms';

function SliderImage({ eva, imageUrl, height }) {

  const imageSource = {
    uri: imageUrl
  };

  const imageStyle = [
    eva.style.imageStyle,
    { height: height }
  ];

  return (
    <Block row>
      <Block row center middle
        width='100%'
        height={height}
        backgroundColor='gray7'
      >
        <Image
          style={imageStyle}
          imageSource={imageSource}
          resizeMode='contain'
        />
      </Block>
    </Block>
  );
}


export default withStyles(memo(SliderImage, () => true), () => ({
  imageStyle: {
    flex: 1,
    width: null,
  }
}));