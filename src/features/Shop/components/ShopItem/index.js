import React, { memo } from 'react';

import { Block, ProductAvatar } from 'shared';

import { 
  ProductInfo,
  ProductActions,
} from './components';

function ShopItem({ data, listIndex }) {

  const { 
    imageUrl, name, type, breedName, age, breederName, farmLocation
  } = data;

  return (
    <Block
      row padding={1}
      backgroundColor='white1'
      borderBottomWidth={1}
      borderBottomColor='gray1'
    >
      <ProductAvatar shape='rounded' image={imageUrl} size={128} />
      <Block marginLeft={1}>
        <ProductInfo
          name={name}
          type={type}
          age={age}
          breed={breedName}
          breederName={breederName}
          farmLocation={farmLocation}
        />
        <ProductActions data={data} />
      </Block>
    </Block>
  );

}

export default memo(ShopItem);