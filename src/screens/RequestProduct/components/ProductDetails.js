import React, { Fragment, memo } from 'react';

import { ProductInfo, ProductAvatar } from 'molecules';
import { Block } from 'atoms';

function ProductDetails({ product }) {

  const {
    imageUrl, name, type, breed, age, breederName, farmLocation
  } = product;

  return (
    <Block row flex={1} marginVertical={1} paddingHorizontal={1}>
      <ProductAvatar
        type={type}
        shape='rounded'
        image={imageUrl}
        size={144}
      />
      <Block flex={1} marginLeft={1}>
        <ProductInfo
          name={name}
          type={type}
          age={age}
          breed={breed}
          breederName={breederName}
          farmLocation={farmLocation}
        />
      </Block>
    </Block>
  );
}

export default memo(ProductDetails);