import React, { memo } from 'react';

import { Block } from 'atoms';
import { Card, ProductInfo } from 'molecules';

import {
  ProductActions,
} from './components';

function ShopItem({ data }) {

  const { 
    imageUrl, name, type, breed, age, breederName, farmLocation
  } = data;

  return (
    <Card>
      {/* <ProductAvatar shape='rounded' image={imageUrl} size={128} /> */}
      <Block marginLeft={1}>
        <ProductInfo
          name={name}
          type={type}
          age={age}
          breed={breed}
          breederName={breederName}
          farmLocation={farmLocation}
        />
        <ProductActions data={data} />
      </Block>
    </Card>
  );

}

export default memo(ShopItem, () => true);