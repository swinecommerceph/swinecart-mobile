import React, { memo } from 'react';
import { Image } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { Block } from 'atoms';

function ProductPrimaryImage({ eva, photoURL }) {

  const source = {
    uri: photoURL
  };

  return (
    <Block>
      <Block row center middle
        overflow='hidden'
        width={'100%'}
        height={332}
        borderRadius={5}
        backgroundColor='gray2'
      >
        <Image
          style={eva.style.imageStyle}
          source={source}
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