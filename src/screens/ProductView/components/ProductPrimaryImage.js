import React, { memo } from 'react';
import { Dimensions } from "react-native";
import { withStyles } from '@ui-kitten/components';
import { Block, Image } from 'atoms';

const fallbackUrls = {
  'boar': 'https://swinecart.work/images/product/medium/boar_default.jpg',
  'sow': 'https://swinecart.work/images/product/medium/sow_default.jpg',
  'semen': 'https://swinecart.work/images/product/medium/semen_default.jpg',
  'gilt': 'https://swinecart.work/images/product/medium/gilt_default.jpg',
};

const screenWidth = Math.round(Dimensions.get('window').width / 2);

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
        width={'100%'}
        height={screenWidth}
        backgroundColor='gray7'
      >
        <Image
          style={eva.style.imageStyle}
          imageSource={imageSource}
          fallbackSource={fallbackSource}
          resizeMode='contain'
        />
      </Block>
    </Block>
  );
}


export default withStyles(memo(ProductPrimaryImage, () => true), () => ({
  imageStyle: {
    flex: 1,
    width: null,
    height: screenWidth
  }
}));