import React, { memo } from 'react';
import { withStyles } from '@ui-kitten/components';
import { Block, Image } from 'atoms';

const fallbackUrls = {
  'boar': 'https://swinecart.work/images/product/medium/boar_default.jpg',
  'sow': 'https://swinecart.work/images/product/medium/sow_default.jpg',
  'semen': 'https://swinecart.work/images/product/medium/semen_default.jpg',
  'gilt': 'https://swinecart.work/images/product/medium/gilt_default.jpg',
};


function ProductPrimaryImage({ eva, photoURL, type }) {

  const imageSource = {
    uri: photoURL
  };

  const fallbackSource = {
    uri: fallbackUrls[type]
  };

  return (
    <Block row>
      <Block row center middle
        overflow='hidden'
        width={'100%'}
        height={332}
        borderRadius={5}
        backgroundColor='gray2'
      >
        <Image
          style={eva.style.imageStyle}
          imageSource={imageSource}
          fallbackSource={fallbackSource}
          resizeMode='cover'
        />
      </Block>
    </Block>
  );
}


export default withStyles(memo(ProductPrimaryImage, () => true), () => ({
  imageStyle: {
    flex: 1,
    width: null,
    height: 332
  }
}));